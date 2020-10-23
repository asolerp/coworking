import React from 'react'
import dynamic from 'next/dynamic';


import Head from '../components/head'
import Nav from '../components/nav'
import Header from '../components/header';
import About from '../components/about'
import Coworking from '../components/coworking';


import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { withTranslation } from '../i18n'

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
  },
}));

const Home = ({t}) => {

  const DynamicComponentWithNoSSR = dynamic(() => import('../components/where'), {
    ssr: false
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head title="Coworking | Port D'Andratx" />
        <div className={classes.root}>
          <Nav />
          <Header />
          <About/>
          <Coworking />
          <DynamicComponentWithNoSSR />
        </div>
    </ThemeProvider>
  )
}

export default withTranslation('common')(Home)
