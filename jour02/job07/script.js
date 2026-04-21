document.body.style.backgroundColor = "white";
document.body.style.color = "black";

function changeTheme(){
    if (document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

document.getElementById("toggle-theme").addEventListener("click", changeTheme);