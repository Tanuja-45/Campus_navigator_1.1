import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import blueprintImage from "../../../../images/maps/it.png";
import './ITN.css';

const ITN = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showPath, setShowPath] = useState(false);

  const blueprintBounds = [[0, 0], [150, 250]];

  const roomLocations = {
    "301": [10, 215], "302": [25, 215], "303": [17, 195], "304": [27, 190],
    "305": [29, 168], "306": [29, 151], "307": [21, 158], "308": [10, 161],
    "309": [10, 118], "310": [29, 117], "311": [12, 79], "312": [25, 85],
    "313": [25, 65], "314": [25, 53], "315": [45, 33], "316": [25, 23],
    "317": [35, 13], "318": [50, 13], "319": [65, 13],"320": [88, 13], "321": [99, 13], "322": [110, 13],
    "323": [130, 13], "324": [120, 45], "325": [120, 60], "326": [120, 70], "327": [120, 80],
    "328": [135, 80], "329": [135, 110], "329A": [115, 110], "330": [135, 140],
    "331": [125, 140], "332": [118, 140], "333": [118, 155], "334": [120, 185],
    "336": [130, 220], "Lift": [48, 225]
  };

  const pathCoordinates = [
    [10, 225], [25, 225], [39, 225], [39, 195], [39, 185], [39, 163],
    [39, 145], [39, 130], [22, 130], [21, 130], [21, 112], [21, 94], [39, 94],
    [39, 80], [39, 65], [39, 50], [39, 43], [39, 25], [39, 20], [45, 19], [65, 19],
    [76, 19], [88, 19], [99, 19], [111, 19], [111, 27], [111, 47], [111, 57],
    [111, 70], [111, 80], [111, 94], [127, 94], [127, 110], [127, 125], [127, 127],
    [123, 128], [111, 128], [111, 140], [111, 160], [111, 190], [111, 220], [111, 235],
    [90, 236], [50, 236], [39, 236], [39, 230], [39, 227]
  ];

  const handleNavigate = () => {
    if (!source || !destination) {
      alert("Please select both source and destination.");
      return;
    }
    setShowPath(true);
  };

  return (
    <div>
      <div className="input-container">
        <select
          value={source ? Object.keys(roomLocations).find((key) => roomLocations[key] === source) : ""}
          onChange={(e) => setSource(roomLocations[e.target.value])}
        >
          <option value="">FROM</option>
          {Object.keys(roomLocations).map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>

        <select
          value={destination ? Object.keys(roomLocations).find((key) => roomLocations[key] === destination) : ""}
          onChange={(e) => setDestination(roomLocations[e.target.value])}
        >
          <option value="">TO</option>
          {Object.keys(roomLocations).map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>

        <button onClick={handleNavigate}>Navigate</button>
      </div>

      <div className="info-links">
        <a href="/it">Don't know faculty details? Check here</a> |
        <a href="/it-map">Don't know room details? Check here</a>
      </div>

      <MapContainer
        center={[60, 115]}
        zoom={1.3}
        style={{ height: "410px", width: "100%" }}
        crs={L.CRS.Simple}
        zoomControl={true}
        dragging={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
      >
        <ImageOverlay url={blueprintImage} bounds={blueprintBounds} />
        {source && <Marker position={source} />}
        {destination && <Marker position={destination} />}
        {showPath && (
          <Polyline positions={pathCoordinates} color="blue" weight={4} dashArray="5, 10" />
        )}
      </MapContainer>
    </div>
  );
};

export default ITN;