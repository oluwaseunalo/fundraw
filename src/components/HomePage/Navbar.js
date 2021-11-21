import React from 'react'
import { AppBar, Toolbar, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'><Link to='/'>FunDraw</Link></Typography>
          <Typography variant='h6'>Contact</Typography>
          <Typography variant='h6'><Link to='/login'>Sign in</Link></Typography>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
