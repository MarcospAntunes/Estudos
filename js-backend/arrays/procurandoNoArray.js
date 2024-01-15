// Desestruturação de Array

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENotal(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias; // -> é o mesmo que declarar duas const para alunos e médias

        const indece = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indece];

        console.log(`Aluno: ${aluno}, media: ${mediaDoAluno}`)
    } else {
        console.log("Aluno não encontrado")
    }
}