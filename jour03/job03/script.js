let $tile1 = $("<img>",{id:"1",src:"assets/logo1.png"});
let $tile2 = $("<img>",{id:"2",src:"assets/logo2.png"});
let $tile3 = $("<img>",{id:"3",src:"assets/logo3.png"});
let $tile4 = $("<img>",{id:"4",src:"assets/logo4.png"});
let $tile5 = $("<img>",{id:"5",src:"assets/logo5.png"});
let $tile6 = $("<img>",{id:"6",src:"assets/logo6.png"});
let $tile7 = $("<img>",{id:"7",src:"assets/logo7.png"});
let $tile8 = $("<img>",{id:"8",src:"assets/logo8.png"});
let $tile9 = $("<img>",{id:"9",src:"assets/logo9.png"});

const message = document.createElement("article",);
let messageContent = document.createTextNode("Cliquez sur Jouer pour initialiser le jeu.");
message.appendChild(messageContent);
document.body.appendChild(message);

function matrixer(board){
    let matrix = [[],[],[]];
    for (let i = 0; i <= board.length; i++){
        switch(true){
            case i <= 2:
                matrix[0].push(board[i]);
                break;
            case 3 <= i && i <= 5:
                matrix[1].push(board[i]);
                break;
            case 6 <= i && i <= 8:
                matrix[2].push(board[i]);
                break;
        }
    }
    return matrix;
}

function dematrixer(matrix){
    let board = [];
    for (line in matrix){
        for (tile in line){
            board.push(tile);
        }
    }
    return board;
}

function appendTiles(board){
    $("#board").empty();
    for (tile of board){
        $("#board").append(tile); 
    }
    setClickableTiles(board);
    $("img").on("click", {extra: board}, switchTiles);
}

function shuffleTiles(board){
    let currentIndex = board.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [board[currentIndex], board[randomIndex]] = [
         board[randomIndex], board[currentIndex]];
    }
    appendTiles(board);
    return board;
}

function setClickableTiles(board){
    let matrix = matrixer(board);
    let x_blank;
    let y_blank;
    for (let x = 0; x < 3; x++){
        for (let y = 0; y < 3; y++){
            if (matrix[x][y] === $tile9){
                x_blank = x;
                y_blank = y;
            }
        }
    }
    for (let x = 0; x < 3; x++){
        for (let y = 0; y < 3; y++){
            if (Math.abs(x_blank - x) + Math.abs(y_blank - y) === 1){
                matrix[x][y].css("cursor","pointer");
            } else {
                matrix[x][y].css("cursor","default");
            }
        }
    }
}

function switchTiles(event){
    let board = event.data.extra;
    if ($(event.currentTarget).css("cursor") === "pointer") {
        let x_blank;
        let x_tile;
        for (let x = 0; x < 9; x++){
            if (board[x] === $tile9){
                x_blank = x;
            } else if (board[x][0] === $(event.currentTarget)[0]){
                x_tile = x;
            }
        }
        board[x_tile] = $tile9;
        board[x_blank] = $(event.currentTarget);
        appendTiles(board);
    }
}

function initGame(){
    let board = [$tile1,$tile4,$tile7,$tile2,$tile5,$tile8,$tile3,$tile6,$tile9];
    if (document.body.children.length > 3){
        message.removeChild(messageContent);
        document.body.removeChild(message);
    }
    board = shuffleTiles(board);
    appendTiles(board);
}

$("#button").on("click", initGame);
