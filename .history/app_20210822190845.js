const url = "https://pokeapi.co/";

function fetchData() {
    fetch(url).then(function (rep) {
        //console.log(rep); //1.
        return rep.json()
    })
    .then(function(data){
        console.log(data);
    })
}