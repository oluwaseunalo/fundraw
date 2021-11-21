import React from 'react'
import {Grid, Typography, Button} from '@mui/material'
import {Link} from 'react-router-dom'


const Main = () => {
  return (
    <div>
      <Grid container justifyContent='center' spacing={4}>
          <Grid item sx={12} sm={6} md={4} lg={3}>
             <Typography variant='h5'>Explore your creativity with FunDraw</Typography>
             <Typography variant='h6'>We provide amazing and easy to use platform to create digital arts</Typography>
             <Typography variant='h6'><Link to='/signup'><Button variant='contained' color='secondary'>Sign up</Button></Link></Typography>
          </Grid>
          <Grid item sx={12} sm={6} md={4} lg={3}>
          <Typography variant='h6'>How the app works</Typography>
          </Grid>
          <Grid item sx={12} sm={6} md={4} lg={3}></Grid>
      </Grid>
    </div>
  )
}

export default Main
