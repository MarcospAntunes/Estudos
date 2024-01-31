import User from "./User.js";

// Classes não são hosting.

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}.`
    }
}

const novoDocente = new Docente("Mariana", "mariana@gmail.com", "2021-01-01");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Marcos", "JavaScript"))