const url = 'http://swapi.dev/api/planets';

const btn = document.createElement("button");
btn.textContent="Press me!";
document.body.appendChild(btn);
btn.addEventListener("click", asyncData);

const output = document.createElement("div");
document.body.appendChild(output);

function fetchData() {
    fetch(url).then(function (rep) {
        return rep.json();
    }).then(function(data){
        output.textContent=`${data.count} résultats trouvés.`;
        console.log(data);
    })
}

async function asyncData() {
    let reponse = await fetch(url);
    let data = await reponse.json();
    output.textContent=`${data.count} résultats trouvés.`;
    if(data.next){
        const next = document.createElement("div");
        document.bod
    }
    console.log(data);
}