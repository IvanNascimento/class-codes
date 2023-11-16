const lista = [2, 5, 7, 9, 3, 4, 5, 6, 8, 9, 2, 4, 1, 1, 5];

//1. (25pts) Desenvolva um algoritmo que imprima todos os valores do array. Utilize laços repetitivos.
console.log("Questão 1")
lista.map((v, i) => {
    console.log(`index ${i} = ${v}`)
})

// 2. (25pts) Desenvolva um algoritmo que imprima todos os valores ímpares do array. Utilize laços repetitivos.
console.log("Questão 2")
lista.map((v, i) => {
    if (v % 2 != 0) {
        console.log(`index ${i} = ${v}`)
    }
})

// 3. (25pts) Desenvolva um algoritmo que some todos os valores do array e imprima. Utilize laços repetitivos.
let count = 0;
lista.map((v, i) => {
    count += v;
})
console.log("Questão 3")
console.log(`Soma de todos os valores da lista: ${count}`)

// 4. (25pts) Desenvolva um algoritmo que remova todos os números 9 do array. Utilize laços repetitivos.
console.log("Questão 4")
let index = 0;
console.log("Array Inicial")
console.log(lista)
while (index < lista.length) {
    if (lista[index] == 9) {
        lista.splice(index, 1);
    } else {
        index++
    }
}
console.log("Array Final")
console.log(lista)