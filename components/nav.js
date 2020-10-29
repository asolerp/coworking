import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { Grid, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import HamburgerMenu from 'react-hamburger-menu'
import Menu from './menu'

import { Transition } from 'react-transition-group';
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
  containerOpen: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    transition: "all .5s"
  },
  logo: {
    width: (UpSm) => UpSm ? '90%' : '100%',
    padding: (UpSm) => UpSm ? theme.spacing(3) : theme.spacing(1)
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

const defaultStyle = () => ({
  transition: `height 300ms ease-in-out`,
  width: '100%',
  height: 'auto'
})

const transitionStyles = (landscape) => ({
  entering: { height: landscape ? '80vh' : '40vh' },
  entered:  { height: landscape ? '80vh' : '40vh' },
  exiting:  { height: 'auto' },
  exited:  { height: 'auto' },
});

const defaultStyle2 = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
}

const transitionStyles2 = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Nav = (props) => {
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const Ipad = useMediaQuery(theme => theme.breakpoints.between('sm','md'));
  const SmLandscape = useMediaQuery(theme => `${theme.breakpoints.only('sm')} and (orientation: landscape)`)
  const classes = useStyles(UpSm);

  const [ menuOpen, setMenuOpen ] = useState()

  return (
    <React.Fragment>
        <Toolbar disableGutters={true}>
        <Transition in={menuOpen} timeout={300}>
          {
            state => (
            <div className={menuOpen ? classes.containerOpen : UpSm && classes.container} 
            style={{
              ...defaultStyle(),
              ...transitionStyles(SmLandscape)[state]
            }}>
              <Grid container justify="space-between">
                <Grid item container xs={10} xl={4} justify="flex-start">
                  <img src="https://res.cloudinary.com/dh8rg0xrn/image/upload/v1603963382/Coworking/Logo_white.svg" alt="Coworking Port D'Andratx Logo" className={classes.logo} />
                </Grid>
                {
                  (SmLandscape || !UpSm || Ipad) && (
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
                  UpSm && !SmLandscape && !Ipad && (<Menu />)
                }
                {                
                  menuOpen && (      
                    <Transition in={menuOpen} timeout={300}>
                      {
                        state => (
                          <Menu menuOpen={menuOpen} 
                          transStyle={{
                            ...defaultStyle2,
                            ...transitionStyles2[state]
                          }}
                          />
                        )
                      }
                    </Transition>
                  )
                }
              </Grid>
            </div>
            )
          }
        </Transition>
        </Toolbar>
    </React.Fragment>
  )
}

export default withTranslation('common')(Nav)

