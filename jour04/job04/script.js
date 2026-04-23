async function update(event){
    let response = await fetch("data/user.json");
    let data = await response.json();
    
    while (usersTable.children.length > 1) {
        usersTable.removeChild(usersTable.lastChild);
    }

    for (user of data){
        const userRow = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const firstName = document.createTextNode(user["firstName"]);
        const lastNameCell = document.createElement("td");
        const lastName = document.createTextNode(user["lastName"]);
        const eMailCell = document.createElement("td");
        const eMail = document.createTextNode(user["eMail"]);
        firstNameCell.appendChild(firstName);
        lastNameCell.appendChild(lastName);
        eMailCell.appendChild(eMail);
        userRow.appendChild(firstNameCell);
        userRow.appendChild(lastNameCell);
        userRow.appendChild(eMailCell);
        usersTable.appendChild(userRow);
        
    }
}
update();
document.getElementById("updateButton").addEventListener("click", update);