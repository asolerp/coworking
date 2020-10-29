import React from 'react'
import dynamic from 'next/dynamic';


import Head from '../components/head'
import Nav from '../components/nav'
import Header from '../components/header';
import About from '../components/about'
import Coworking from '../components/coworking';
import Services from '../components/services'
import Footer from '../components/footer'


import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import { FaChevronCircleUp } from 'react-icons/fa'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative'
  },
  upButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    zIndex: 99,
    right: 10,
    top: 850,
    [theme.breakpoints.down('sm')]: {
      top: 550,
    }
  }
}));

export const UpButton = () => {

  const topScroll = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'})
  }

  const classes = useStyles();
  return (
    <Box className={classes.upButton}>
     <FaChevronCircleUp color="#4AEDC2" size={50} style={{cursor: 'pointer'}} onClick={() => topScroll()}/>
    </Box>
  )
}

const Home = ({t}) => {

  const DynamicComponentWithNoSSR = dynamic(() => import('../components/where'), {
    ssr: false
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head title="Coworking | Port D'Andratx" />
        <UpButton />
        <div className={classes.root}>
          <Nav />
          <Header />
          <About/>
          <Coworking />
          <DynamicComponentWithNoSSR />
          <Services />
          <Footer />
        </div>
    </ThemeProvider>
  )
}

export default Home
