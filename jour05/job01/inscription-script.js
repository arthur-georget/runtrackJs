const newAccountForm = document.getElementById("newAccountForm");

const regexConfig = {
    userFirstName: {
        regex: /^[a-zA-ZÀ-ÿ\s-]{3,}$/,
        error: "Le prénom doit contenir au moins 3 lettres (chiffres et symboles interdits)."
    },
    userLastName: {
        regex: /^[a-zA-ZÀ-ÿ\s-]{3,}$/,
        error: "Le nom doit contenir au moins 3 lettres (chiffres et symboles interdits)."
    },
    userEmail: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        error: "Le format de votre Email est invalide."
    },
    userPassword: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$/,
        error: "Le mot de passe doit contenir une majuscule, une minuscule, un chiffre, un caractère spécial et au moins 8 caractères."
    },
    userConfirmationPassword: {
        custom: (val) => val === document.getElementById("userPassword").value,
        error: "Les mots de passe ne correspondent pas."
    },
    userAddress: {
        regex: /^(?![^{}<>]*[{}<>])[^]{1,50}$/,
        error: "L'adresse est trop longue ou contient des caractères interdits."
    },
    userPostalCode: {
        regex: /^\d{5}$/,
        error: "Le code postal doit contenir exactement 5 chiffres."
    }
};

const validateField = (input) => {
    const config = regexConfig[input.id];
    const existingAlert = input.nextElementSibling;
    
    if (existingAlert && existingAlert.classList.contains("alerts")) {
        existingAlert.remove();
    }

    let isValid = config.regex ? config.regex.test(input.value) : config.custom(input.value);

    if (!isValid) {
        const alert = document.createElement("p");
        alert.className = "alerts";
        alert.textContent = config.error;
        input.after(alert);
        requestAnimationFrame(() => {
            alert.classList.add("visible");
        });
    }
    return isValid;
};

Object.keys(regexConfig).forEach(id => {
    const element = document.getElementById(id);
    element.addEventListener('blur', () => validateField(element));
});

newAccountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isFormValid = true;

    Object.keys(regexConfig).forEach(id => {
        const input = document.getElementById(id);
        if (!validateField(input)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        const formData = {};
        Object.keys(regexConfig).forEach(id => {
            formData[id] = document.getElementById(id).value;
        });
        window.alert(`Nom: ${formData["userLastName"]}
Prénom: ${formData["userFirstName"]}
Email: ${formData["userEmail"]}
Mot de passe: ${formData["userPassword"]}
Adresse: ${formData["userAddress"]}
Code postal: ${formData["userPostalCode"]}`);
    }
});