// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()
let producao = [] 

let dias = parseInt(prompt("Quantos dias deseja registrar? "))
for (let i = 0; i < dias; i++){
    producao.push(parseInt(prompt(`Digite a quantidade produzida no dia ${i+1}: `)))
}

let total = 0 
for (let i = 0; inicio < producao.length; i++){
    total += producao[i]
}
let media = total / producao.length

let maior = producao[0]
let menor = producao[0]
for(let i = 1; i < producao.length; i++){
    if(producao[i] > maior){
        maior = producao[i]
    }
    if(producao[i] < menor){
        menor = producao[i]
    }
}
console.log(`
    RELATÓRIO DE PRODUÇÃO 
Produções registradas: ${producao}
Total produzido: ${total}
Média diária: ${media}
Maior produção: ${maior} (dia ${producao.indexOf(maior)+1})
Menor produção: ${menor} (dia ${producao.indexOf(menor)+1})
Ordem crescente: ${producao.sort((a, b) => a - b)}
Ordem decrescente:${producao.sort((a, b) => b - a)}
 `)
 let divisao = soma / 2
    if (media >= divisao){
        console.log (`Produção estável!`)
    } else {
        console.log(`Produção abaixo do ideal.`)
    }