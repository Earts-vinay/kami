import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Select, MenuItem, TextField, Container, InputAdornment, InputLabel, FormControl, Pagination } from '@mui/material';
import { Navbar } from '../components';
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
  // ... Add more cards as needed
];

const ControlCenter = () => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6; // Number of cards to display per page

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
            <Box display="flex" justifyContent="space-between" gap={2} mb={2} width={800} height={50}>
              <FormControl fullWidth>
                <InputLabel htmlFor="select-option"> All Camera Views</InputLabel>
                <Select label="Select Option" id="select-option" sx={{ padding: '0px' }}>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" fullWidth onClick={handleAddNow}>
                Add View
              </Button>
              <Button variant="contained" color="primary" fullWidth onClick={handleSave} disabled>
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

          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            {getPaginatedCards().map((card) => (
              <Card key={card.id} sx={{ width: '30%', marginBottom: '20px' }}>
                <CardContent sx={{ backgroundColor: '#02020285', color: 'white' }}>
                  <Typography variant="body2" color="text.light" sx={{ backgroundColor: '' }}>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardMedia component="img" alt={card.title} height="180" image={card.imageUrl} />
              </Card>
            ))}
          </Box>

          {/* Centered Pagination Component */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
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
