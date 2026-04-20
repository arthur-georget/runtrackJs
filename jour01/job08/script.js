function sommeNombresPremiers(a,b){
    function estPremier(n){
        if (n <= 1){
            return false;
        }

        for (let i = 2; i < n; i++){
            if (n % i === 0){
                return false;
            }
        }
        return true;
    }
    if (!estPremier(a) || !estPremier(b)){
        return false;
    }
    else{
        return a + b;
    }
}

console.log(sommeNombresPremiers(2,3));
console.log(sommeNombresPremiers(97,23));
console.log(sommeNombresPremiers(34,47));
console.log(sommeNombresPremiers(75,67));
console.log(sommeNombresPremiers(83,73));