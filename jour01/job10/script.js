let voyelles = ["a","â","à","e","é","è","ê","i","î","o","ô","u","ù","y"]

function compterVoyelles(phrase){
    let counter = 0;
    for (lettre of phrase){
        if (voyelles.includes(lettre)){
            counter++;
        }
    }
    console.log(`La phrase \"${phrase}\" contient ${counter} voyelles.`)
}

compterVoyelles("Créez une fonction “compterVoyelles” qui prend en paramètre une chaîne de caractères nommée phrase.")