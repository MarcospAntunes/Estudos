import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";

const novoUser = new User("Marcos", "marcos@gmail.com", "02-10-2003");
// novoUser.#nome = "Antunes" // -> erro

console.log(novoUser);
console.log(novoUser.exibirInfos());
console.log(User.prototype.isPrototypeOf(novoUser)); // -> true

const novoAdmin = new Admin("Juliana", "juliana@gmail.com", "2021-01-01");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCursos("javascript", "1"));

const novoDocente = new Docente("Mariana", "mariana@gmail.com", "2021-01-01");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Marcos", "JavaScript"))