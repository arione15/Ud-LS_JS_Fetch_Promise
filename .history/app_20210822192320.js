const url = 'https://swapi.dev/';

function fetchData() {
    fetch(url).then(function (rep) {
        console.log(rep);
    })
}