import { Box, Grid, Typography, Link as MaterialLink } from '@material-ui/core';
import React, { useState } from 'react';
import { CustomLink } from './ui/CustomLink'
import Copy from './copy'

import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../i18n'
import { Element } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#142A54',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    },
    [`${theme.breakpoints.down('sm')} and (orientation: landscape)`]: {
      height: '250vh',
    }
  },
  logo: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginBottom: '5%'
    }
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
    marginBottom: '2%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  text: {
    width: '80%',
    fontSize: '1.2rem',
    fontFamily: 'Montserrat',
    padding: theme.spacing(2),
    marginBottom: '2%',
    border: 0,
    borderRadius: '20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  button: {
    width: '80%',
    borderRadius: '20px',
    border: 0,
    color: '#142A54',
    background: '#4AEDC2',
    height: '70px',
    fontSize: '1.5rem',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    "&:disabled": {
      opacity: 0.3
    }
  },
  checkBoxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15 
  },
  checkBox: {
    transform: `scale(2)`
  },
  checkBoxText: {
    color: 'white',
    marginLeft: 15,
    alignItems: 'center',
    marginRight: 5,
  },
  error: {
    color: '#4AEDC2',
    fontSize: '1.2rem',
    fontFamily: 'Montserrat',
    marginBottom: '2%',
    paddingLeft: '.5%'
  },
  link: {
    color: 'white',
  }
})
)

const Footer = ({t}) => {
  const classes = useStyles();
  const onSubmit = (data, e) => sendEmail(data, e);
  const { register, formState: { errors, isValid, isDirty }, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    mode: 'onChange'
  });
  const [ formMessage, setFormMessage ] = useState()
  const [ loading, setLoading ] = useState(false)

  console.log("isValid", isValid)

  const formMessageHandler = (status)   => {
    if (status) setFormMessage(t('contact.success'))
    if (!status) setFormMessage(t('contact.error'))
    setTimeout(() => {
      setFormMessage(null)
    },2000)
  }

  const sendEmail = (data, e) => {
    setLoading(true)
    e.preventDefault()
    emailjs.sendForm('coworking', 'template_41zn7jo', e.target, 'user_QNiAukl0EEgIKSoUsafql')
      .then((result) => {
        formMessageHandler(true)
        setLoading(false)
        reset()
      }, (error) => {
        formMessageHandler(false)
        setLoading(false)
      });
  }

  return(
    <Element name="contact">
      <Grid container xl={12} className={classes.root}>
        <Grid item container lg={7} xl={7} >
          <Box display="flex" justifyContent="center" alignItems="center" style={{flexGrow: 1}}>
            <img src={'https://res.cloudinary.com/dh8rg0xrn/image/upload/v1603963382/Coworking/Logo_blue.svg'} className={classes.logo} />
          </Box>
        </Grid>
        <Grid item container lg={5} xl={5}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{flexGrow: 1}}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <input type="text" name="name" className={classes.input} placeholder={t('contact.name')} ref={register({ required: true })}></input>
              {errors.name && <Typography variant="h4" className={classes.error}>El nombre es obligatorio</Typography>}
              <input type="text" name="email" className={classes.input} placeholder={t('contact.email')} ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/  })}></input>
              {errors.email && <Typography variant="h4" className={classes.error}>El email no es correcto</Typography>}
              <input type="text" name="phone" className={classes.input} placeholder={t('contact.phone')} ref={register({ required: true, maxLength: 20 })}></input>
              {errors.phone && <Typography variant="h4" className={classes.error}>El teléfono es obligatorio</Typography>}
              <textarea name="message" className={classes.text} rows="10" cols="50" placeholder={t('contact.message')} ref={register({ required: true, minLength: 2 })}></textarea>
              {errors.message && <Typography variant="h4" className={classes.error}>El mensaje no puede estar vacío</Typography>}
              <div className={classes.checkBoxContainer}>
                <input type="checkbox" name='policy' className={classes.checkBox} ref={register({ required: true })} />
                <Typography variant="subtitle1" className={classes.checkBoxText} >{t('contact.policy1')}<CustomLink href="/policy" className={classes.link}>{t('contact.policy2')}</CustomLink></Typography>
              </div>
              <button disabled={!isDirty || !isValid}  type="submit" className={classes.button}>
                { loading ? <CircularProgress /> : t('contact.send') }
              </button>
              { formMessage && <Typography variant="h4" className={classes.error}>{formMessage}</Typography> }
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

Footer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Footer)