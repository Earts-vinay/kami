import MapSidebar1 from "../components/MapContents/MapSidebar1";
import MapListSidebar from "../components/MapContents/MapListSidebar";
import AlertSidebar from "../components/MapContents/AlertSidebar";
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import {MarkerClusterer} from "@googlemaps/markerclusterer";
import { Box } from "@mui/material";
import { Navbar } from "../components";
import { GoogleMap, LoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import NavbarLoader from "./NavbarLoader";


const MapContainer = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const [viewport, setViewport] = useState({
    width: "500px",
    height: "500px",
    latitude: 17.4539766,
    longitude: 78.3948765,
    zoom: 9,
    maxZoom: 16,
    pitch: 50,
    bearing: 0,
  });
  const mapStyles = {
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    backgroundColor: 'transparent',
  };
  const mapOptions = {
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' },
        ],
      },
    ],
  };

  const defaultCenter = {
    lat: 17.4399,
    lng: 78.4983,
  };
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoClose = () => {
    setSelectedMarker(null);
  };
  const locations = [
    { lat: 17.4489, lng: 78.3907 }, // Hitech City
    { lat: 17.3616, lng: 78.4747 }, // Charminar
    { lat: 17.4432, lng: 78.3497 }, // Gachibowli
    { lat: 17.4156, lng: 78.4347 }, // Banjara Hills
    { lat: 17.4399, lng: 78.4983 }, // Secunderabad (Default Center)
  ];
  //const responsePoleData = useSelector(selectResponseData);
  //console.log("mapresponseData",responsePoleData)
  return (
    <LoadScript googleMapsApiKey="AIzaSyAmaZMMaAgoUxEmbWdg1Xv0d2dSibZcZs8">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter} options={mapOptions}>
        {/* Render markers for each location */}
        {locations?.map((location, index) => (
          <MarkerF 
          key={index} position={location} onClick={() => handleMarkerClick(location)} />
        ))}
         
        {/* Render InfoWindow when marker is selected */}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={handleInfoClose}
          >
            <div>
              <h3>{selectedMarker.name}</h3>
              {/* <h1>asdfghjhgtrewqwerghjmhgf</h1> */}
              {/* You can add additional content here */}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default function Intro() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  // const trees = [
  //   ["Ash, green", 17.443469, 78.378288],
  //   ["Birch, white", 17.448716, 78.370855],
  //   ["Maple, Manitoba", 17.449205, 78.375813],
  //   ["Elm, American 'Valley Forge'", 17.449640, 78.381609],
  //   ["Spruce, Colorado blue", 17.450462, 78.388278],
  //   ["Maple, Norway 'Schwedler'", 17.454818, 78.388454],
  //   ["Mulberry, white", 17.457497, 78.384547],
  //   ["Elm, Siberian", 17.456059, 78.377732],
  //   ["Kentucky coffee", 17.454680, 78.373747],
  //   ["Katsura, Japanese", 17.451644, 78.369985],
  // ];

  // const handleMarkerClick = (marker) => {
  //   setSelectedMarker(marker);
  // };

  return (
    <>
      {/* Navbar component */}
      <NavbarLoader  />
      <div style={{ height: "80vh", maxWidth: "98vw", marginLeft: "20px", marginRight: "20px", borderRadius: "10px", overflow: "hidden"}}>
      <MapContainer />
      </div>
    </>
  );
}

// function Markers({ points, onMarkerClick }) {
//   const map = useMap(); 
//   const [markerClusterer, setMarkerClusterer] = useState(null); 

//   useEffect(() => {
//     if (!map || !Array.isArray(points) || points.length === 0) return;

//     const loadMarkerClustererLibrary = async () => {
//       try {
//         const google = window.google; 
//         if (!google) return;

//         const { Marker } = google.maps; 
//         const markerList = points.map(point => {
//           const marker = new Marker({
//             position: { lat: point[1], lng: point[2] }, 
//             map: map
//           });

//           marker.addListener("click", () => {
//             if (onMarkerClick) {
//               onMarkerClick(marker); 
//             }
//           });

//           return marker;
//         });

//         const clusterer = new MarkerClusterer(map, markerList, {
//           imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
//         });

//         clusterer.addListener("clusterclick", cluster => {
//           if (onMarkerClick) {
//             onMarkerClick(cluster); 
//           }
//         });

//         setMarkerClusterer(clusterer);
//       } catch (error) {
//         console.error("Error loading MarkerClusterer library:", error);
//       }
//     };

//     loadMarkerClustererLibrary();

//     return () => {
//       if (markerClusterer) {
//         markerClusterer.clearMarkers(); 
//       }
//     };
//   }, [map, points, onMarkerClick]); 

//   return null; 
// }
