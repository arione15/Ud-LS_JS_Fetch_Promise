const url = 'http://swapi.dev/api/planets';
const btn = document
function fetchData() {
    fetch(url).then(function (rep) {
        return rep.json();
    }).then(function(data){
        console.log(data);
    })
}

async function asyncData() {
    let reponse = await fetch(url);
    let data = await reponse.json();
    console.log(data);
}