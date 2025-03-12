import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import blueprintImage from "../../../images/maps/campus.png";
import './campus.css';

const CAMPUSN = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showPath, setShowPath] = useState(false);

  const blueprintBounds = [[0, 0], [150, 250]];

  const roomLocations = {
    "Administration Block": [53, 115],
    "Central Library": [128, 125],
    "Parking": [140, 220],
    "Canteen": [100, 8],
    "Sports Complex": [115, 235],
    "Auditorium": [128, 125],
    "Main Gate 1": [15, 240],
    "Main Gate 2": [15, 10],
    "PortFolio": [35, 130],
    "Open Air Stage": [85, 40],
  };

  const pathCoordinates = [
    [55, 42],[55, 50],[55, 60],[55, 70],[55, 80],[55, 90],[55, 100],[55, 110],[55, 120],[55, 130],[55, 140],[55, 150],[55, 160],[55, 170],[55, 180],[55, 190],[55, 200],
    [65,220], [75,220], [85,220], [95,220], [107,220], [107, 210],[110, 210],[113, 210],[113, 205],[116, 205],[121, 205],[121, 200], [121, 190],[121, 180],[121, 170],[121, 160],[121, 150],[121, 140],[121, 130],[121, 120],[121, 110],[121, 100],[121, 90],[121, 80],[121, 70],[121, 60],[121, 50],[121, 42],[121, 38],
    [116, 38],[110, 38],[110, 30],[110, 28],[110, 25],[100, 25],[90, 25], [85, 25],[75, 25],[65, 25],[65, 30],[65, 35],[60, 40],
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

export default CAMPUSN;