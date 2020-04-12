// exercicio_1 => calcular o valor do pagamento e retirar do valor total 30% para que possa guardar(poupança)

let P1 = 1000 // valor do 1° pagamento
let P2 = 1000 // valor do 2° pagamento

const PT = P1 + P2 // valor do pagamento total

// calcular 30% do valor total para guardar na poupança
const P = (PT * 30) / 100

// calcular o valor para gastar
const G = PT - P

// Terei disponivel para gastar R$ 1.400,00
console.log(G)
