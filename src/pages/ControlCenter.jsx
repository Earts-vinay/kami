import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
  Container,
  InputAdornment,
  InputLabel,
  FormControl,
  Pagination,
  Dialog,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Navbar } from '../components';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import NavbarLoader from "./NavbarLoader";

const commonStyles = {
  fontFamily: "montserrat-regular"
};
const cardData = [
  { id: 1, title: 'Card 1', description: 'Description for Card 1', imageUrl: 'assets/images/car.jpg' },
  { id: 2, title: 'Card 2', description: 'Description for Card 2', imageUrl: 'assets/images/car.jpg' },
  { id: 3, title: 'Card 3', description: 'Description for Card 3', imageUrl: 'assets/images/car.jpg' },
  { id: 4, title: 'Card 4', description: 'Description for Card 4', imageUrl: 'assets/images/car.jpg' },
  { id: 5, title: 'Card 5', description: 'Description for Card 5', imageUrl: 'assets/images/car.jpg' },
  { id: 6, title: 'Card 6', description: 'Description for Card 6', imageUrl: 'assets/images/car.jpg' },
  { id: 7, title: 'Card 7', description: 'Description for Card 7', imageUrl: 'assets/images/car.jpg' },
  { id: 8, title: 'Card 8', description: 'Description for Card 8', imageUrl: 'assets/images/car.jpg' },
  { id: 9, title: 'Card 9', description: 'Description for Card 9', imageUrl: 'assets/images/car.jpg' },
  { id: 10, title: 'Card 10', description: 'Description for Card 10', imageUrl: 'assets/images/car.jpg' },
  { id: 11, title: 'Card 11', description: 'Description for Card 10', imageUrl: 'assets/images/car.jpg' },
  { id: 12, title: 'Card 12', description: 'Description for Card 10', imageUrl: 'assets/images/car.jpg' },
  { id: 13, title: 'Card 13', description: 'Description for Card 10', imageUrl: 'assets/images/car.jpg' },
  { id: 14, title: 'Card 14', description: 'Description for Card 10', imageUrl: 'assets/images/car.jpg' },
  { id: 15, title: 'Card 15', description: 'Description for Card 10', imageUrl: 'assets/images/car.jpg' },
];

const cameraData = [
  { id: 1, name: 'Camera 1', status: 'Online', imageUrl: 'assets/images/car.jpg' },
  { id: 2, name: 'Camera 1', status: 'Online', imageUrl: 'assets/images/car.jpg' },
  { id: 3, name: 'Camera 1', status: 'Online', imageUrl: 'assets/images/car.jpg' },
  { id: 4, name: 'Camera 1', status: 'Online', imageUrl: 'assets/images/car.jpg' },
  { id: 5, name: 'Camera 1', status: 'Online', imageUrl: 'assets/images/car.jpg' },
  { id: 6, name: 'Camera 1', status: 'Online', imageUrl: 'assets/images/car.jpg' },
  { id: 7, name: 'Camera 1', status: 'Online', imageUrl: 'assets/images/car.jpg' },
];

