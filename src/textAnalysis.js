import nlp from 'compromise';

export default class TextAnalysis{
	constructor(docs){
		this.docs = docs
		this.mergedTokens = nlp(
			this.docs.map(obj => obj.token).join()
		)
		
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

	cardData(opts){
		var labels = this.mergedTokens.terms().out(
						'freq').slice(0, 5).map(
						obj=>{
							return obj.normal
						})
		var data = this.mergedTokens.terms().out(
						'freq').slice(0, 5).map(
						obj=>{
							return obj.count
						})

		return [
				{
					title: "Term Frequency",
					chartData: {labels: labels,
						series:[data]},
					chartType: 'Bar',
					chartOpts: {
					}
	
						
				},
		]
	}
}