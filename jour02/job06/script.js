let keyInput = "";
let timer;
const KONAMICODE = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

function displayLaPlateforme(){
    const container = document.createElement("div");
    const logo = new Image(145,24);
    logo.src = "assets/logo.png";
    const div = document.createElement("div");
    const content = document.createTextNode("TOTO");
    document.body.style.backgroundColor = "rgb(8,101,250)";
    document.body.style.fontFamily = "Poppins";
    document.body.style.fontSize = "22px";
    container.style.backgroundColor = "white";
    div.style.color = "rgb(255,32,99)";
    div.style.textAlign = "center";
    div.appendChild(content);
    container.appendChild(logo);
    container.appendChild(div);
    document.body.appendChild(container);
}

function checkIfKonamiCodeInput(event){
    clearTimeout(timer);
    keyInput += event.key;
    timer = setTimeout(function(){
        keyInput = "";
    }, 500);
    if (keyInput.includes(KONAMICODE)){
        displayLaPlateforme();
    }
}
document.body.addEventListener("keydown", checkIfKonamiCodeInput);