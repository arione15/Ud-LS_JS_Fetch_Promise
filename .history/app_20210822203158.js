const url = 'http://swapi.dev/api/planets';

async function asyncData() {
    let reponse = await fetch(url);
    let data = .then(function(data){
        console.log(data);
    })
}