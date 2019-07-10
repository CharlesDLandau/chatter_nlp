import React, { Component, Fragment, useState } from 'react';
import SocketIO from 'socket.io-client';

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
import { withStyles } from '@material-ui/core/styles';
import ReactQuill from 'react-quill';


const styles = theme => ({
  root:{
    flexGrow:1,
  },
  textField:{
    flexGrow:1,
    minWidth:'200px',
  },
  cardHead:{
    backgroundColor:'lightGrey'
  },
  redMessage:{
    float:'right',
    margin:'5px',
    minWidth:'20%',
    textAlign:'right'
  },
  blueMessage:{
    float:'left'
  }

});

function ChatUI(props) {
    const [contents, setContents] = useState('');
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState("red");

    const mountMessage = (e) =>{
      e.preventDefault()
      var token = contents
      setContents('')
      var msgUpdate = messages
      msgUpdate.push({token:token, time: new Date().toLocaleString(),
      author:user})
      setMessages(msgUpdate)
      if (user === 'red'){
        setUser('blue')
      }else{
        setUser('red')
      }

    }

    const { classes } = props
    return(
      <Fragment>
        <div className={classes.root}>
        <Grid container direction='column'>
        {messages.map((msg, idx)=>{
            switch(msg.author){
              case "red":
                var msgCls = classes.redMessage
                break
              case "blue":
                var msgCls = classes.blueMessage
                break
            }
            return <Grid key={`msg-${idx*1000}-${msg.author}`}><Card
            className={msgCls}>
            <CardHeader className={classes.cardHead} title={
              <Typography variant='subtitle2'>
              {`Message from ${msg.author} at ${msg.time}`}</Typography>
            } />
            <Typography gutterBottom variant='h6'>{msg.token}</Typography>
              </Card></Grid>

          })
        }</Grid>
        <Drawer anchor="bottom" className={classes.chatDrawer} open >
        <Grid  container
        direction="row"
        alignItems="stretch">
        <TextField
          id="filled-multiline-static"
          label={`Write a message as ${user}`}
          value={contents}
          onChange={(e)=>{setContents(e.target.value)}}
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <Button
        onClick={mountMessage}>Send</Button>
        </Grid></Drawer></div></Fragment>


      )
}


ChatUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatUI)
