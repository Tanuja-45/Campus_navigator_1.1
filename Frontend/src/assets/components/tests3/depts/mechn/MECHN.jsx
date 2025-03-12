import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import blueprintImage from "../../../../images/maps/mech.png";
import './MECHN.css';

const MECHN = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showPath, setShowPath] = useState(false);

  const blueprintBounds = [[0, 0], [150, 250]];

  const roomLocations = {
    "101": [25, 215], "102": [17, 195], "103": [27, 190],
    "104": [29, 168], "105": [29, 151], "106": [10, 161],
    "107": [10, 118], "108": [29, 117], "109": [12, 79], 
    "110": [25, 53], "111": [45, 43], "112": [45, 33],
    "113": [25, 23], "114": [50, 13], "115": [65, 13],"116":[77, 13], "117": [88, 13], "118": [99, 13], "118B": [110, 13],
    "119": [130, 13], "120": [120, 45], "121": [120, 60], "122": [120, 70],
     "123": [135, 110], "123A": [115, 110], "124": [135, 140],
    "125": [118, 140], "126": [118, 155], "128": [120, 185],
    "129": [130, 220], "Lift": [48, 225]
  };

  const pathCoordinates = [
    [39, 225], [39, 195], [39, 185], [39, 163],
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
        <a href="/csm">Don't know faculty details? Check here</a> |
        <a href="/csm-map">Don't know room details? Check here</a>
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

export default MECHN;