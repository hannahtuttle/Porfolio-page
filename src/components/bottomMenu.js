import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ProjectCard from './projectscard.js'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        About
      </Button>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Skills
      </Button>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Projects
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>X</MenuItem>
        <MenuItem></MenuItem>
      </Menu>
    </div>
  );
}