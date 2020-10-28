import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';


// UI
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

// ICONS
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../i18n'
import { Element } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
  left: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#142A54',
    paddingLeft: '5%',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
    }
  },
  right: {
    width: '100%',
    height: '100vh',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
    }
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: 'white',
    width: '90%',
    marginBottom: '5%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
      width: '100%',
      marginBottom: '20%'
    }
  },
  subtitle: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: 'white',
    marginBottom: '5%',
    marginTop: '5%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    }
  },
  text: {
    width: '85%',
    fontFamily: 'Montserrat',
  },
  serviceNumber: {
    color: '#4AEDC2',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    marginRight: '5%'
  },
  serviceTitle: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',

  },
  logo: {
    width: '50px',
  },
  icon: {
    width: '100px',
    height: '100px',
    border: '3px solid white',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '50px',
    }
  },
  iconTitle: {
    margin: 0,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      width: '100%',
    }
  },
  iconInfo: {
    fontFamily: 'Montserrat',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      width: '100%',
    }
  }
})
)

const InfoItem = ({title, info, children}) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" style={{marginBottom: '5%'}}>
      <Box className={classes.icon} display="flex" justifyContent="center" alignItems="center">
      {children}
      </Box>
      <Box display="flex" flexDirection="column" width="85%" >
        <Typography variant="h3" className={classes.iconTitle}>
          {title}
        </Typography> 
        <Typography variant="h4" className={classes.iconInfo}>
          {info}
        </Typography>  
      </Box>
    </Box>
  )
}

const Where = ({t}) => {
  const classes = useStyles();
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Element name="where">
      <Grid container>
        <Grid item container  xl={6} xs={12}>
          <Box className={classes.left} display="flex" flexDirection="column" justifyContent="flex-start">
            <Typography variant="h5" className={classes.subtitle}>
              {t('where.subtitle')}
            </Typography> 
            <Typography variant="h2" className={classes.title}>
              {t('where.title')}
            </Typography>         
            <Box display="flex" flexDirection="column" justifyContent={UpSm ? "center" : "flex-start"} style={{flexGrow: 1}}>
              <InfoItem title={t('where.address.title')} info={'C/ Andratx nº1'}>
                <FaMapMarkerAlt color="white" size={UpSm ? 50 : 25} />
              </InfoItem>
              <InfoItem title={t('where.email.title')} info={'info@coworkingportandratx.com'}>
                <AiOutlineMail color="white" size={UpSm ? 50 : 25} />
              </InfoItem>
            </Box>
          </Box>
        </Grid>
        <Grid item container  xl={6} xs={12}>
          <Box className={classes.right}>
            <ReactMapGL
            mapStyle="mapbox://styles/asolerp/ckgn983i61dh719pkz226t4vr"
            mapboxApiAccessToken="pk.eyJ1IjoiYXNvbGVycCIsImEiOiJjam92ejA2ZGYxbWJrM3dwaDA4YmY1eDA2In0.dhk_MNpNlTqubZiObpTOtg"
            width='100%'
            height='100%'
            latitude={39.544865}
            longitude={2.389223}
            zoom={14}
            >
            <Marker latitude={39.543922} longitude={2.385725} offsetLeft={0} offsetTop={0}>
              <img src={'/images/logo_simple.png'} className={classes.logo} />
            </Marker>
            </ReactMapGL>
          </Box>
        </Grid>
      </Grid>
    </Element>
  )
}

export default withTranslation('common')(Where)