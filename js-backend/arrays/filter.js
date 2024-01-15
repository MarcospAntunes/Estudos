const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const media = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((aluno, index) => {
    return media[index] < 7;
})

const aprovados = alunos.filter((_, index) => {
    return media[index] > 7;
})