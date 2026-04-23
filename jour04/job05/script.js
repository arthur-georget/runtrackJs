async function loadCitation(){
    const citationContainer = document.getElementById("citationContainer");
    while (citationContainer.firstChild) {
        citationContainer.removeChild(citationContainer.lastChild);
    }
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://zenquotes.io/api/random';

    let response = await fetch(proxyUrl + targetUrl);
    let data = await response.json();
    console.log(data);
    const paragraph = document.createElement("p");
    const paragraphContent = document.createTextNode(`Quote: ${data[0]["q"]}`);
    const author = document.createElement("p");
    const authorContent = document.createTextNode(`Author: ${data[0]["a"]}`);
    paragraph.appendChild(paragraphContent);
    author.appendChild(authorContent);
    citationContainer.appendChild(paragraph);
    citationContainer.appendChild(author);
}

document.getElementById("button").addEventListener("click", loadCitation);