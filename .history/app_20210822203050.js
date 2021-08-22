const url = 'http://swapi.dev/api/planets';

function asyncData() {
    fetch(url).then(function (rep) {
        return rep.json();
    }).then(function(data){
        console.log(data);
    })
}