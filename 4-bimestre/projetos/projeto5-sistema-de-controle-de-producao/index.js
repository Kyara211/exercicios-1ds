// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

let diaAtual = 1
let continuar = ""
let acumulado = 0
let historico = ""

do {
  let metaTurno = parseInt(prompt("Quantas peças devem ser produzidas no turno? "))
  let producao = 0

  for (let i = 1; i <= metaTurno; i++) {
    producao = i
    console.log(`Peça ${i} produzida com sucesso.`)
  }

  acumulado += producao
  console.log(`Dia ${diaAtual}: ${producao} peças produzidas.`)

  if(producao == metaTurno){
    console.log("Meta alcançada!")
  }else{
    console.log("Meta não alcançada!")
  }
  historico += `Dia ${diaAtual}: ${producao} peças produzidas\n`
  diaAtual++

  continuar = prompt("Deseja simular outro turno? (S/N) ").toLowerCase()
} while (continuar === "s")
console.log("Resumo dos dias anteriores:")
console.log(historico)
console.log(`Total geral: ${acumulado}`)
console.log("Encerrando sistema de produção...")