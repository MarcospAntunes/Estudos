import User from "./User.js"

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    
    exibirInfos() {
        return `${this.nome}`
    } // Polimorfismo

    // nomeAdmin() {
    //     return `${this.#nome}` // -> Erro, pois é um campo privada
    // }

    criarCursos(nomeDoCurso, vagas) {
        return `Curso ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

