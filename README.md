### Chatter NLP

This project uses the excellent [compromise](https://github.com/spencermountain/compromise) and [Chartist](https://gionkunz.github.io/chartist-js/) tools to show some simple NLP based on your chat inputs.

#### Motivation

Preprocessing is a big chore in data science.

1. Implement preprocessing in the browser
2. The data hits our servers preprocessed
3. ???
4. Profit

#### Limitations

1. If we're not careful, the user experience can significantly degrade
2. Burdens the frontend with backend concerns
3. Can only concern itself with data that's available in browser\

#### Implementation

Most of the "magic" happens in [textAnalysis.js](https://github.com/CharlesDLandau/chatter_nlp/blob/master/src/textAnalysis.js), including a hacky TF-IDF implementation, and pretty much all of the calls to `compromise`. The react app has `messages` in state, from which the `TextAnalysis` singleton is constructed. The primary responsibility for the `TextAnalysis` class is to parse the messages into data for `Chartist` to use in the `AnalysisCard` component, as shown in the analysis view.
