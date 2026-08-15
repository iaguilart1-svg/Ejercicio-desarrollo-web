//Factorial Enunciado: Calcular el factorial de un número.
let n: number = parseInt(prompt("ingresa un numero")!);
let fact: number =1;
for(let i=1; i<=n; i++) fact *= i;
console.log(fact);
