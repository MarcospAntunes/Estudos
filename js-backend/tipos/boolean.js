// true -> verdadeiro
// false -> falso

//Existe diferença entre letras minusculas e maiusculas. Por exemplo, alura é diferente de Alura, logo essa comparação iria retornar false

const terceiro = 7;
const quarto = 7;
console.log(terceiro === quarto); // true


const primeiro = 5;
const segundo = 6;
console.log(primeiro === segundo); // false

let cadastroAtivado = false;

const senhaNoBanco = 123
const inputSenha = 12345

if(senhaNoBanco === inputSenha) {
    cadastroAtivado = true;
    // cadastro liberado
} else {
    cadastroAtivado = false;
    // cadastro bloqueado
}; 
//Neste caso irá permanecer false o valor da variável cadastroAtivado

/* Valores truthy e falsy 
    0 -> false
    1 -> true
    "" -> false

*/



