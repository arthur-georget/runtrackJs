let stashedArcs;
let placedArcs;

let $arc1;
let $arc2;
let $arc3;
let $arc4;
let $arc5;
let $arc6;

const message = document.createElement("article",);
let messageContent = document.createTextNode("Cliquez sur Jouer pour initialiser le jeu.");
message.appendChild(messageContent);
document.body.appendChild(message);

function appendStashedArcs(){
    $("#stash").empty();
    for (arc of stashedArcs){
        arc.on("click", selectImage);
        $("#stash").append(arc);
    }
}

function appendPlacedArcs(){
    $("#board").empty();
    for (arc of placedArcs){
        $("#board").append(arc);
    }
}

function shuffleStashedArcs(){
    let currentIndex = stashedArcs.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [stashedArcs[currentIndex], stashedArcs[randomIndex]] = [
        stashedArcs[randomIndex], stashedArcs[currentIndex]];
    }
    appendStashedArcs();
}

function selectImage(event){
    placedArcs.push(event.target);
    $("#board").remove(event.target);
    if (placedArcs.length > 5){
        let gamewon = true;
        for(let i=0; i<=5; i++){
            if(placedArcs[i].id != (i+1)){
                gamewon = false;
                break;
            }
        }
        if(gamewon){
            messageContent = document.createTextNode("Bravo vous avez gagné!");
            $(message).css("color","green");
        } else {
            messageContent = document.createTextNode("Vous avez perdu.");
            $(message).css("color","red");
        }
        message.appendChild(messageContent);
        document.body.appendChild(message);
    }
    appendPlacedArcs();
}

function initGame(){
    console.log(document.body.children.length);
    if (document.body.children.length > 3){
        message.removeChild(messageContent);
        document.body.removeChild(message);
    }

    stashedArcs = [];
    placedArcs = [];
    $arc1 = $("<img>",{id:"1",src:"assets/arc1.png"});
    stashedArcs.push($arc1);
    $arc2 = $("<img>",{id:"2",src:"assets/arc2.png"});
    stashedArcs.push($arc2);
    $arc3 = $("<img>",{id:"3",src:"assets/arc3.png"});
    stashedArcs.push($arc3);
    $arc4 = $("<img>",{id:"4",src:"assets/arc4.png"});
    stashedArcs.push($arc4);
    $arc5 = $("<img>",{id:"5",src:"assets/arc5.png"});
    stashedArcs.push($arc5);
    $arc6 = $("<img>",{id:"6",src:"assets/arc6.png"});
    stashedArcs.push($arc6);
    appendPlacedArcs();
    shuffleStashedArcs();
}

$("#button").on("click", initGame);