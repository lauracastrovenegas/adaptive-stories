import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

const SearchWrapper = styled.div`
  background-color: white;
  width: fit-content;
  border-radius: 15px;
  padding: 0.5rem;
  margin-left: auto;
`;

const SearchBar = () => {
  return (
    <SearchWrapper>
    <InputBase
      sx={{ ml: 1, flex: 1, width: '20rem' }}
      placeholder="Search through the coverage"
      inputProps={{ 'aria-label': 'search through the coverage' }} />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    </SearchWrapper>
  )
}

export default SearchBar;