const notas = [10, 6.5, 8, 7.5];

let soma = 0;

notas.forEach((nota, index) => {
    soma += nota;
    console.log(index) // -> cada indice dos elementos do array
});

let media = soma / notas.length