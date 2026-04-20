const JOURS = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]

function zeroAvantDix(nombre) { return (nombre < 10) ? '0' + nombre : nombre; }

function paques(année) {
    let C = Math.floor(année / 100);
    let N = année - 19 * Math.floor(année / 19);
    let K = Math.floor((C - 17) / 25);
    let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
    I = I - 30 * Math.floor((I / 30));
    I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
    let J = année + Math.floor(année / 4) + I + 2 - C + Math.floor(C / 4);
    J = J - 7 * Math.floor(J / 7);
    let L = I - J;
    let M = 3 + Math.floor((L + 40) / 44);
    let D = L + 28 - 31 * Math.floor(M / 4);

    return new Date(`${année}-${zeroAvantDix(M)}-${zeroAvantDix(D)}`);
}

Date.prototype.ajouterJours = function(jours) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + jours);
    return date;
}

function jourTravaille(date) {
    const ANNEE = date.getFullYear();
    let joursFeries = [new Date(`${ANNEE}-01-01`), //Nouvel an
                       paques(ANNEE).ajouterJours(1), //Lundi de pâques
                       new Date(`${ANNEE}-05-01`), //1er Mai
                       paques(ANNEE).ajouterJours(39), //Jeudi de l'Ascension
                       paques(ANNEE).ajouterJours(50), //Lundi de Pentecôte
                       new Date(`${ANNEE}-07-14`), //Fête nationale
                       new Date(`${ANNEE}-08-15`), //Assomption
                       new Date(`${ANNEE}-11-01`), //Toussaint
                       new Date(`${ANNEE}-12-25`)] //Noël
    const DATESTRING = `${JOURS[date.getDay()]} ${date.getDate()} ${MOIS[date.getMonth()]} ${ANNEE}`;
    if (!!joursFeries.find(item => {return item.getTime() == date.getTime()})){
        console.log(`Le ${DATESTRING} est un jour férié.`)
    } else if (date.getDay() <= 5){
        console.log(`Oui, ${DATESTRING} est un jour travaillé.`)
    } else {
        console.log(`Non, ${DATESTRING} est un jour de week-end.`)
    }
}

jourTravaille(new Date('2022-01-01'));
jourTravaille(new Date('2022-06-09'));
jourTravaille(new Date('2022-06-25'));