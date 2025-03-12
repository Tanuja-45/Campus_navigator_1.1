import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import blueprintImage from "../../../../images/maps/csd&aiml.png";
import './CSMN.css';

const CSMN = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showPath, setShowPath] = useState(false);

  const blueprintBounds = [[0, 0], [150, 250]];

  const roomLocations = {
    "201": [10, 215], "202": [25, 215], "203": [17, 195], "204": [27, 190],
    "205": [29, 168], "206": [29, 151], "207": [21, 158], "208": [10, 161],
    "209": [10, 118], "210": [29, 117], "211": [12, 79], "212": [25, 85],
    "213": [25, 65], "214": [25, 53], "215": [45, 33], "216": [25, 23],
    "217": [35, 13], "218": [50, 13], "219": [65, 13], "220": [76, 13],
    "221": [88, 13], "222": [99, 13], "223": [110, 13], "224": [130, 13],
    "225": [120, 45], "226": [120, 60], "227": [120, 70], "228": [120, 80],
    "229": [135, 80], "230": [135, 110], "230A": [115, 110], "231": [135, 140],
    "232": [125, 140], "233": [118, 140], "234": [118, 155], "235": [120, 185],
    "236": [130, 220], "Lift": [48, 225]
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

export default CSMN;