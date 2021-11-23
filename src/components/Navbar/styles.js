import { makeStyles } from '@mui/styles';

 const useStyles = makeStyles({
    nav: {
      background: 'linear-gradient(90deg, rgba(50,22,83,1) 0%, rgba(61,59,65,1) 50%, rgba(29,18,71,1) 96%)',
      height: 60,
      position: 'sticky'
     
    },

    tool: {
      position: 'relative',
    },

    item: {
      right: 270,
      position: 'absolute',
    
    },
    action: {
      right: 200,
      position: 'absolute',
      
    },
    logo: {
      left: 200,
      position: 'absolute',
      
    },
    links: {
      textDecoration: 'none',
      color: 'white'
    },

    profile: {
      right: 340,
      position: 'absolute'
    }


  });
  

 export default useStyles;