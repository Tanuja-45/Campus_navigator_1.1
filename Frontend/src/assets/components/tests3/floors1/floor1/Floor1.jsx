import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import blueprintImage1 from "../../../../images/maps/mech.png";
import blueprintImage2 from "../../../../images/maps/eee&civil.png"; 

const Floor1 = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showPath, setShowPath] = useState(false);

  // Define the bounds for both images, ensuring they are side by side
  const blueprintBounds1 = [[0, -150], [200, 150]]; // Left image, width adjusted to 125
  const blueprintBounds2 = [[0, 145], [200, 450]]; // Right image, starts where the left one ends

  const roomLocations = {
    "407": [18, -3], "408": [38, -3], "409": [20, -38],
    "410": [15, -52], "411": [35, -50], "412": [35, -75],
    "413": [58, -100], "414": [35, -117], "415": [50, -130], "416": [65, -130],
    "417": [87, -130], "418": [100, -130], "419": [110, -130], "420": [130, -130],
    "421": [149, -130], "422": [168, -130], "423": [158, -90],"424":[158, -75], "425": [178, -75], 
    "426": [178, -10], "427": [155, -10], "428": [178, 30], "429": [165, 30],"430": [155, 30],
    "431": [155, 45], "432": [165, 250], "433": [158, 270], "434": [165, 270],
    "435": [178, 280], "436": [178, 320], "436A": [155, 320],"437": [178, 350],"438":[165, 350],"439":[155, 350],
    "440":[155, 370], "441":[155, 385],"442":[178, 420],"443":[145, 435], "444":[135, 435],"445":[125, 435],
    "446":[110, 435],"447":[100, 435],"448":[100, 420],"449":[75, 435],"454":[40, 395],"462":[18, 270],
  };

  const pathCoordinates = [
    [30, 3], [30, -20], [30, -32], [53, -32],[53, -50], [53, -65], [53, -78], [53, -90], [53, -108], [53, -122], [55, -122],
    [65, -122], [75, -122], [90, -122], [105, -122], [120, -122], [135, -122], [145, -122], [148, -122],
    [148, -120], [148, -100], [148, -85], [148, -70], [148, -55], [148, -40], [148, -32],[160, -32 ],[170, -32],
    [170, -20], [170, 0], [170, 8], [158, 8], [148, 8], [148, 20], [148, 35],[148, 45],[148, 55],[148, 65], [148, 75],  [148, 85],  [148, 100],
    [148, 120], [148, 130], [148, 140], [150, 150], [150, 160], [150, 170], [150, 180], [150, 190], [150, 200], [150, 210], [150, 220], [150, 230],
    [150, 240], [150, 250], [150, 260], [150, 270], [150, 280], [150, 293], [165, 293], [171, 293], [171, 320], [171, 330], [171, 338], [164, 338],
    [164, 338], [154, 338], [150, 338], [150, 350], [150, 360], [150, 370],[150, 380],[150, 390],[150, 400],[150, 410],[150, 420],[150, 428],[140, 428],
    [130, 428],[120, 428],[110, 428],[100, 428],[90, 428],[80, 428],[70, 428],[60, 428],[50, 428],[50, 425],[50, 415],
    [50, 405],[50, 395],[50, 385],[50, 375],[50, 365],[50, 355],[50, 345],[50, 336],[45, 336],[35, 336],[30, 336],[30, 320],[30, 310],[30, 300],[30, 292],[38, 292],
    [45, 292],[50, 292],[50, 280],[50, 270],[50, 260],[50, 250],[50, 240],[50, 230],[50, 220],[50, 210],[50, 200],[50, 190],[50, 180],[50, 170],[55, 170],[65, 170],[70, 170],
    [70, 160],[70, 150],[70, 145],[80, 145],[90, 145],[100, 145],[110, 145],[120, 145],[130, 145],[140, 145],[150, 145],
   
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

      {/* Links Section */}
      <div className="info-links">
        <a href="/fed">Don't know faculty details? Check here</a> |
        <a href="/fed-map">Don't know room details? Check here</a>
      </div>

      <MapContainer
        center={[100, 145]}
        zoom={1.3}
        style={{ height: "410px", width: "100%" }}
        crs={L.CRS.Simple}
        zoomControl={true}
        dragging={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
      >
        <ImageOverlay url={blueprintImage1} bounds={blueprintBounds1} opacity={1} />
        <ImageOverlay url={blueprintImage2} bounds={blueprintBounds2} opacity={1} />
        {source && <Marker position={source} />}
        {destination && <Marker position={destination} />}
        {showPath && (
          <Polyline positions={pathCoordinates} color="blue" weight={4} dashArray="5, 10" />
        )}
      </MapContainer>

    </div>
  );
};

export default Floor1;