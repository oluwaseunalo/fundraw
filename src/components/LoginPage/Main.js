import React from 'react'
import {Typography, FormControl, TextField, Box, Button} from '@mui/material'
import {Link} from 'react-router-dom'




const Main = () => {
  return (
    <Box display='block'>
    <FormControl variant='standard'>
      <Typography variant='h6'>Email</Typography>
      <TextField variant='outlined' required/>
    </FormControl>
    <FormControl variant='standard'>
      <Typography variant='h6'>Password</Typography>
      <TextField variant='outlined' required/>
    </FormControl>
    <Link to='/login'><Button variant='contained'>Login</Button></Link>

   
      
    </Box>
  )
}

export default Main


