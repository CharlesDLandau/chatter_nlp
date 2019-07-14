import React, { Fragment } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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

// A component that displays Message components.
// Accepts an array of objects as props.messages
function MessageSpace(props) {
    const classes = useStyles()
    const [nlpView, setNLPViewMode] = React.useState(false);

    const { messages, txt } = props

    const msgRender = (<div className={classes.root}>

        {messages.map((msg, idx)=>{
          return <Box component="span"
          key={`msg-${idx}-${msg.author}`}>
          <Message msg={msg}/></Box>
          })
        }

        </div>)

    return(
      <Fragment>
        {nlpView ? <AnalysisView messages={messages} txt={txt} /> : msgRender }
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
