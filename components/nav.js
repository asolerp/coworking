import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { Grid, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import HamburgerMenu from 'react-hamburger-menu'

import { Link } from 'react-scroll'
import { withTranslation } from '../i18n'


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: (UpSm) => UpSm ? '90%' : '100%',
    padding: (UpSm) => UpSm ? theme.spacing(3) : theme.spacing(2)
  },
  menu: {
    color: '#4A92A8',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    fontSize: '1.2rem',
    marginRight: '5%',
    cursor: 'pointer',
    "&:hover": {
      color: '#4AEDC2',
      transition: 'all .3s'
    }
  }
}));

const Nav = (props) => {
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const classes = useStyles(UpSm);

  const [ menuOpen, setMenuOpen ] = useState()

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <Toolbar disableGutters={true}>
          <div className={classes.container}>
            <Grid container justify="space-between">
              <Grid item container xs={10} xl={4} justify="flex-start">
                <img src="/images/logo_white.svg" alt="Vercel Logo" className={classes.logo} />
              </Grid>
              {
                !UpSm && (
                  <Grid item container xs={2} justify="flex-start">
                    <Box display="flex" justifyContent="center" alignItems="center" style={{flexGrow: 1}}>
                      <HamburgerMenu
                          isOpen={menuOpen}
                          menuClicked={() => setMenuOpen(!menuOpen)}
                          width={18}
                          height={15}
                          strokeWidth={1}
                          rotate={0}
                          color='black'
                          borderRadius={0}
                          animationDuration={0.5}
                      />
                    </Box>
                  </Grid>
                )
              }
              {
                UpSm && (
                 <React.Fragment>
                  <Grid item container direction="row" justify="center" alignItems="center" xs={7}>
                    <Link  to="about" spy={true} smooth={true} offset={0} duration={500} className={classes.menu}>  
                      {props.t('menu.about')}
                    </Link>
                    <Link  to="coworking" spy={true} smooth={true} offset={0} duration={500} className={classes.menu}>            
                        {props.t('menu.coworking')}          
                    </Link>
                    <Link  to="where" spy={true} smooth={true} offset={0} duration={500} className={classes.menu}> 
                      {props.t('menu.where')}
                    </Link>
                    <Link  to="contact" spy={true} smooth={true} offset={0} duration={500} className={classes.menu}> 
                      {props.t('menu.contact')}
                    </Link>
                    </Grid>
                    <Grid item xs={1} container direction="row" justify="center" alignItems="center">
                    <Typography variant="h6" className={classes.menu}>
                      ES
                    </Typography>
                    <Typography variant="h6" className={classes.menu}>
                      |
                    </Typography>
                    <Typography variant="h6" className={classes.menu}>
                      EN
                    </Typography>
                    <Typography variant="h6" className={classes.menu}>
                      |
                    </Typography>
                    <Typography variant="h6" className={classes.menu}>
                      GB
                    </Typography>
                  </Grid>
                 </React.Fragment>
                )
              }
            </Grid>
          </div>
        </Toolbar>
      </HideOnScroll>
    </React.Fragment>
  )
}

export default withTranslation('common')(Nav)

