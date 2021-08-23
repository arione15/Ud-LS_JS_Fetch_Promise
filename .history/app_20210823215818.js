// Création d'un bouton pour récupérer les données
const btn = document.createElement("button");
btn.textContent = "Press me!";
document.body.appendChild(btn);
btn.addEventListener("click", function () {
    //fetchData('http://swapi.dev/api/planets');
    //asyncData('http://swapi.dev/api/planets');
    fetchAll('http://swapi.dev/api/planets', []).then(function (planets) {
        console.log(planets)
    });
});

// Création d'une div pour afficher les données de sortie qu'on veut : 
// ici on peut utiliser html et css mais on veut n'utiliser que JS.
const output = document.createElement("div");
document.body.appendChild(output);

// Créer une fonction pour afficher les données en parcourant data
function outputPlanets(data) {
    data.forEach(function (element) {
        console.log(element);
        const maDiv = document.createElement("div");
        document.body.appendChild(maDiv);
        maDiv.textContent = element.Nom;

        const monUl = document.createElement("ul");
        maDiv.appendChild(monUl);

        for (film of element.Films) {
            let monLi = document.createElement("li");
            monUl.appendChild(monLi);
            monLi.textContent = film;
        }
    });
}

// Créer la fonction fetchAll qui utilise Promise
function fetchAll(url, planets) {
    return new Promise(function (resolve, reject) {
                return fetch(url).then(function (rep) { //h. car il y a l'url de l'appli mais il y a aussi les url des # pages
                        return rep.json();
                    }).then(function (data) {
                            planets = data.results.map(function (item) {
                                return {
                                    Nom: item.name,
                                    Films: item.films
                                };

                            })
                            resolve(planets)
                        };
                        // mettre le fetch/then dans une fonction :
                        function fetchData(url) {
                            fetch(url).then(function (rep) {
                                return rep.json();
                            }).then(function (data) {
                                output.textContent = `${data.count} résultats trouvés.`;
                                if (data.next !== null) { //ou bien if(data.next)
                                    const btnNext = document.createElement("button");
                                    output.appendChild(btnNext);
                                    // !!!! POURQUOI ? le mettre dans document.body crée à chaque
                                    // !!!! fois un autre bouton Next            
                                    btnNext.textContent = "Next";
                                    btnNext.addEventListener("click", function () {
                                        fetchData(data.next);
                                    })
                                }

                                // Utilisation de map pour extraire des infos du nom des planètes et leurs films
                                const planets = data.results.map(function (item) {
                                    //console.log(item);
                                    return {
                                        Nom: item.name,
                                        Films: item.films
                                    }
                                })
                                outputPlanets(planets);
                            })
                        }

                        // mettre le async/await dans une fonction :
                        async function asyncData(url) {
                            let reponse = await fetch(url);
                            let data = await reponse.json();
                            output.textContent = `${data.count} résultats trouvés.`;
                            if (data.next) {
                                const btnNext = document.createElement("button");
                                output.appendChild(btnNext);
                                //document.body.appendChild(btnNext); 
                                // !!!! POURQUOI ? le mettre dans document.body crée à chaque
                                // !!!! fois un autre bouton Next
                                btnNext.textContent = "Next";
                                btnNext.addEventListener("click", function () {
                                    asyncData(data.next);
                                })
                            }
                            const planets = data.results.map(function (item) {
                                return {
                                    Nom: item.name,
                                    Films: item.films
                                };
                            })
                            outputPlanets(planets);
                        }