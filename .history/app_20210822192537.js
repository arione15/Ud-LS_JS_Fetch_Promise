const url = 'https://pokeapi.co/api/v2/';

function fetchData() {
    fetch(url).then(function (rep) {
        console.log(rep);
    })
}