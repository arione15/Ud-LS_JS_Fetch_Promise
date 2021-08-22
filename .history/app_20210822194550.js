const url = 'https://pokeapi.co/api/v2/';

function fetchData() {
    fetch(url).then(function (rep) {
        return rep.json()console.log(rep);
    })
}