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
    backgroundImage: `url('https://res.cloudinary.com/dh8rg0xrn/image/upload/v1603955521/Coworking/coworking.jpg')`,
    backgroundSize: 'cover',
    height: '100vh',
    flexGrow: 1,
    [`${theme.breakpoints.down('sm')} and (orientation: landscape)`]: {
      backgroundPosition: '0 50%'
    }
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
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '3rem',
    }
  },
  serviceTitle: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '3rem',
    }
  }
})
)

const Service = ({number, text}) => {
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const Ipad = useMediaQuery(theme => theme.breakpoints.between('sm','md'));
  const SmLandscape = useMediaQuery(theme => `${theme.breakpoints.only('sm')} and (orientation: landscape)`)

  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" mb={3} width={!UpSm || SmLandscape || Ipad ? "100%" : "30%"}>
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
  const SmLandscape = useMediaQuery(theme => `${theme.breakpoints.only('sm')} and (orientation: landscape)`)
  const Ipad = useMediaQuery(theme => theme.breakpoints.between('sm','md'));
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Element name="about">
      <Grid container xl={12}>
        {
          UpSm && (
            <Grid item container lg={5}  xl={5}>
              <Box className={classes.left} />
            </Grid>
          )
        }
        <Grid item container lg={7}  xl={7} xs={12}>
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
            <Box display="flex" flexDirection={UpSm && !SmLandscape && !Ipad ? "row" : "column" } style={{ flexGrow: 1, width: '100%'}}>
              <Service number={8} text={t('about.areas')} />
              <Service number={2} text={t('about.indepe')} />
            </Box>           
          </Box>
        </Grid>
      </Grid>
    </Element>
  )
}

export default withTranslation('common')(About)