const url = 'http://swapi.dev/api/planets';

function asyncData() {
    let fetch(url).then(function (rep) {
        return rep.json();
    }).then(function(data){
        console.log(data);
    })
}