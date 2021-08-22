const url = 'http://swapi.dev/api/planets';

function asynctchData() {
    fetch(url).then(function (rep) {
        return rep.json();
    }).then(function(data){
        console.log(data);
    })
}