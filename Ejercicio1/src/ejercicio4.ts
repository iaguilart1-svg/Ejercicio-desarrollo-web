//4. Mayor de 10 números Enunciado: Leer 10 números y mostrar el mayor.
let mayor: number = Number.MIN_VALUE;
for(let i=0; i<10; i++) {
let x: number = parseInt(prompt("ingre un numero")!);
if (x > mayor) mayor = x;
}
console.log(mayor);
