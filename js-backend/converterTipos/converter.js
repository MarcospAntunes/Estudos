// Conversão implícita

let numero = 1;
let numeroString = "1";
const verifica = numero === numeroString; // -> false. Isso acontece pois ele compara toda a variavel, tanto seu tipo quanto seu valor.
const verifica2 = numero == numeroString; // -> true. Isso ocorre pois o valor dentro de cada variavel é igual

const soma = numero + numeroString // -> 11. Ele converteu em uma string e concateneu os valores.

// Conversão explícita

Number(numeroString) // -> converte o valor para número, caso o valor não seja um número, o valor retornado será NaN.
String(numero) // -> transforma em uma string;
