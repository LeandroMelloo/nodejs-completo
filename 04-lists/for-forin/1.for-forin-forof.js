const service = require('./service')

async function main() {
  try {
    const resultado = await service.obterPessoas('a')
    const names = []

    console.time('For')
    for (let  i = 0; i <= resultado.results.length - 1; i++) {
      const pessoa = resultado.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('For')

    console.time('Forin')
    for (let i in resultado.results) {
      const pessoa = resultado.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('Forin')

    console.time('Forof')
    for (pessoa of resultado.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('Forof')

    console.log(`Names: `, names)

  } catch (error) {
    console.error('Error: ', error)
  }
}
main()