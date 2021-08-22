const url = 'http://swapi.dev/api/planets';

async function asyncData() {
    let reponse = await fetch(url);
    let data = await reponsethen(function(data){
        console.log(data);
    })
}