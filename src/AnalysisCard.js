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

import ChartistGraph from 'react-chartist'

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardHead:{
  	maxHeight: theme.spacing(1),
    backgroundColor:theme.palette.secondary.main,
  },
  cardBody:{
    flexGrow:1
  },
  card:{
    margin: theme.spacing(2)
  },

}));


function AnalysisCard(props){
  var { data } = props
  const classes = useStyles();

  return <Grid item>
            <Card className={classes.card}>

            {/* Head of card*/}
            <CardHeader className={classes.cardHead} title={
              <Typography style={
                {textOverflow:'ellipsis', whiteSpace:'nowrap'}
              }
               variant='subtitle2'>
              {data.title}</Typography>
            } />
            
            {/* Main body of message (a chart)*/}
            <ChartistGraph 
            data={data.chartData}
            type={data.chartType}
            options={data.chartOpts} />
            </Card>

        </Grid>

}

export default AnalysisCard