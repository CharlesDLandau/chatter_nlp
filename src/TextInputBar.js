import React, { Fragment, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Message from './Message.js';

const useStyles = makeStyles(theme => ({
  root:{
    flexGrow:1,
    position:'relative',
    overflow:'auto',
    width: '100%',
    height: '100%'
  },
  messageDrawer:{
    flexGrow:1,
    bottom: theme.spacing(8),
    overflow:'scroll'
  },
  writingDrawer:{
    height:theme.spacing(8),
  },
  textField:{
    flexGrow:1,

  }

}));

function TextInputDrawer(props){
  const [contents, setContents] = useState('');

  const classes = useStyles()

  // Parse props
  const mountMessage = props.mountMessage
  const { messages, user } = props
  
  // Message management is in parent...
  const handleSubmit = (e) => {
    e.persist()
    if (e.shiftKey && (e.key === 'Enter')){
      mountMessage(e, contents)
      setContents('')
      }
  }


  return <Drawer variant="persistent" anchor="bottom" className={classes.writingDrawer} open >
        <Grid  container

        direction="row"
        alignItems="stretch">
        <TextField
          id="filled-multiline-static"
          label={`Write a message as ${user}`}
          value={contents}
          onKeyPress={(e)=>{handleSubmit(e,contents)}}
          onChange={(e)=>{setContents(e.target.value)}}
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <Button
        onClick={
          (e)=>mountMessage(e, contents)
        }>Send
        </Button>
        </Grid></Drawer>
  }

  export default TextInputDrawer