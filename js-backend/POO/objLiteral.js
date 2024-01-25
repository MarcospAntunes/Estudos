// Herença de protótipo

const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/10/02",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email, this.nascimento)
    }
}

const admin = {
    nome: "Marcos",
    email: "m@m.com",
    nascimento: "2003/10/02",
    role: "admin",
    ativo: true,
    criarCurso: function() {
        console.log("Curso criado!")
    }
}

user.exibirInfos();
const exibir = user.exibirInfos;
exibir(); // -> undefined undefined undefined

const exibir2 = function() {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user);
exibirNome(); // -> Juliana
exibir2(); // -> undefined


Object.setPrototypeOf(admin, user)
admin.criarCurso(); // -> Curso criado!
admin.exibirInfos(); // -> Marcos m@m.com 2003/10/02


