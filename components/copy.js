import React from 'react';
import { Typography, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    backgroundColor: '#142A54',
    padding: theme.spacing(2)
  },
  info: {
    color: '#4AEDC2',
    fontSize: '1.2rem',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      textAlign: 'center',
      marginBottom: '7%'
    }
  }
})
)

const Copy = () => {
  const classes = useStyles();

  return (
    <Box width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography variant="subtitle1" className={classes.info}>
        Copyright © 2020 - Coworking Port D'Andratx. Todos los derechos reservados.
      </Typography>
      <Typography variant="subtitle1" className={classes.info}>
        Creado por Enalbis
      </Typography>
    </Box>
  )
}

export default Copy