import React from 'react'
import {Grid, Typography, Button, Card, CardMedia, CardContent,  CardActions} from '@mui/material'
import {Link} from 'react-router-dom'


const Main = () => {
  return (
    <div>
      <Grid container justifyContent='center' spacing={3} display='flex' wrap='noWrap'>
          <Grid item xs={12} sm={6} md={4} lg={3}>
             <Typography variant='h5'>Explore your creativity with FunDraw</Typography>
             <Typography variant='h6'>We provide amazing and easy to use platform to create digital arts</Typography>
             <Typography variant='h6'><Link to='/signup'><Button variant='contained' color='secondary'>Sign up</Button></Link></Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={6}>
          <Typography variant='h6'>Video demo</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant='h6'>How the app works</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} justifyContent='center' wrap='noWrap'>
                 <Typography variant='h6'>Meet the Engineers</Typography>
            <Card>
                <CardMedia img='https://unsplash.com/documentation#get-a-random-photo'/>
                <CardContent>
                <Typography variant='h6'> loremipsumashjbjafshgdslhGFHGALSHDFGHJSDGFHAGSDHFGSFDHJBFNYDBYSDFLAGSDHGHHGFLjsljfhdgjhdfjghöfhjsk
                </Typography>
                </CardContent>
                <CardActions>
                  <Button href='https://www.linkedin.com/in/oluwaseunalo'>Linkedin</Button>
                </CardActions>
            </Card>
            <Card>
                <CardMedia img='https://unsplash.com/documentation#get-a-random-photo'/>
                <CardContent>
                <Typography variant='h6'>loremipsumashjbjafshgdslhGFHGALSHDFGHJSDGFHAGSDHFGSFDHJBFNYDBYSDFLAGSDHGHHGFLjsljfhdgjhdfjghöfhjsk
                </Typography>
                </CardContent>
                <CardActions>
                  <Button href='https://www.linkedin.com/in/oluwaseunalo'>Linkedin</Button>
                </CardActions>
            </Card>
            
          </Grid>
      </Grid>
    </div>
  )
}

export default Main
