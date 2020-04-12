const R1 = 'Academia'
const R2 = 'Colegio'

function condicional(valor) {
    if(valor == R1) {
        console.log('Academia')
    } else if (valor == R2){
        console.log('Colegio')
    } else {
        console.log('Não foi possivel identificar sua escolha!')
    }
}

condicional('R3')



