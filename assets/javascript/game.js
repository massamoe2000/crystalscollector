var crystalcollectorGame = {
	crystalToPick: {
		"diamred" : {
			picture: 'diamred.jpg',
		}, 
		"diamblue" : {
			picture: 'diamblue.jpg',
		}, 
		"diamyellow" : {
			picture: 'diamyellow.jpg',
		}, 
		"diamgreen" : {
			picture: 'diamred.jpg',
		}, 

		randomNum: null, 
		matchScore: null, 
		diamondsInPlay: [],
		valueOfDiamonds: null,
		diamTotalScore: 0,

		setupGame:function(){
			//show random number
			var objKeys = Object.keys.show(this.randomNum);
			this.matchScore = objKeys[Math.floor(Math.random() * 100)];

		}

		setupDiamonds: function(){
			//hide random diamond number
			var objKeys = Object.keys.hide(this.valueOfDiamonds);
			this.diamondsInPlay = objKeys[Math.floor(Math.random() * 50)];
		}

		calculateGameScore: function(){
			diamTotalScore


		}





