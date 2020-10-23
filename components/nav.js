import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { Grid } from '@material-ui/core';

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
    width: '90%',
    padding: theme.spacing(3)
  },
  menu: {
    color: '#4A92A8',
    fontWeight: 'bold',
    marginRight: '5%'
  }
}));

const Nav = (props) => {

  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <Toolbar disableGutters={true}>
          <div className={classes.container}>
            <Grid container justify="space-between">
              <Grid item container xs={4} justify="flex-start">
                <img src="/images/logo_white.svg" alt="Vercel Logo" className={classes.logo} />
              </Grid>
              <Grid item container direction="row" justify="center" alignItems="center" xs={7}>
              <Typography variant="h6" className={classes.menu}>
                {props.t('menu.about')}
              </Typography>
              <Typography variant="h6" className={classes.menu}>
                {props.t('menu.coworking')}
              </Typography>
              <Typography variant="h6" className={classes.menu}>
                {props.t('menu.where')}
              </Typography>
              <Typography variant="h6" className={classes.menu}>
                {props.t('menu.contact')}
              </Typography>
              </Grid>
              <Grid item xs={1} container direction="row" justify="space-around" alignItems="center">
              <Typography variant="h6" className={classes.menu}>
                ES
              </Typography>
              <Typography variant="h6" className={classes.menu}>
                EN
              </Typography>
              <Typography variant="h6" className={classes.menu}>
                GB
              </Typography>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </HideOnScroll>
    </React.Fragment>
  )
}

export default withTranslation('common')(Nav)

