// Template Strings `${}` -> pode utilizar valores dinâmicos com textos fixos.

const texto = "texto Dinamico!"
const texto2 = "Muito legal, né?"

console.log(`Este é um ${texto} ${texto2}`) // ->  template string
console.log("Este é um " + texto + texto2) // ->  Concatenação

// Este é uma opção melhor para ser compreendida em comparação com concatenação de texto, numeros e variaveis.