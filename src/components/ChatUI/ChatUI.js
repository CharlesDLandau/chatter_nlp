import React, { Component, Fragment } from 'react';
import SocketIO from 'socket.io-client';

import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  chatCard: {
    display:'block',
    height: "100%"
  },
  formInput: {
    
  },
  formButton: {
    height: "100%",
    width: "100%",
    flexGrow: 1,
  },
  chatBody: {
    height: "80%",
    overflow: "hidden",
    border: "solid",
    borderColor: "#262626"
  },
  ownMessage: {
    justify: "left",
  },
  receivedMessage: {
    justify: "right",
    align: "right",
    padding: theme.spacing.unit*2,

  },
  chatForm: {
    margin: theme.spacing.unit,
  },
  container: {
    flexGrow: 1,
    height: "100%"
  },
});

class ChatUI extends Component {
    constructor( props ) {
      super( props );
      this.state = {
        m:"",
        recievedMessages:[
        {name: "app", message: "Hello"}
        ],
        ownMessages: [
        ]
      };
  }

  handleChange = name => event => {
    
    this.setState({
      [name]: event.target.value,
    }, ()=>{
    });
    
  };

  pushUIMessage = name => event => {
    this.setState({
      ownMessages: [...this.state.ownMessages, 
      {name: name, message: this.state.m}]
    }, ()=>{console.log(this.state)})
  }

  handleSubmit = name => event => {
      
      this.setState({
        [name]: this.state.m,
      }, ()=>{
      });
      
  };


  render() {
    const { classes } = this.props
    return(
      <div className={classes.container}>
      <Grid item xs>
      <Card className={classes.chatCard}
      >

      <CardContent>
    <List>
    <Grid container spacing={16}
    direction="column"
    alignItems="flex-end"
    justify="flex-end">
    {this.state.recievedMessages.map((item, idx)=>{
      return <Grid  key={idx.toString()} item xs><Divider/>
        <ListItem
      >
        <Paper className={
          classes.ownMessage
        }><Typography variant="body1">
        {item.message}:{item.name}
        </Typography>
        </Paper></ListItem>
        </Grid>
        })}
    </Grid>
    <Grid container spacing={16}
    direction="column"
    alignItems="flex-start"
    justify="flex-start">
    {this.state.ownMessages.map((item, idx)=>{
      console.log(item)
      return <Grid key={idx.toString()} item xs><Divider/>
        <ListItem>
        <Paper className={
          classes.ownMessage
        }><Typography variant="body1">
        {item.message}:{item.name}
        </Typography></Paper></ListItem>
        </Grid>
        })}
        </Grid>
    </List>
    </CardContent>

      <Divider variant="middle" color="secondary"/>
      <CardContent>
      <FormControl onSubmit={this.pushUIMessage("m")}>
      <Grid container spacing={16}
        direction="row"
        alignItems="stretch"
        justify="flex-end">
      
          <Grid item>
          <Button value={this.state.m} type="submit"
          className={classes.formButton}
          variant="contained"
          onClick={this.pushUIMessage('m')}>
          Send</Button>
          </Grid>
          <Grid item xs>
          
          <TextField className={classes.formInput}
          fullWidth
          value={this.state.name}
          onChange={this.handleChange('m')}
          margin="normal"
          onSubmit={this.pushUIMessage('m')}
          />
          </Grid>
      
      </Grid>
      </FormControl>

      </CardContent>

      </Card>
      </Grid>
      </div>
    )
  }
}

ChatUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatUI)

