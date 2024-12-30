import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar color="inherit">
        <Toolbar>
          <Typography variant="h5" color="textSecondary">Employee Details</Typography>&nbsp;&nbsp;
          <Link to='/add'>
            <Button variant="contained" color="secondary">ADD</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/view'>
            <Button variant="contained" color="secondary">VIEW </Button>
          </Link>
        </Toolbar>
      </AppBar><br /><br />
    </div>
  )
}

export default NavBar