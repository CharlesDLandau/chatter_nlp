import React, { Component } from 'react';
import ChatUI from './components/ChatUI/ChatUI.js'


import Typography from '@material-ui/core/Typography';

import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

import Backdrop from '@material-ui/core/Backdrop';
import NoSsr from '@material-ui/core/NoSsr';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles/';

const theme = createMuiTheme({
  palette: {
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});


class App extends Component {
  render() {
    return (
          <MuiThemeProvider theme={theme}><NoSsr><Backdrop open/><CssBaseline/>
	<ChatUI/></NoSsr></MuiThemeProvider>
        
      
    );
  }
}

export default App;
