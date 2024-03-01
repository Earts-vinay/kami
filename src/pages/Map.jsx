// import React, { useState } from "react";
// import { Navbar } from "../components";
// import { Box, Container, IconButton, Paper, Typography, Card, CardContent, CardMedia } from "@mui/material";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import MapSidebar1 from "../components/MapContents/MapSidebar1";
// import MapListSidebar from "../components/MapContents/MapListSidebar";
// import AlertSidebar from "../components/MapContents/AlertSidebar";


// const Map = () => {
 
//   const mapContainerStyle = {
//     width: "100%",
//     height: "80vh",
//     borderRadius: "5px",
//   };

//   const center = {
//     lat: 37.7749,
//     lng: -122.4194,
//   };



//   return (
//     <>
//       <Navbar />
//       <Container maxWidth="xl">
//         <Box sx={{ marginTop: "20px", borderRadius: "5px" }}>
//           <LoadScript
//           googleMapsApiKey="AIzaSyB_ay2HsNu0qfGGRMf8QHkloL0zIU_uWmw"
//             googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&useMapsLibrary=places,geometry"
//           >
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={center}
//               zoom={10}
//               label={false}
//             >
//               <Box sx={{ paddingTop: "20px", paddingX: "20px" }}>
//                 <MapListSidebar />
//               </Box>
//               <MapSidebar1 />

//               <AlertSidebar/>
             
//             </GoogleMap>
//           </LoadScript>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Map;


import React, { useEffect, useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import { Navbar } from "../components";
import { Box, Container, IconButton, Paper, Typography, Card, CardContent, CardMedia } from "@mui/material";

import MapSidebar1 from "../components/MapContents/MapSidebar1";
import MapListSidebar from "../components/MapContents/MapListSidebar";
import AlertSidebar from "../components/MapContents/AlertSidebar";

const Map = () => {
  const [destinations, setDestinations] = useState([
    { id: 1, position: { lat: 17.443469, lng: 78.378288 }, label: "A", title: "Hitech City A" },
    { id: 2, position: { lat: 17.448716, lng: 78.370855 }, label: "B", title: "Hitech City B" },
    { id: 3, position: { lat: 17.449205, lng: 78.375813 }, label: "C", title: "Hitech City C" },
    { id: 4, position: { lat: 17.449640, lng: 78.381609 }, label: "D", title: "Hitech City D" },
    { id: 5, position: { lat: 17.450462, lng: 78.388278 }, label: "E", title: "Hitech City E" },
    { id: 6, position: { lat: 17.454818, lng: 78.388454 }, label: "F", title: "Hitech City F" },
    { id: 7, position: { lat: 17.457497, lng: 78.384547 }, label: "G", title: "Hitech City G" },
    { id: 8, position: { lat: 17.456059, lng: 78.377732 }, label: "H", title: "Hitech City H" },
    { id: 9, position: { lat: 17.454680, lng: 78.373747 }, label: "I", title: "Hitech City I" },
    { id: 10, position: { lat: 17.451644, lng: 78.369985 }, label: "J", title: "Hitech City J" },
  ]);

  const mapContainerStyle = {
    width: "100%",
    height: "80vh",
  };

  const center = {
    lat: 17.385044,
    lng: 78.486671,
  };

  useEffect(() => {
    // Log the destinations array to the console to ensure it's populated
    console.log(destinations);
  }, [destinations]);

  return (
<>
<Navbar/>
<Container maxWidth="xl">
<Box sx={{ marginTop: "20px", borderRadius: "5px" }}>
<LoadScript googleMapsApiKey="AIzaSyC-5nyue-_mpTnrAgQ1LfunsNnLlIumhZI">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={18}>
        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            position={destination.position}
            title={destination.title}
            label={destination.label.toString()}
          />
        ))}

<Box sx={{ paddingTop: "20px", paddingX: "20px" }}>
                 <MapListSidebar />
               </Box>
              <MapSidebar1 />

               <AlertSidebar/>
      </GoogleMap>
    </LoadScript>
    </Box>
    </Container>
</>
  );
};

export default Map;
