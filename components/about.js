import React from 'react'

// UI
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../i18n'
import { Element } from 'react-scroll'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  left: {
    backgroundImage: `url('/images/coworking.jpg')`,
    backgroundSize: 'cover',
    height: '100vh',
    flexGrow: 1,
  },
  right: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      wordBreak: 'break-word',
      marginBottom: theme.spacing(5)
    }
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    width: '90%',
    marginBottom: '5%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
      width: '100%',
    }
  },
  subtitle: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#717171',
    marginBottom: '5%',
    marginTop: '5%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    }
  },
  text: {
    width: '85%',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
      marginBottom: '15%',
      width: '100%',
    }
  },
  serviceNumber: {
    color: '#4AEDC2',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    marginRight: '5%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    }
  },
  serviceTitle: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    }
  }
})
)

const Service = ({number, text}) => {
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={3} width={!UpSm && "100%"}>
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
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Element name="about">
      <Grid container xl={12}>
        {
          UpSm && (
            <Grid item container  xl={5}>
              <Box className={classes.left} />
            </Grid>
          )
        }
        <Grid item container  xl={7} xs={12}>
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
            <Box display="flex" flexDirection={UpSm ? "row" : "column" } justifyContent="space-around" style={{ flexGrow: 1}}>
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