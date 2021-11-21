import React from 'react'
import {useLocation} from 'react-router-dom'
import { AppBar, Toolbar, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'


const Navbar = () => {
    const location = useLocation();
const NavHomepage = () => {
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

const NavLogin = () =>{
    return(
        <div>
        <AppBar>
          <Toolbar>
            <Link to='/'><ArrowBack/></Link>
            <Typography variant='h6'><Link to='/'>FunDraw</Link></Typography>
            <Typography variant='h6'><Link to='/'>Home</Link></Typography>
            <Typography variant='h6'><Link to='/signup'>Sign up</Link></Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

switch(location.pathname){
    case '/': return(<NavHomepage/>);
    
    case '/login': return(<NavLogin/>);

    default:
    
}

}

export default Navbar
