/*
  0 Obter um usuario
  1 Obter o numero de telefone de um usuario a partir de seu Id
  2 Obter o endereco de um usuario a partir do seu Id
 */

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Leandro Mello',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      numero: 11990120911,
      ddd: 11
    })
  }, 1000)
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

function resolverUsuario(erro, usuario) {
  console.log(`Usuario - ${usuario}`)
}

obterUsuario(function resolverUsuario(erro, usuario) {
  // no Javascript tudo que for null || '' ou "" (vazio) || 0 === FALSE
  if (erro) {
    console.error(`Deu erro em Usuario - ${erro}`)
    return
  }
  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
    if (erro1) {
      console.error(`Deu erro em Telefone - ${erro1}`)
      return
    }
    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      if (erro2) {
        console.error(`Deu erro em Endereco - ${erro2}`)
        return
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereco: Rua: ${endereco.rua}, ${endereco.numero} - ${endereco.bairro}
        Telefone: (${telefone.ddd}) ${telefone.numero}
      `)
    })
  })
})