import MapSidebar1 from "../components/MapContents/MapSidebar1";
import MapListSidebar from "../components/MapContents/MapListSidebar";
import AlertSidebar from "../components/MapContents/AlertSidebar";
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import MarkerClusterer from "@googlemaps/markerclustererplus";
import { Box } from "@mui/material";
import { Navbar } from "../components";

export default function Intro() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const trees = [
    ["Ash, green", 17.443469, 78.378288],
    ["Birch, white", 17.448716, 78.370855],
    ["Maple, Manitoba", 17.449205, 78.375813],
    ["Elm, American 'Valley Forge'", 17.449640, 78.381609],
    ["Spruce, Colorado blue", 17.450462, 78.388278],
    ["Maple, Norway 'Schwedler'", 17.454818, 78.388454],
    ["Mulberry, white", 17.457497, 78.384547],
    ["Elm, Siberian", 17.456059, 78.377732],
    ["Kentucky coffee", 17.454680, 78.373747],
    ["Katsura, Japanese", 17.451644, 78.369985],
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <>
      {/* Navbar component */}
      <Navbar />
      <div style={{ height: "80vh", maxWidth: "98vw", marginLeft: "20px", marginRight: "20px", borderRadius: "10px", overflow: "hidden"}}>
        <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
          <Map
            center={{ lat: 17.443469, lng: 78.378288 }} 
            zoom={14} // Zoom level
            mapId={process.env.REACT_APP_MAPID} // Map ID
            mapOptions={{
              mapTypeId: 'roadmap', // Map type
              zoomControl: true, // Zoom control
              styles: [
                {
                  featureType: 'all',
                  elementType: 'labels',
                  stylers: [{ visibility: 'off' }]
                },
                {
                  featureType: 'all',
                  elementType: 'geometry',
                  stylers: [{ visibility: 'off' }]
                }
              ]
            }}
          >
            {/* Markers */}
            <Markers points={trees} onMarkerClick={handleMarkerClick} />

            {/*List sidebar */}
            <Box sx={{ paddingTop: "20px", paddingX: "20px" }}>
              <MapListSidebar />
            </Box>

            <MapSidebar1 />

            {/* AlertSidebar */}
            <AlertSidebar selectedMarker={selectedMarker} onClose={() => setSelectedMarker(null)} />
          </Map>
        </APIProvider>
      </div>
    </>
  );
}

function Markers({ points, onMarkerClick }) {
  const map = useMap(); 
  const [markerClusterer, setMarkerClusterer] = useState(null); 

  useEffect(() => {
    if (!map || !Array.isArray(points) || points.length === 0) return;

    const loadMarkerClustererLibrary = async () => {
      try {
        const google = window.google; 
        if (!google) return;

        const { Marker } = google.maps; 
        const markerList = points.map(point => {
          const marker = new Marker({
            position: { lat: point[1], lng: point[2] }, 
            map: map
          });

          marker.addListener("click", () => {
            if (onMarkerClick) {
              onMarkerClick(marker); 
            }
          });

          return marker;
        });

        const clusterer = new MarkerClusterer(map, markerList, {
          imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
        });

        clusterer.addListener("clusterclick", cluster => {
          if (onMarkerClick) {
            onMarkerClick(cluster); 
          }
        });

        setMarkerClusterer(clusterer);
      } catch (error) {
        console.error("Error loading MarkerClusterer library:", error);
      }
    };

    loadMarkerClustererLibrary();

    return () => {
      if (markerClusterer) {
        markerClusterer.clearMarkers(); 
      }
    };
  }, [map, points, onMarkerClick]); 

  return null; 
}

