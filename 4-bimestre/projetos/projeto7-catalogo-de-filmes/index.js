// CRIE UMA LÓGICA ABAIXO
let filme1 = {
    titulo: "Tropa de Elite", 
    genero: "Ação", 
    ano: 2007, 
    avaliacao: 8
}
let filme2 = {
    titulo: "Cidade de Deus", 
    genero: "Ação e Drama", 
    ano: 2002, 
    avaliacao: 9
}
let filme3 = {
    titulo: "Que horas ela volta?", 
    genero: "Drama social", 
    ano: 2015, 
    avaliacao: 10
}
let filme4 = {
    titulo: "Central do Brasil", 
    genero: "Drama", 
    ano: 1998, 
    avaliacao: 9
}
let filme5 = {
    titulo: "Minha Mãe é uma Peça", 
    genero: "Comédia", 
    ano: 2013, 
    avaliacao: 8
}
let filme6 = {
    titulo: "O Auto da Compadecida", 
    genero: "Comédia", 
    ano: 2000, 
    avaliacao: 10
}
let filme7 = {
    titulo: "Carandiru", 
    genero: "Crime e Drama",
    ano: 2003, 
    avaliacao: 9
}
let filme8 = {
    titulo: "Ainda Estou Aqui", 
    genero: "DramaBiografico", 
    ano: 2024, 
    avaliacao: 9
}
let filme9 = {
    titulo: "Vitória",
    genero:"Drama",
    ano: 2025, 
    avaliacao: 9
}
let filme10 = {
    titulo: "Homem com H",
    genero: "Drama", 
    ano: 2024, 
    avaliacao: 8
}

// Biblioteca refatorada
const arquivoCinematografico = {
    filme1, filme2, filme3, filme4, filme5,
    filme6, filme7, filme8, filme9, filme10
}

// Lista de notas
const conjuntoNotas = [
    filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao,
    filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao
]

// Maior nota
let notaMaxima = conjuntoNotas[0]
for (let indice = 1; indice < conjuntoNotas.length; indice++) {
    if (conjuntoNotas[indice] > notaMaxima) {
        notaMaxima = conjuntoNotas[indice]
    }
}

let indiceMelhor = conjuntoNotas.indexOf(notaMaxima) + 1

// Média
let somaValores = conjuntoNotas.reduce((acc, atual) => acc + atual, 0)
let mediaFinal = somaValores / conjuntoNotas.length

// Saída
console.log(`
    === Catálogo de Filmes ===
    1. ${filme1.titulo} - ${filme1.genero}
    2. ${filme2.titulo} - ${filme2.genero}
    3. ${filme3.titulo} - ${filme3.genero}
    4. ${filme4.titulo} - ${filme4.genero}
    5. ${filme5.titulo} - ${filme5.genero}
    6. ${filme6.titulo} - ${filme6.genero}
    7. ${filme7.titulo} - ${filme7.genero}
    8. ${filme8.titulo} - ${filme8.genero}
    9. ${filme9.titulo} - ${filme9.genero}
    10. ${filme10.titulo} - ${filme10.genero}

    Filme mais bem avaliado:
    ${arquivoCinematografico["filme" + indiceMelhor].titulo} (${notaMaxima})

    Média geral das avaliações: ${mediaFinal}
`)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }
