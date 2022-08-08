
function getData(){

    fetch("https://thesportsdb.p.rapidapi.com/eventslast.php?id=134291", {
        "method" : "GET",
        "headers" : {
            "X-RapidAPI-Host": "thesportsdb.p.rapidapi.com",
            "X-RapidAPI-Key": "MOCK"
        }
    })
    .then(response => response.json().then(data =>{
        console.log(response);
    }))

}
