import React from 'react'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import Box from '@material-ui/core/Box';

import { withTranslation } from '../i18n'
import { Link } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url('/images/fondo_1.jpg')`,
    backgroundSize: 'cover',
    width: '100%',
    height: '85vh',
    flexGrow: 1,
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
    width: (UpSm) => UpSm ? '60%' : '90%' ,
    marginBottom: (UpSm) => UpSm ? '2%' : '10%',
    fontSize: (UpSm) => UpSm ? '8rem' : '4rem' 
  },
  subtitle: {
    color: 'white',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    width: (UpSm) => UpSm ? '50%' : '100%' ,
  },
  dot: {
    height: (UpSm) => UpSm ? '25px' : '15px',
    width: (UpSm) => UpSm ? '25px' : '15px',
    backgroundColor: '#142A54',
    borderRadius: '50%',
    display: 'inline-block',
  },
  button: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: '2rem',
    backgroundColor: '#142A54',
    borderRadius: '50px',
    border: 0,
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    cursor: 'pointer'
  }
}));

const Header = ({t}) => {
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const classes = useStyles(UpSm);
  return (
    <React.Fragment>
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        className={classes.container}
        >
        <Typography variant="h1" className={classes.title}>
          {t('header.title')}
        </Typography>
        <Box display="flex" flexDirection={UpSm ? "row" : "column"} justifyContent="center" alignItems="center" width={UpSm ? "35%" : "100%"} mb={UpSm ? 20 : 10}>
          <Typography variant="h4" className={classes.subtitle}>
            {t('header.subtitle_1')}
          </Typography>
          <span className={classes.dot}></span>
          <Typography variant="h4" className={classes.subtitle}>
            {t('header.subtitle_2')}
          </Typography>
        </Box>
        <Link  to="contact" spy={true} smooth={true} offset={0} duration={500} className={classes.button}>
          Contacta
        </Link>
      </Box>
    </React.Fragment>
  )
}

export default withTranslation('common')(Header)