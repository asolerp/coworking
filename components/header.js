import React from 'react'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import Box from '@material-ui/core/Box';

import { withTranslation } from '../i18n'
import { Link } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: 100,
    backgroundImage: `url('https://res.cloudinary.com/enalbis/image/upload/v1679150667/Coworking/fwcd3ilckp7fv2vajqda.png')`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      height: '90vh',
    },
    [`${theme.breakpoints.down('sm')} and (orientation: landscape)`]: {
      height: '200vh',
    }
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '60%',
    marginBottom: '2%',
    fontSize: '6rem', 
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginBottom: '10%',
      fontSize: '2.2rem'
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '6rem'
    }
  },
  subtitle: {
    color: 'white',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      fontSize: '1.5rem'
    }
  },
  dot: {
    height: '25px',
    width: '25px',
    backgroundColor: '#142A54',
    borderRadius: '100%',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      height: '15px',
      width: '15px',
    }
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
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    }
  }
}));

const Header = ({t}) => {
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const SmLandscape = useMediaQuery(theme => `${theme.breakpoints.only('sm')} and (orientation: landscape)`)

  const classes = useStyles();
  return (
    <React.Fragment>
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        className={`${classes.container}`}
        >
          
        <Typography variant="h1" className={classes.title}>
          {t('header.title')}
        </Typography>
        <Box display="flex" flexDirection={UpSm && !SmLandscape ? "row" : "row"} justifyContent="center" alignItems="center" width={UpSm ? "35%" : "100%"} mb={UpSm ? 10 : 10}>
          <Typography variant="h4" className={classes.subtitle}>
            {t('header.subtitle_1')}
          </Typography>
          <span className={classes.dot}></span>
          <Typography variant="h4" className={classes.subtitle}>
            {t('header.subtitle_2')}
          </Typography>
        </Box>
        <Link  to="contact" spy={true} smooth={true} offset={0} duration={500} className={classes.button}>
          {t('header.contact')}
        </Link>
      </Box>
    </React.Fragment>
  )
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Header)