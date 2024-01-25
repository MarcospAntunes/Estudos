function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User("Marcos", "m@m.com");
console.log(novoUser.exibirInfos());

function Admin(role) {
    User.call(this, "Juliana", "j@j.com")
    this.role = role || "estudante"
}

Admin.prototype = Object.create(User.prototype);
const novoUser2 = new Admin("admin");
console.log(novoUser2.exibirInfos());
console.log(novoUser2.role);

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function() {
        return this.nome
    }
}

const novoUser3 = Object.create(user);
novoUser3.init("Marcos", "m@m.com");
console.log(novoUser.exibirInfos());
console.log(user.isPrototypeOf(novoUser3));