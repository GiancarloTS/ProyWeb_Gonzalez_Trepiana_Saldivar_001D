/* const api_url = "https://rickandmortyapi.com/api";

const HTMLResponse = document.querySelector("#app");
const tpl = document.createElement("article");

fetch(`${api_url}/character`)
    .then((response) => response.json())
    .then((personajes) => {
        personajes.forEach((personaje) => {
            let elem = document.createElement("span");
            elem.appendChild(
                document.createTextNode(`${personaje.status} - ${personaje.species}`)
            );
            tpl.appendChild(elem);
        });

        HTMLResponse.appendChild(tpl);
    }); */

/* function onRequestHandler(){
    if(this.readyState == 4 && this.status ==200){
        console.log(this.response);
    
        const data = JSON.parse(this.response)
        const HTMLResponse = document.querySelector("#app");

        const tpl = data.map((personaje) => `
            
                <div class="image-container">
                    <img src="${personaje.image}">
                </div>

                <h2>${personaje.name}</h2>
                <span>${personaje.status} - ${personaje.species}</span>
            `);
        HTMLResponse.innerHTML = `<article>${tpl}</article>`;
    }
} */

/* xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${api_url}/character`);
xhr.send(); */




/*function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character/?page=7");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    
    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(`
        
        <article>

            <div class="image-container">
                <img src="${personaje.image}">
            </div>

            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>

        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    });
});*/

function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character/?name=summer&status=alive");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    
    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(`
        
        <article>

            <div class="image-container">
                <img src="${personaje.image}">
            </div>

            <h2>${personaje.name}</h2>
            <span>${personaje.status} - ${personaje.species}</span>

        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    });
});