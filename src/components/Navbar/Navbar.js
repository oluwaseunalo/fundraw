import React from 'react'
import {useLocation} from 'react-router-dom'
import { AppBar, Toolbar, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'


import useStyles from './styles'


const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();
const NavHomepage = () => {
    return (
        <div className={classes.container}> 
      <AppBar className={classes.nav}>
        <Toolbar className={classes.tool}>
          <Typography variant='p' className={classes.logo}><Link to='/' className={classes.links}>FunDraw</Link></Typography>
          <Typography variant='p' className={classes.item}><Link to='/' className={classes.links}>Contact</Link></Typography>
          <Typography variant='p' className={classes.action}><Link to='/login' className={classes.links}>Sign in</Link></Typography>

        </Toolbar>
      </AppBar>
    </div>
    )
}

const NavLogin = () =>{
    return(
        <div>
        <AppBar className={classes.nav}>
          <Toolbar className={classes.tool}>  
            <Link to='/'><ArrowBack/></Link>
            <Typography variant='p'  className={classes.logo}><Link to='/' className={classes.links}>FunDraw</Link></Typography>
            <Typography variant='p' className={classes.item}><Link to='/' className={classes.links}>Home</Link></Typography>
            <Typography variant='p' className={classes.action}><Link to='/signup' className={classes.links}>Sign up</Link></Typography>
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
