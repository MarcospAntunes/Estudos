// -> Set (conjunto) aceita diversos metodos que não estão presentes no array

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesUnicos = new Set(nomes); // -> Remove elementos repetidos e retorna um Set (conjunto === {any})

const nomesUnicosSemSet = [...nomesUnicos] // -> Retorna uma lista ao inves do set

const direto = [...new Set(nomes)] // -> Irá ter o mesmo resultado que a costante nomesUnicosSemSet

