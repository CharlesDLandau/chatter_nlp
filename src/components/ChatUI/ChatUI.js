import React, {Component} from 'react';
import SocketIO from 'socket.io-client';

import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';

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
        m:"Hello",
        s:"Hello"
      };
  }

  handleChange = name => event => {
    
    this.setState({
      [name]: event.target.value,
    }, ()=>{
      console.log(this.state[name])
    });
    
  };
  handleSubmit = name => event => {
      
      this.setState({
        [name]: this.state.m,
      }, ()=>{
        console.log(this.state[name])
      });
      
  };


  render() {
    const { classes } = this.props
    return(
      <div className={classes.container}>
      <Card className={classes.chatCard}
      >



      <CardContent className={classes.chatBody}>
        <span>{this.state.s}</span>
      </CardContent>

      <Divider variant="middle" color="secondary"/>
      <CardContent>
      <Grid container spacing={16}
        direction="row"
        alignItems="stretch"
        justify="flex-end">
      

          <Grid item>
          <Button value={this.state.m} type="submit"
          className={classes.formButton} variant="contained"
          onClick={this.handleSubmit('s')}>Send</Button>
          </Grid>
          <Grid item xs>
          
          <TextField className={classes.formInput}
          id="standard-name"
          label="Name"
          fullWidth
          value={this.state.name}
          onChange={this.handleChange('m')}
          margin="normal"
          />
          </Grid>
        

      </Grid>
      </CardContent>

      </Card>
      </div>
    )
  }
}

ChatUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatUI)

