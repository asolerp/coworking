import React from 'react'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import { withTranslation } from '../i18n'


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
    width: '50%',
    marginBottom: "2%"
  },
  subtitle: {
    color: 'white',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    width: '50%'
  },
  dot: {
    height: '25px',
    width: '25px',
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
  }
}));

const Header = ({t}) => {
  const classes = useStyles();
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
        <Box display="flex" justifyContent="center" alignItems="center" width="35%" mb={20}>
          <Typography variant="h4" className={classes.subtitle}>
            {t('header.subtitle_1')}
          </Typography>
          <span className={classes.dot}></span>
          <Typography variant="h4" className={classes.subtitle}>
            {t('header.subtitle_2')}
          </Typography>
        </Box>
        <button className={classes.button}>Contacta</button>
      </Box>
    </React.Fragment>
  )
}

export default withTranslation('common')(Header)