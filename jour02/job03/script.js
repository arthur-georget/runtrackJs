function addOne(){
    let counter = document.getElementById("compteur").textContent;
    counter++;
    document.getElementById("compteur").textContent = counter;
}

document.getElementById("button").addEventListener("click", addOne);