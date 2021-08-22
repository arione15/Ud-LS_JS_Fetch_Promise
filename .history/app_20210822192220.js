const url = 'https://swapi.co/api/planets';

function fetchData() {
    fetch(url).then(function (rep) {
        console.log(rep);
    })       
}
