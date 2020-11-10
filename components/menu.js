import React from 'react';

import { Link } from 'react-scroll'
import { Grid, Typography } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { i18n, withTranslation } from '../i18n'

const useStyles = makeStyles((theme) => ({
  menu: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    fontSize: '1.2rem',
    marginRight: '5%',
    cursor: 'pointer',
    "&:hover": {
      color: '#4AEDC2',
      transition: 'all .3s'
    }
  },
  active: {
    color: '#4AEDC2',
  }
}));

const Menu = (props) => {

  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const classes = useStyles(UpSm);

  return (
    <React.Fragment>
      <Grid style={{...props.transStyle}} item container direction={UpSm ? "row" : "column"} justify="center" alignItems="center" lg={7} xl={7} height={"100%"}>
        <Link  to="about" spy={true} smooth={true} offset={0} duration={500} className={classes.menu}>  
          {props.t('menu.about')}
        </Link>
        <Link  to="coworking" spy={true} smooth={true} offset={0} duration={500} className={classes.menu}>            
            {props.t('menu.coworking')}          
        </Link>
        <Link  to="donde" smooth={true} offset={1300} duration={500} className={classes.menu}> 
          {props.t('menu.where')}
        </Link>
        <Link  to="contact" spy={true} smooth={true} offset={0} duration={500} className={classes.menu}> 
          {props.t('menu.contact')}
        </Link>
      </Grid>
      <Grid item lg={1} xl={1} container direction="row" justify="center" alignItems="center">
        <Typography 
          onClick={() => i18n.changeLanguage('es')}
          variant="h6" 
          className={[classes.menu, i18n.language === 'es' ? classes.active : undefined]}
        >
          ES
        </Typography>
        <Typography variant="h6" className={classes.menu}>
          |
        </Typography>
        <Typography 
          onClick={() => i18n.changeLanguage('en')}
          variant="h6" 
          className={[classes.menu, i18n.language === 'en' ? classes.active : undefined]}>
          EN
        </Typography>
        {/* <Typography variant="h6" className={classes.menu}>
          |
        </Typography>
        <Typography variant="h6" className={classes.menu}>
          GB
        </Typography> */}
      </Grid>
    </React.Fragment>
  )
}

Menu.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Menu)