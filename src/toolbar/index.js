import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton }from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

export default function toolbar({ onClick, onChangeSearch }) {
    return (
    <AppBar className="toolbar" position="static">
        <Toolbar>
          <h1>Список задач</h1>
          {/* Компонент Search */}
          <div className="search">
            <div 
            className="search__icon"
            >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              className="search__input" 
              onChange={onChangeSearch}               
            />
          </div>
          <div className="grow" />
          <IconButton
            aria-label="add tasks"
            aria-haspopup="true"
            color="inherit"
            onClick={onClick}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
};