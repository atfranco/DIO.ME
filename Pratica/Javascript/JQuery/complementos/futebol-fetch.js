var evento = document.querySelector("#evento");
var strHomeTeam = document.querySelector("#time-casa");
var strAwayTeam = document.querySelector("#time-visitante");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'thesportsdb.p.rapidapi.com',
		'X-RapidAPI-Key': 'ea4c245977msh2ca368e53df7a46p1fea4ejsnefd1b54daa10'
	}
};

fetch('https://thesportsdb.p.rapidapi.com/eventslast.php?id=134291', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)

	.then(response => response.json(then(data =>{

		var jogos = data['response'];
		var strEvent = jogos[0]['strEvent'];
		var strHomeTeam = jogos[0]['strHomeTeam'];
		var strAwayTeam = jogos[0]['strAwayTeam'];

		evento.innerHTML = Object['strEvent']




	})))
);

