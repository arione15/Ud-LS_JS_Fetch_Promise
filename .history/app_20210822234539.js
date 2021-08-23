const url = 'http://swapi.dev/api/planets';

const btn = document.createElement("button");
btn.textContent="Press me!";
document.body.appendChild(btn);
btn.addEventListener("click", asyncData);

const output = document.createElement("div");
document.body.appendChild(output);
output.textContent=data{}


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