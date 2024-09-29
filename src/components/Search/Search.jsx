import React from 'react'
import { TextField,InputAdornment } from '@mui/material'
import "./Search.module.css"
import SearchIcon from "@mui/icons-material/Search"

export default function Search() {
  return (
    <div>
        <TextField
        sx={{backgroundColor: "#FFFFFF", borderRadius:2, width:"40vw"}}
        className="searchdesktop"
        size="small"
        InputProps={{
          className:"search",
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon color='primary' />
            </InputAdornment>
          ),
        }}
        placeholder="Search a album of your choice"
        name="search"
      />
    </div>
  )
}
