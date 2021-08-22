const url = 'http://swapi.dev/api/planets';

async function asyncData() {
    let reponse = fetch(url).then(function (rep) {
        return rep.json();
    }).then(function(data){
        console.log(data);
    })
}