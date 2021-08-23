const url = 'http://swapi.dev/api/planets';

const btn = document.createElement("button");
btn.textContent="Press me!";
document.body.appendChild(btn);
btn.addEventListener("click", asyncData);

const output = document.createElement("div");
document.body.appendChild(output);

// mettre le fetch then dans une fonction :
function fetchData() {
    fetch(url).then(function (rep) {
        return rep.json();
    }).then(function(data){
        output.textContent=`${data.count} résultats trouvés.`;
        console.log(data);
    })
}

// mettre le async / await dans une fonction :
async function asyncData() {
    let reponse = await fetch(url);
    let data = await reponse.json();
    output.textContent=`${data.count} résultats trouvés.`;
    if(data.next){
        const btn2 = document.createElement("button");
        document.body.appendChild(btn2);
        btn2.textContent=`Next`;
        btn2.addEventListener("click", function(){
            let resp = await fetch(data.next);
            let donnees = await resp.json();
            output.textContent=`${data} résultats trouvés.`;
        })

    }
    console.log(data);
}