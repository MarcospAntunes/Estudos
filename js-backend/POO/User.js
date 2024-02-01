export default class User {
    // -> Campos privados
    #nome 
    #email
    #nascimento
    #role
    #ativo
    
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    get nome() {
        // Pode ter uma lógica
        return this.#nome
    }

    get email() {
        // Pode ter uma lógica
        return this.#email
    }

    get nascimento() {
        // Pode ter uma lógica
        return this.#nascimento
    }

    get role() {
        // Pode ter uma lógica
        return this.#role
    }

    set nome(novoNome) {
        // Pode ter uma lógica
        if(novoNome === "") {
            throw new Error("Formato inválido!")
        }
        this.#nome = novoNome;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}