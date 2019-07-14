import nlp from 'compromise';

export default class TextAnalysis{
	constructor(docs){
		this.docs = docs
		this.mergedTokens = nlp(
			this.docs.map(obj => obj.token).join()
		)
		
	}

	tf(d, t){
		// Takes a document and term
		// Returns the term frequency (tf)
		// tf = (occurrances of search term/N unique terms)
		
		var tCount = nlp(d.token).match(t).out('array').length
		var nUnique = nlp(d.token).terms().out('freq').length
		
		return (tCount/nUnique) 
	}

	idf(t){
		// Takes a term
		// Returns the inverse document frequency (idf)
		// idf = log_e(N documents/N documents containing
		// the search term)

		var nDocs = this.docs.length
		var nMatches = this.docs.filter(
			doc=>{doc.match(t).found()}
				).length
		return Math.log((nDocs/nMatches))

	}

	getDocs(){
		return this.docs
	}

	mergedTokensDoc(opts){
		// TODO: filter opt to only get tokens for a given set of user
		
		// Pass an opt to the nlp.out method, else 'text'
		try{return this.mergedTokens.out(`${opts.out}`)}catch(error){
			return this.mergedTokens.out('text')
		}
	}

	firstTFIDF(){
		
	};

	cardData(opts){

		return [
				{
					title: "Term Frequency (Overall)",
					chartData: {labels: this.mergedTokens.terms().out(
						'freq').slice(0, 5).map(
						obj=>{
							return obj.normal
						}),
						series:[this.mergedTokens.terms().out(
						'freq').slice(0, 5).map(
						obj=>{
							return obj.count
						})]},
					chartType: 'Bar',
					chartOpts: {
					}	
				},
				{
					title: "TF-IDF Top Weights in the first Message",
					chartData: {
						labels: [],
						series:[],
					},
					chartType: 'Bar',
					chartOpts: {
					}	
				},
				{
					title: "Named Entities",
					chartData: {
						labels: this.mergedTokens.topics(
							).out('freq').map(
								data=>{return data.normal}
						),
						series:[this.mergedTokens.topics(
							).out('freq').map(
								data=>{return data.count}
						)]},
					chartType: 'Bar',
					chartOpts: {
					}
				},
				{
					title: "Parts of Speech",
					chartData: {
						labels: ["Noun", "Verb", "Adjective"],
						series:[
						this.mergedTokens.match('#Noun'
							).out('array').length,
						this.mergedTokens.match('#Verb'
								).out('array').length,
						this.mergedTokens.match('#Adjective'
								).out('array').length
						]},
					chartType: 'Pie',
					chartOpts: {
						chartPadding: 30,
						labelOffset: 30,
						labelDirection: 'explode'
					}
				},
				]
	}
}