import React, { Fragment, useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Message from './Message.js';
import AnalysisView from './AnalysisView.js';

const useStyles = makeStyles(theme => ({
  root:{
    flexGrow:1,
    position:'relative',
    overflow:'auto',
    width: '100%',
    height: '100%'
  },
  viewButton:{
    position:'relative',
    display: 'inlineBlock',
    bottom:0
  },

}));

function MessageSpace(props) {
    const classes = useStyles()
    const [nlpView, setNLPViewMode] = React.useState(false);

    const { messages } = props
    
    const msgRender = (<div className={classes.root}>
        
        {messages.map((msg, idx)=>{
          return <Box component="span"><Message msg={msg}
          key={`msg-${idx*1000}-${msg.author}`} /></Box>
          })
        }
        
        </div>)

    return(
      <Fragment>
        {nlpView ? <AnalysisView messages={messages} /> : msgRender }
        <Button variant='contained' className={classes.viewButton}
        onClick={()=>{setNLPViewMode(!nlpView)}}>
        {
          nlpView ? `Switch to Chat View` : `Switch to Analysis View`
        }</Button></Fragment>


      )
}


MessageSpace.propTypes = {
  
};

export default MessageSpace
