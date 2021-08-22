const url = "https://pokeapi.co/";

function fetchData() {
    fetch(url).then(function (rep) {
        console.log(rep)
    })
}
