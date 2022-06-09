
function getData(){

    fetch("https://thesportsdb.p.rapidapi.com/eventslast.php?id=134291", {
        "method" : "GET",
        "headers" : {
            "X-RapidAPI-Host": "thesportsdb.p.rapidapi.com",
            "X-RapidAPI-Key": "ea4c245977msh2ca368e53df7a46p1fea4ejsnefd1b54daa10"
        }
    })
    .then(response => response.json().then(data =>{
        console.log(response);
    }))

}