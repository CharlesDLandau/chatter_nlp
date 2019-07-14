import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextAnalysis from './textAnalysis.js';
import AnalysisCard from './AnalysisCard.js';

const useStyles = makeStyles(theme => ({

}));


function AnalysisView(props){
  var { messages } = props
  
  var txt = new TextAnalysis(messages)
  var cardData = txt.cardData()
  return cardData.map((data, idx)=>{
  	return <AnalysisCard
  		key={`analysis-card-${idx}`} data={data}
  		/>
  })

}

export default AnalysisView