//REACTO 1
// Encontrar el indice de la primera aparición de un string (needle) dentro de otro (haystack).
// No se puede usar indexOf()

/* let needle = "puntual";
let haystack = "pinky"; */

let needle = "redux";
let haystack = "react-redux";

function findNeedle(need, hays) {

    for (let i = 0; i < hays.length; i++) {
        for (let j = 0; j < need.length; j++) {
            if (hays[i + j] !== need[j]) break;

            if (j + 1 === need.length) return i
        }
    }
    return -1
}

console.log(findNeedle(needle, haystack))