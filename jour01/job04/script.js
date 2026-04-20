function bisextile(année){
    if (année%100 == 0){
        if(année%400 == 0){
            return true;
        } else {
            return false;
        }
    } else if (année%4 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(`2020: ${bisextile(2020)}`)
console.log(`2024: ${bisextile(2024)}`)
console.log(`2028: ${bisextile(2028)}`)
console.log(`2000: ${bisextile(2000)}`)
console.log(`2400: ${bisextile(2400)}`)
console.log(`1900: ${bisextile(1900)}`)
console.log(`2100: ${bisextile(2100)}`)
console.log(`2200: ${bisextile(2200)}`)
console.log(`2300: ${bisextile(2300)}`)