import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Carousel from './Carousel'; // Your existing carousel component
import Section from './Section'; // Your existing Section component

function Songs() {
  const [songs, setSongs] = useState([]);
  const [value, setValue] = useState(0);
  const [genres, setGenres] = useState([]);

  // Fetch songs using Axios
  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/songs')
      .then(response => {
        const data = response.data;
        setSongs(data);
        
        // Extract unique genres from the songs data
        const uniqueGenres = Array.from(new Set(data.map(song => song.genre)));
        setGenres(uniqueGenres);
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter songs based on selected genre
  const filteredSongs = value === 0 
    ? songs 
    : songs.filter(song => song.genre === genres[value - 1]);

  return (
    <Section title="Songs">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="genre tabs">
          <Tab label="All" /> {/* This tab shows all songs */}
          <Tab label="Rock" />
          <Tab label="Pop" />
          <Tab label="Jazz" />
          <Tab label="Blues" />

        </Tabs>
      </Box>
      <Carousel songs={filteredSongs} /> {/* Pass filtered songs to Carousel */}
    </Section>
  );
}

export default Songs;
