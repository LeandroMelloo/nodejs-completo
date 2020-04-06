/*
  0 Obter um usuario
  1 Obter o numero de telefone de um usuario a partir de seu Id
  2 Obter o endereco de um usuario a partir do seu Id
 */

 // importamos um módulo interno do node.js
 const util = require('util')
 const obterEnderecoAsync = util.promisify(obterEndereco)

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
  
  function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
      return callback(null, {
        rua: 'Reims',
        numero: 120,
        bairro: 'Casa Verde'
      })
    }, 1000)
  }
  
const usuarioPromise = obterUsuario()
// para manipular o sucesso utilizamos a função .then
// para manipular o erro utilizamos a função .catch
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id
          },
          telefone: result
        }
      })
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    })
  })
  .then(function (resultado) {
    console.log(`
      Nome: ${resultado.usuario.nome}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero}
      Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero} - ${resultado.endereco.bairro}
    `)
  }).catch(function (erro) {
    console.error('Erro:', erro)
  })