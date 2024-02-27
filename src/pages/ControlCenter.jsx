import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Select, MenuItem, TextField, Container, InputAdornment, InputLabel, FormControl, Pagination } from '@mui/material';
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
  const cardsPerPage = 12; // Number of cards to display per page

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleAddNow = () => {
    // Implement your logic here
  };

  const handleSave = () => {
    // Implement your logic here
  };

  const getPaginatedCards = () => {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardData.slice(startIndex, endIndex);
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={{ backgroundColor: '#eff2fd', height: '78vh', padding: '20px', mt: 1, borderRadius: '10px' }}>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="" gap={2} mb={2} width={800} height={40}>
              <FormControl style={{ width: "30%" }} size='small'>
                <InputLabel htmlFor="select-option"> All Camera Views</InputLabel>
                <Select label="Select Option" id="select-option" >
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" size='large' onClick={handleAddNow} sx={{ textTransform: 'capitalize' }}>
                Add View
              </Button>
              <Button variant="contained" size='large' onClick={handleSave} disabled sx={{ textTransform: 'capitalize' }}>
                Save
              </Button>
            </Box>
            <TextField
              label="Search"
              variant="outlined"
              style={{ marginBottom: '20px' }}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: 'white', border: 'none', borderRadius: '5px' }}
            />
          </Box>

          <Box display="flex" flexWrap="wrap" justifyContent="" gap={2} height={"68vh"} overflow="auto" paddingY="20px">
            {getPaginatedCards().map((card) => (
              <Card key={card.id} sx={{ position: 'relative', width: '23.5%', marginBottom: '20px', gap: "10px", height: "36%", borderRadius: "10px" }}>
                <CardMedia component="img" alt={card.title} height="280px" image={card.imageUrl} />
                <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, color: 'white', borderRadius: '0 0 10px 10px', padding: "0px" }}>
                  <Typography variant="body2" color="text.light" backgroundColor='rgba(0, 0, 0, 0.5)' paddingY="15px" paddingX={2}>
                    {card.description}
                  </Typography>
                  <CloseIcon sx={{ position: 'absolute', top: 0, right: 0, color: 'white', cursor: 'pointer', paddingY: "15px", paddingX: '10px' }} />
                </CardContent>
              </Card>
            ))}
          </Box>


          {/* Centered Pagination Component */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Pagination
              count={Math.ceil(cardData.length / cardsPerPage)}
              color="primary"
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ControlCenter;
