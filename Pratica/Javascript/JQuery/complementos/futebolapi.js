const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://thesportsdb.p.rapidapi.com/eventslast.php?id=134291",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "thesportsdb.p.rapidapi.com",
		"X-RapidAPI-Key": "ea4c245977msh2ca368e53df7a46p1fea4ejsnefd1b54daa10"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});