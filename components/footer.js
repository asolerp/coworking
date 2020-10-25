import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Copy from './copy'


import { useForm } from "react-hook-form";


import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../i18n'
import { Element } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#142A54',
    padding: theme.spacing(2)
  },
  logo: {
    width: '40%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  input: {
    width: '80%',
    height: '50px',
    padding: theme.spacing(2),
    fontSize: '1.2rem',
    fontFamily: 'Montserrat',
    border: 0,
    borderRadius: '20px',
    marginBottom: '2%'
  },
  text: {
    width: '80%',
    fontSize: '1.2rem',
    fontFamily: 'Montserrat',
    padding: theme.spacing(2),
    marginBottom: '2%',
    border: 0,
    borderRadius: '20px'
  },
  button: {
    width: '80%',
    borderRadius: '50px',
    border: 0,
    color: '#142A54',
    background: '#4AEDC2',
    height: '50px',
    fontSize: '1.5rem'
  },
  error: {
    color: '#4AEDC2',
    fontSize: '1.2rem',
    fontFamily: 'Montserrat',
    marginBottom: '2%',
    paddingLeft: '.5%'
  }
})
)

const Footer = () => {
  const classes = useStyles();
  const onSubmit = data => console.log(data);
  const { register, errors, handleSubmit } = useForm();

  return(
    <Element name="contact">
      <Grid container xl={12} className={classes.root}>
        <Grid item container xl={7} >
          <Box display="flex" justifyContent="center" alignItems="center" style={{flexGrow: 1}}>
            <img src={'/images/logo_blue.svg'} className={classes.logo} />
          </Box>
        </Grid>
        <Grid item container xl={5}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{flexGrow: 1}}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <input type="text" name="name" className={classes.input} placeholder="Nombre completo" ref={register({ required: true })}></input>
              {errors.name && <Typography variant="h4" className={classes.error}>El nombre es obligatorio</Typography>}
              <input type="text" name="email" className={classes.input} placeholder="Email" ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/  })}></input>
              {errors.email && <Typography variant="h4" className={classes.error}>El email no es correcto</Typography>}
              <input type="text" name="phone" className={classes.input} placeholder="Teléfono" ref={register({ required: true, maxLength: 20 })}></input>
              {errors.phone && <Typography variant="h4" className={classes.error}>El teléfono es obligatorio</Typography>}
              <textarea name="message" className={classes.text} rows="10" cols="50" placeholder="Mensaje" ref={register({ required: true, minLength: 10 })}></textarea>
              {errors.message && <Typography variant="h4" className={classes.error}>El mensaje no puede estar vacío</Typography>}
              <button type="submit" className={classes.button}>Enviar</button>
            </form>
          </Box>
        </Grid>
        <Grid item container xl={12} width={"100%"}>
          <Copy />
        </Grid>
      </Grid>
    </Element>
  )
}

export default withTranslation('common')(Footer)