const ControlCenter = () => {
  const [page, setPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openDuplicateDialog, setOpenDuplicateDialog] = useState(false);
  const [selectedCameras, setSelectedCameras] = useState([]);

  const handleCameraToggle = (cameraId) => {
    const isSelected = selectedCameras.includes(cameraId);
    if (isSelected) {
      setSelectedCameras(selectedCameras.filter((id) => id !== cameraId));
    } else {
      setSelectedCameras([...selectedCameras, cameraId]);
    }
  };

  const cardsPerPage = 12;




  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleAddNow = () => {
    setOpenDialog(true);
  };
  const handleDeleteNow = () => {
    setOpenDeleteDialog(true);
  };

  const handleDuplicate = () => {

    setOpenDuplicateDialog(true);
    console.log('Edit button clicked');
  };

  const handleEdit = () => {

    setOpenEditDialog(true);
    console.log('Edit button clicked');
  };

  const handleSave = () => {


    console.log('Edit button clicked');
  };

  const handleDelete = () => {


    console.log('Edit button clicked');
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };
  const handleCloseDuplicateDialog = () => {
    setOpenDuplicateDialog(false);
  };

  const getPaginatedCards = () => {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardData.slice(startIndex, endIndex);
  };

  return (
    <div>
     <NavbarLoader role="propertyView" />
      <Container maxWidth="xxl">
        <Box
          sx={{
            backgroundColor: 'linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)',
            height: '75vh',
            padding: '20px',
            mt: 1,
            borderRadius: '10px',
            backdropFilter: 'blur(15px)',
            boxShadow: " 0 0 5px 0 #2465e9",
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="" gap={2} mb={2} width={800} height={40}>
              <FormControl style={{ width: '30%' }} size="small">
                <InputLabel htmlFor="select-option" sx={commonStyles}> All Camera Views</InputLabel>
                <Select label="Select Option" id="select-option">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                </Select>
              </FormControl>
              <Button variant="outlined" size="small" onClick={handleAddNow} sx={{ textTransform: 'capitalize' }}>
                <AddIcon />
              </Button>
              <Button variant="outlined" size="small" onClick={handleEdit} sx={{ textTransform: 'capitalize' }}>
                <BorderColorOutlinedIcon />

              </Button>
              <Button variant="outlined" size="small" onClick={handleDuplicate} sx={{ textTransform: 'capitalize' }}>
                <LibraryAddOutlinedIcon />
              </Button>
            </Box>
            <TextField
              label="Search"
              variant="outlined"
              style={{ marginBottom: '20px', border: 'solid 1px #2465e9' }}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: 'linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)', border: 'none', borderRadius: '5px' }}
            />
          </Box>

          <Box display="flex" flexWrap="wrap" justifyContent="start" gap={3} height="60vh" overflow="auto" paddingY="10px">
            {getPaginatedCards().map((card) => (
              <Card
                key={card.id}
                sx={{ position: 'relative', width: { xs: '100%', sm: '48%', md: '31.5%' }, gap: '10px', height: '50%', borderRadius: '10px' }}
              >
                <CardMedia component="img" alt={card.title} height="100%" image={card.imageUrl} />
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    color: 'white',
                    borderRadius: '0 0 10px 10px',
                    padding: '0px',
                  }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      background: 'linear-gradient(to bottom, #000, rgba(84, 84, 84, 0.3))',
                      opacity: 0.7,
                      padding: '15px',
                      color: 'white',
                      ...commonStyles
                    }}
                  >
                    {card.description}
                  </Typography>

                  <CloseIcon onClick={handleDeleteNow}
                    sx={{ position: 'absolute', top: 0, right: 0, color: 'white', cursor: 'pointer', paddingY: '15px', paddingX: '10px' }}
                  />
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center !important', paddingTop: '10px', alignItems: 'center', alignContent: 'center' }}>
            <Pagination count={Math.ceil(cardData.length / cardsPerPage)} color="primary" page={page} onChange={handlePageChange} />
          </Box>

          <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" sx={{ height: "700px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
            <Typography backgroundColor=" #2465e9" color="white" sx={commonStyles} p={2}>Add view</Typography>
            <CloseIcon
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: 'white',
                cursor: 'pointer',
                paddingY: '6px',
                paddingX: '10px',
              }}
              onClick={handleCloseDialog}
            />
            <DialogContent>
              <Typography fontSize="14px" sx={commonStyles}>View Name</Typography>
              <TextField fullWidth size='small' id="outlined-basic" label="Enter view name here" margin="dense" variant="outlined" sx={commonStyles} />
              <Typography pt={1} fontSize="14px" sx={commonStyles}>Add Camera</Typography>
              <TextField
                fullWidth
                label="Search"
                fontSize="14px"
                variant="outlined"
                style={{ marginBottom: '20px', border: 'solid 1px #2465e9', ...commonStyles }}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: 'linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)', border: 'none', borderRadius: '5px' }}
              />

              <Typography fontSize="14px" sx={commonStyles}>Camera List</Typography>

              <TableContainer sx={{ height: "200px" }}>
                <Table>
                  <TableHead>

                  </TableHead>
                  <TableBody>
                    {cameraData.map((camera) => (
                      <TableRow key={camera.id}>
                        <TableCell >
                          <img src={camera.imageUrl} style={{ width: '150px', height: '80px', borderRadius: "5px" }} />
                        </TableCell>
                        <TableCell sx={commonStyles}>{camera.name}</TableCell>
                        <TableCell sx={commonStyles}>{camera.status}</TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleCameraToggle(camera.id)}
                            sx={{
                              textTransform: "capitalize",
                              width: "120px",
                            }}
                            color={selectedCameras.includes(camera.id) ? 'secondary' : 'primary'}
                          >
                            {selectedCameras.includes(camera.id) ? 'Remove Camera' : 'Add Camera'}
                          </Button>

                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContent >
            <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Button onClick={handleCloseDialog} variant="contained" disabled sx={{ textTransform: 'capitalize', ...commonStyles }}>Cancel</Button>
              <Button onClick={handleSave} variant="contained" sx={{ textTransform: 'capitalize', ...commonStyles }} >
                Save
              </Button>
            </DialogActions>
          </Dialog>


          {/*Edit Dialog */}
          <Dialog open={openEditDialog} onClose={handleCloseEditDialog} maxWidth="sm" sx={{ height: "700px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
            <Typography backgroundColor=" #2465e9" color="white" sx={commonStyles} p={2}>Add view</Typography>
            <CloseIcon
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: 'white',
                cursor: 'pointer',
                paddingY: '6px',
                paddingX: '10px',
              }}
              onClick={handleCloseEditDialog}
            />
            <DialogContent>
              {/* <Typography fontSize="14px" sx={commonStyles}>View Name</Typography> */}
              <TextField fullWidth size='small' id="outlined-basic" label="Enter view name here" variant="outlined" sx={commonStyles} />
              {/* <Typography pt={1} fontSize="14px" sx={commonStyles}>Add Camera</Typography> */}
              <TextField
                fullWidth
                label="Search"
                fontSize="14px"
                variant="outlined"
                style={{ marginBottom: '20px', border: 'solid 1px #2465e9', ...commonStyles }}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: 'linear-gradient(119deg, #ebeffa 2%, #e8ebfd 30%, #f0ecf9 51%, #efeefb 70%, #eef7ff 100%)', border: 'none', borderRadius: '5px', marginTop: "10px" }}
              />
              <Typography fontSize="14px" sx={commonStyles}>Camera List</Typography>
              <TableContainer sx={{ height: "200px" }}>
                <Table>
                  <TableHead>
                  </TableHead>
                  <TableBody>
                    {cameraData.map((camera) => (
                      <TableRow key={camera.id}>
                        <TableCell>
                          <img src={camera.imageUrl} alt={`Camera ${camera.id}`} style={{ width: '50px', height: '50px' }} />
                        </TableCell>
                        <TableCell sx={commonStyles}>{camera.name}</TableCell>
                        <TableCell sx={commonStyles}>{camera.status}</TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            size="small"
                            width="80%"
                            onClick={() => handleCameraToggle(camera.id)}
                            sx={{ textTransform: "capitalize" }}
                            color={selectedCameras.includes(camera.id) ? 'secondary' : 'primary'}
                          >
                            {selectedCameras.includes(camera.id) ? 'Remove Camera' : 'Add Camera'}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContent >
            <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Button onClick={handleCloseDialog} variant="contained" disabled sx={{ textTransform: 'capitalize', ...commonStyles }}>Cancel</Button>
              <Button onClick={handleSave} variant="contained" sx={{ textTransform: 'capitalize', ...commonStyles }} >
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog} maxWidth="sm"  >
            <Typography backgroundColor=" #2465e9" color="white" p={2}>Delete view</Typography>
            <CloseIcon
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: 'white',
                cursor: 'pointer',
                paddingY: '6px',
                paddingX: '10px',
              }}
              onClick={handleCloseDeleteDialog}
            />
            <DialogContent>
              <Typography sx={commonStyles}>Please confirm to Delete "New Camera View"</Typography>
            </DialogContent>
            <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "capitalize" }}>
              <Button onClick={handleCloseDeleteDialog} variant="contained" disabled sx={{ textTransform: 'capitalize', ...commonStyles }}>Back</Button>
              <Button onClick={handleDelete} variant="contained" sx={{ textTransform: 'capitalize', ...commonStyles }}>
                Delete
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={openDuplicateDialog} onClose={handleCloseDuplicateDialog} maxWidth="xl"  >
            <Typography backgroundColor=" #2465e9" color="white" p={2}>Duplicate view</Typography>
            <CloseIcon
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: 'white',
                cursor: 'pointer',
                paddingY: '6px',
                paddingX: '10px',
              }}
              onClick={handleCloseDuplicateDialog}
            />
            <DialogContent>
              <Typography sx={commonStyles} width="500px">Add New Name</Typography>
              <TextField fullWidth size='small' id="outlined-basic" label="Enter view name here" variant="outlined" margin="dense" sx={commonStyles} />
            </DialogContent>
            <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "capitalize" }}>
              <Button onClick={handleCloseDuplicateDialog} variant="contained" disabled sx={{ textTransform: 'capitalize', ...commonStyles }}>Back</Button>
              <Button onClick={handleSave} variant="contained" sx={{ textTransform: 'capitalize', ...commonStyles }}>
                Save
              </Button>
           </DialogActions>
          </Dialog>
        </Box>
      </Container>
    </div>
  );
};

export default ControlCenter;
