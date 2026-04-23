async function loadExpression(){
    let response = await fetch("expression.txt");
    let data = await response.text();
    const paragraph = document.createElement("p");
    const paragraphContent = document.createTextNode(data);
    paragraph.appendChild(paragraphContent);
    document.body.appendChild(paragraph);
}

document.getElementById("button").addEventListener("click", loadExpression);