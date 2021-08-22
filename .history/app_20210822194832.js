const url = 'http://swapi.dev/api/planets/1/';

function fetchData() {
    fetch(url).then(function (rep) {
        return rep.json();
    }).then(function(data){
        console.log(data);
    })
}