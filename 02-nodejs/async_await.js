/*
  0 Obter um usuario
  1 Obter o numero de telefone de um usuario a partir de seu Id
  2 Obter o endereco de um usuario a partir do seu Id
 */

function obterUsuario() {
  // reject(erro) => quando der erro passamos o erro pra dentro dele.
  // resolve(dados) => quando der sucesso retorna os dados do BD.
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: 'Leandro Mello',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}
  
function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        numero: 11990120911,
        ddd: 11
      })
    }, 1000)
  })
}
  
function obterEndereco(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        rua: 'Reims',
        numero: 120,
        bairro: 'Casa Verde'
      })
    }, 1000)
  })
}

main()
async function main() {
  try {
    
    console.time('medida-promise')
    const usuario = await obterUsuario()
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ])
    
    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log(`
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd}) ${telefone.numero}
      Endereço: ${endereco.rua}, ${endereco.numero} - ${endereco.bairro}
    `)
    console.timeEnd('medida-promise')

  } catch (error) {
    console.error(`Error: ${error}`)
  }
}
