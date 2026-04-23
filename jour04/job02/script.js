function jsonValueKey(json, key){
    let obj = JSON.parse(json);
    return obj[key];
}

let value = jsonValueKey('{ "name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}', "city");
console.log(value);