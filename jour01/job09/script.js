const Order = {
    ASC: "asc",
    DESC: "desc"
}

function sort(numbers, order){
    let numbersToSort = numbers.slice();
    let sortedNumbers = [];
    if (order === Order.DESC){
        let maxNumber = numbersToSort[0];
        for (number of numbersToSort){
            if (number > maxNumber){
                maxNumber = number;
            }
        }
        numbersToSort.splice(numbersToSort.indexOf(maxNumber),1);
        sortedNumbers.push(maxNumber);
        if (numbersToSort.length > 1){
            return sortedNumbers.concat(sort(numbersToSort,order));
        } else {
            return numbersToSort[0];   
        }
    } else if (order === Order.ASC){
        let minNumber = numbersToSort[0];
        for (number of numbersToSort){
            if (number < minNumber){
                minNumber = number;
            }
        }
        numbersToSort.splice(numbersToSort.indexOf(minNumber),1);
        sortedNumbers.push(minNumber);
        if (numbersToSort.length > 1){
            return sortedNumbers.concat(sort(numbersToSort,order));
        } else {
            return numbersToSort[0];   
        }
    }
}

let numbers = [0,34,12,87,23,645,3,54,1,8765,54]
console.log(sort(numbers, Order.DESC));
console.log(sort(numbers, Order.ASC));