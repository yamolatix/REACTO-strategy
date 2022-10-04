/* let arreglo = [2, 4, 5, 9];
let numero = 14; */

let arreglo = [2, 4, 5, 9];
let numero = 12;

// Solución si tenemos el arreglo ordenado.

function sumArray(arr, num) {

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];

        if (sum === num) return true;

        else if (sum < num) start++

        else end--
    }
    return false
}

//Solución menos óptima. Puede llegar a funcionar un poco más si el arreglo está desordenado.
/* function sumArray(arr, num) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === num) return true
        }
    }
    return false
} */

console.log(sumArray(arreglo, numero))