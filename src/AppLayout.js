import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  messageSpace:{
    marginBottom:theme.spacing(9),
    overflow:'auto',
    position:'relative',
  },
  textInputBar:{
    display: 'inline-block',
    height: theme.spacing(8),
    width: '100%',
    position:'relative',
  },

}));


function AppLayout(props) {
    const { messageSpace, textInputBar } = props
    const classes = useStyles()
    return(
      <Fragment>
        <div className={classes.messageSpace}>
        {messageSpace}
        </div>
        <div className={classes.textInputBar}>
        {textInputBar}
        </div>
      </Fragment>


      )
}


AppLayout.propTypes = {
  
};

export default AppLayout
