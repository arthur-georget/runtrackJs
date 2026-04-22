var $article = $("<article>");
    $article.append("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");
    $("body").append($article);
    $article.hide();

function showHide(){
    if ($article.is(":hidden")){
        $article.show();
    } else {
        $article.hide();
    }
}
$("#button").on("click", showHide);