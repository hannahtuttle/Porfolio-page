import React from 'react';
import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';


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
      <Button aria-controls="simple-menu" onClick={handleClick}>
        <a href='#'>About</a>
      </Button>
      <Button aria-controls="simple-menu" onClick={handleClick}>
        <a href='#skills' >Skills</a>
      </Button>
      <Button aria-controls="simple-menu" onClick={handleClick}>
        <a href='#projects'>Projects</a>
      </Button>
      <Button aria-controls="simple-menu" onClick={handleClick}>
        <a href='#'>Contact</a>
      </Button>
    </div>
  );
}