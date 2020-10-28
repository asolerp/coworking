import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

// ICONS
import { BsFillPeopleFill, BsWifi } from 'react-icons/bs'
import { BiNetworkChart } from 'react-icons/bi'


import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../i18n'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '30vh',
  },
  serviceTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      textAlign: 'center'
    }
  }
})
)

const Service = ({children, service}) => {
  const classes = useStyles();

  return(
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {children}
      <Typography variant="h5" className={classes.serviceTitle}>
        {service}
      </Typography>
    </Box>
  )
}

const Services = () => {
  const classes = useStyles();
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return(
    <Grid container xl={12} className={classes.root}>
      {
        UpSm && (<Grid item xl={2} />)
      }      
      <Grid item xl={8} xs={12} container justifyContent="center" alignItems="center">
      <Box display="flex" alignItems="center" justifyContent="space-around" width={'100%'}>
        <Service service={"Sala de reuniones"}>
          <BsFillPeopleFill color="#4AEDC2" size={UpSm ? 100 : 50} />
        </Service>
        <Service service={"Wifi alta velocidad"}>
          <BsWifi color="#4AEDC2" size={UpSm ? 100 : 50} />
        </Service>
        <Service service={"Varios espacios"}>
          <BiNetworkChart color="#4AEDC2" size={UpSm ? 100 : 50} />
        </Service>
      </Box>
      </Grid>
      <Grid item xl={2} />
    </Grid>
  )
}

export default  withTranslation('common')(Services)