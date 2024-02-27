import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import {Search, SearchIconWrapper, StyledInputBase} from "../../styles/Admin/Admin.styles"

export default function SearchAppBar() {
  return (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>   
  );
};
