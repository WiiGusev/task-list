import React from 'react';
import { AppBar, Toolbar, IconButton }from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Search from './search';

export default function toolbar({ onClick, onChangeSearch }) {
    return (
    <AppBar className="toolbar" position="static">
        <Toolbar>
          <h1>Список задач</h1>
          <Search onChangeSearch={onChangeSearch}/>
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