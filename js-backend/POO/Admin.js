import User from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    } 

    criarCursos(nomeDoCurso, vagas) {
        return `Curso ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin("Juliana", "juliana@gmail.com", "2021-01-01");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCursos("javascript", "1"));