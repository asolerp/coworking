import React from 'react';

import { Link } from 'react-scroll'
import { Grid, Typography } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../i18n'

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
  }
}));

const Menu = (props) => {

  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const classes = useStyles(UpSm);

  return (
    <React.Fragment>
      <Grid style={{...props.transStyle}} item container direction={UpSm ? "row" : "column"} justify="center" alignItems="center" xl={7} height={"100%"}>
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
      <Grid item xl={1} container direction="row" justify="center" alignItems="center">
        <Typography variant="h6" className={classes.menu}>
          ES
        </Typography>
        <Typography variant="h6" className={classes.menu}>
          |
        </Typography>
        <Typography variant="h6" className={classes.menu}>
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

export default withTranslation('common')(Menu)