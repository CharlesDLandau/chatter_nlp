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

import TextAnalysis from './textAnalysis.js';
import AnalysisCard from './AnalysisCard.js';

const useStyles = makeStyles(theme => ({

}));


function AnalysisView(props){
  var { messages } = props
  const classes = useStyles();

  var txt = new TextAnalysis(messages)
  var cardData = txt.cardData()
  return cardData.map((data, idx)=>{
  	return <AnalysisCard
  		key={`analysis-card-${idx}`} data={data}
  		/>
  })

}

export default AnalysisView