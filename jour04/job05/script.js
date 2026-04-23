async function loadCitation(){
    const citationContainer = document.getElementById("citationContainer");
    while (citationContainer.firstChild) {
        citationContainer.removeChild(citationContainer.lastChild);
    }
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://zenquotes.io/api/random';
    try {
        const response = await fetch(proxyUrl + targetUrl);
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const paragraph = document.createElement("p");
        const paragraphContent = document.createTextNode(`Quote: ${data[0]["q"]}`);
        const author = document.createElement("p");
        const authorContent = document.createTextNode(`Author: ${data[0]["a"]}`);
        paragraph.appendChild(paragraphContent);
        author.appendChild(authorContent);
        citationContainer.appendChild(paragraph);
        citationContainer.appendChild(author);
    } catch (error) {
        console.error(error.message);
    }
    
}

document.getElementById("button").addEventListener("click", loadCitation);