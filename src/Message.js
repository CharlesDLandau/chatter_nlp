import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardHead:{
  	maxHeight: theme.spacing(1),
    backgroundColor:theme.palette.secondary.main,
  },
  redMessage:{
    float:'right',
    backgroundColor:theme.palette.primary.main,
    margin:theme.spacing(1),
    minWidth:theme.spacing(2),
    maxWidth:'70%',
    textAlign:'left'
  },
  blueMessage:{
  	float:'left',
  	backgroundColor:theme.palette.primary.dark,
  	margin:theme.spacing(1),
  	minWidth:theme.spacing(5),
    maxWidth:'70%',
  	textAlign:'left'
  }

}));


function Message(props){
  var { msg } = props
  const classes = useStyles();

  switch(msg.author){
    case "red":
      var msgCls = classes.redMessage
      break
    case "blue":
      var msgCls = classes.blueMessage
      break
  }
  return <Grid item><Card
            className={msgCls}>
            <CardHeader className={classes.cardHead} title={
              <Typography style={{textOverflow:'ellipsis', whiteSpace:'nowrap'}}
               variant='subtitle2'>
              {`Message from ${msg.author} at ${msg.time}`}</Typography>
            } />
            <Typography gutterBottom variant='h6'>{msg.token}</Typography>
              </Card></Grid>

}

export default Message