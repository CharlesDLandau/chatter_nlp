import React, { Component } from 'react';
import ChatUI from './ChatUI.js'


import Typography from '@material-ui/core/Typography';

import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

import Backdrop from '@material-ui/core/Backdrop';

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
  constructor( props ) {
    super( props );
    this.state = {
    };

}
  render() {
    return (
          <MuiThemeProvider theme={theme}>
          <CssBaseline/>
	         <ChatUI/>
           </MuiThemeProvider>


    );
  }
}

export default App;
