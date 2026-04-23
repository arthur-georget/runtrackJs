async function filter(event){
    event.preventDefault();
    let formData = new FormData(event.target);
    let filters = Object.fromEntries(formData);
    let response = await fetch("data/pokemon.json");
    let data = await response.json();
    let pokemonsToDisplay = [];
    for (pokemon of data){
        if (
            (filters["pokemonId"] != "" ? pokemon["id"] == filters["pokemonId"] : true) &&
            (filters["pokemonName"] != "" ? pokemon["name"]["french"] == filters["pokemonName"] : true) &&
            (("normal" in filters) ? pokemon["type"].includes("Normal") : true) &&
            (("fire" in filters) ? pokemon["type"].includes("Fire") : true) &&
            (("water" in filters) ? pokemon["type"].includes("Water") : true) &&
            (("grass" in filters) ? pokemon["type"].includes("Grass") : true) &&
            (("electric" in filters) ? pokemon["type"].includes("Electric") : true) &&
            (("ice" in filters) ? pokemon["type"].includes("Ice") : true) &&
            (("fighting" in filters) ? pokemon["type"].includes("Fighting") : true) &&
            (("poison" in filters) ? pokemon["type"].includes("Poison") : true) &&
            (("ground" in filters) ? pokemon["type"].includes("Ground") : true) &&
            (("flying" in filters) ? pokemon["type"].includes("Flying") : true) &&
            (("psychic" in filters) ? pokemon["type"].includes("Psychic") : true) &&
            (("bug" in filters) ? pokemon["type"].includes("Bug") : true) &&
            (("rock" in filters) ? pokemon["type"].includes("Rock") : true) &&
            (("ghost" in filters) ? pokemon["type"].includes("Ghost") : true) &&
            (("dragon" in filters) ? pokemon["type"].includes("Dragon") : true) &&
            (("dark" in filters) ? pokemon["type"].includes("Dark") : true) &&
            (("steel" in filters) ? pokemon["type"].includes("Steel") : true) &&
            (("fairy" in filters) ? pokemon["type"].includes("Fairy") : true)
        ){
                pokemonsToDisplay.push(pokemon);
        }
    };
    const pokemonsInfos = document.getElementById("pokemonsInfos");
    while (pokemonsInfos.firstChild) {
        pokemonsInfos.removeChild(pokemonsInfos.lastChild);
    }
    for (pokemon of pokemonsToDisplay){
        const paragraph = document.createElement("p");
        const paragraphContent = document.createTextNode(pokemon["name"]["french"]);
        paragraph.appendChild(paragraphContent);
        pokemonsInfos.appendChild(paragraph);
    }
}
document.getElementById("pokemonFiltersForm").addEventListener("submit", filter);