function feedTextArea(event){
    document.getElementById("keylogger").value += event.key;
}
document.body.addEventListener("keydown", feedTextArea);