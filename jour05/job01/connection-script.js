const loginForm = document.getElementById("loginForm");
const globalRegex = /^(?![^{}<>]*[{}<>])[^]{1,50}$/;

function removeAlerts(){
    for (child of loginForm.children){
        if (child.classList.contains("alerts")){
            child.remove();
        }
    }
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("userEmail");
    const passwordInput = document.getElementById("userPassword");

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const showAlert = (targetInput) => {
        const alert = document.createElement("p");
        alert.className = "alerts";
        alert.textContent = "<> et {} sont des caractères interdits.";
        targetInput.after(alert);
        
        requestAnimationFrame(() => {
            alert.classList.add("visible");
        });
    };
    removeAlerts();
    if (!globalRegex.test(emailValue)) {    
        showAlert(emailInput);
    } else if (!globalRegex.test(passwordValue)) {
        showAlert(passwordInput);
    } else {
        removeAlerts();
        window.alert(`Email: ${emailValue}\nMot de passe: ${passwordValue}`);
    }
});