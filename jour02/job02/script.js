const articleToToggle = document.createElement("article");
const articleContent = document.createTextNode("L'important n'est pas la chute, mais l'atterissage.");
articleToToggle.appendChild(articleContent);
document.body.appendChild(articleToToggle);
articleToToggle.style.display = "none";

function showhide(){
    if (articleToToggle.style.display === "none"){
        articleToToggle.style.display = "block";
    } else {
        articleToToggle.style.display = "none";
    }
}

document.getElementById("button").addEventListener("click", showhide);