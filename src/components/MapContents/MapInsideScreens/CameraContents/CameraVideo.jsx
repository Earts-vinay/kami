import { Box } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'

const CameraVideo = () => {
  return (
    <>
        {/* Video section */}
        <Box sx={{ padding: "0px !important", "&.css-19kzrtu": { padding: "0px !important" },height:"57vh"}}>
  {/* MUI Video Player */}
  <ReactPlayer
    url="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    width="100%"
    height="100%"  
    controls={true}
    style={{ borderRadius: "10px", padding: "0px !important", "&.css-19kzrtu": { padding: "0px !important" } }}
  />
</Box>

    </>
  )
}

export default CameraVideo