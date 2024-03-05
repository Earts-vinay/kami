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
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Navbar } from '../components';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

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
  // ... Add more cards as needed
];

const ControlCenter = () => {
  const [page, setPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);

  const cardsPerPage = 12;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleAddNow = () => {
    setOpenDialog(true);
  };

  const handleSave = () => {
    // Implement your logic here
    setOpenDialog(false); // Close the dialog after saving
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getPaginatedCards = () => {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardData.slice(startIndex, endIndex);
  };

  return (
    <div>
      <Navbar />
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
                <InputLabel htmlFor="select-option"> All Camera Views</InputLabel>
                <Select label="Select Option" id="select-option">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" size="large" onClick={handleAddNow} sx={{ textTransform: 'capitalize' }}>
                Add View
              </Button>
              <Button variant="contained" size="large" onClick={handleSave} disabled sx={{ textTransform: 'capitalize' }}>
                Save View
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

          <Box display="flex" flexWrap="wrap" justifyContent="start" gap={3} height="65vh" overflow="auto" paddingY="10px">
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
                    }}
                  >
                    {card.description}
                  </Typography>

                  <CloseIcon
                    sx={{ position: 'absolute', top: 0, right: 0, color: 'white', cursor: 'pointer', paddingY: '15px', paddingX: '10px' }}
                  />
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center !important', paddingTop: '10px', alignItems: 'center', alignContent: 'center' }}>
            <Pagination count={Math.ceil(cardData.length / cardsPerPage)} color="primary" page={page} onChange={handlePageChange} />
          </Box>

          {/* Dialog */}
          <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
            <Typography backgroundColor=" #2465e9" color="white" p={2}>Add view</Typography>
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
              {/* Add your dialog content here */}
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
          
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleSave} variant="contained" disabled>
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
