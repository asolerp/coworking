import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';


// UI
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';


import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../i18n'


const useStyles = makeStyles((theme) => ({
  left: {
    height: '100vh',
    flexGrow: 1,
  },
  right: {
    padding: theme.spacing(5)
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    width: '90%',
    marginBottom: '5%'
  },
  subtitle: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#717171',
    marginBottom: '5%',
    marginTop: '5%'
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

  }
})
)

const viewport = {
  width: '100vw',
  height: '100vh',
  latitude: 41.5868,
  longitude: -93.625,
  zoom: 13
}

const Where = ({t}) => {
  const classes = useStyles();
  const [ viewport, setViewport ] = useState({
    width: '300px',
    height: '300px',
    latitude: 41.5868,
    longitude: -93.625,
    zoom: 13
  })

  return (
    <React.Fragment>
      <Grid container xl={12}>
        <Grid item container  xl={6}>
          <Box className={classes.left}>
            Hola
          </Box>
        </Grid>
        <Grid item container  xl={6}>
          <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiYXNvbGVycCIsImEiOiJjam92ejA2ZGYxbWJrM3dwaDA4YmY1eDA2In0.dhk_MNpNlTqubZiObpTOtg"
          onViewportChange={(viewport) => setViewport({ viewport })}
          {...viewport}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withTranslation('common')(Where)