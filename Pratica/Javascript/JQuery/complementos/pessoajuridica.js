const settings = {
	"async": true,
	"url": "https://thesportsdb.p.rapidapi.com/eventslast.php?id=134291",
	"crossDomain": true,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "consulta-cnpj-gratis.p.rapidapi.com",
		"X-RapidAPI-Key": "ea4c245977msh2ca368e53df7a46p1fea4ejsnefd1b54daa10"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

//

function consultaCnpj(){

    var cnpj = document.getElementById("cnpj").value;
    var url = "https://consulta-cnpj-gratis.p.rapidapi.com/office/" + cnpj + "?simples=false";
    console.log(cnpj);

    $.ajax({
        url: url,
        type: "GET",

        success: function(response){
            console.log(response);
            $("#adress").html(response.adress);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            $("#complemento").html(response.complemento);
            //document.getElementById("complemento").innerHTML = response.complemento;
            $("#bairro").html(response.bairro);
            //document.getElementById("bairro").innerHTML = response.bairro;
            $("#localidade").html(response.localidade);
            //document.getElementById("localidade").innerHTML = response.localidade;
            $("#uf").html(response.uf);
            //document.getElementById("uf").innerHTML = response.uf;
            $("#ddd").html(response.ddd);
            //document.getElementById("ddd").innerHTML = response.ddd;
        }
    })
}