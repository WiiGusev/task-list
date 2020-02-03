import React from 'react';
import { InputBase }from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

export default function search({onChangeSearch}) {
  return (
    <div className="search">
      <div className="search__icon">
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        className="search__input" 
        onChange={onChangeSearch}               
      />
    </div>
  )
};