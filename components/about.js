import React from 'react'

// UI
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../i18n'
import { Element } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
  left: {
    backgroundImage: `url('/images/coworking.jpg')`,
    backgroundSize: 'cover',
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

const Service = ({number, text}) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h1" component="p" className={classes.serviceNumber}>
        {number}
      </Typography>
      <Typography variant="h3" component="p" className={classes.serviceTitle}>
        {text}
      </Typography>
    </Box>
  )
}

const About = ({t}) => {
  const classes = useStyles();

  return (
    <Element name="about">
      <Grid container xl={12}>
        <Grid item container  xl={5}>
          <Box className={classes.left} />
        </Grid>
        <Grid item container  xl={7}>
          <Box className={classes.right} display="flex" flexDirection="column" justifyContent="flex-start">
            <Typography variant="h5" className={classes.subtitle}>
              {t('about.subtitle')}
            </Typography> 
            <Typography variant="h2" className={classes.title}>
              {t('about.title')}
            </Typography> 
            <Typography variant="h4" className={classes.text}>
              {t('about.text')}
            </Typography>
            <Box display="flex" justifyContent="space-around" style={{ flexGrow: 1}}>
              <Service number={3} text={"Espacios"} />
              <Service number={24} text={"Horas"} />
            </Box>           
          </Box>
        </Grid>
      </Grid>
    </Element>
  )
}

export default withTranslation('common')(About)