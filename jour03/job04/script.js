const input = document.createElement('input');
input.type = 'text';

$(input).css("width", "150px");
$(input).css("transition", "width 5s ease-in-out");

document.body.appendChild(input);

function grow(event){
    $(event.currentTarget).css("width","80vw");
}

function shrink(event){
    $(input).css("width", "150px");
}
$(input).on("focus", grow);
$(input).on("blur", shrink);