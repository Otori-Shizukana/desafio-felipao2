let vitorias = 0
let derrotas = 0

function main(){
    function analisandoRanque(vit, der){
        let calculo = vit - der
        return calculo
    }

    let saldoVitorias = analisandoRanque(vitorias, derrotas)

    function patentes(patente){
        
        while(patente <= 0){
            console.log(`Jogador muito ruim tem saldo de ${patente}, não pode ser classificado em nenhuma rank, por favor melhore suas habilidades para ser classificado.`)
            return
        }
        let classificao = ''
        if (patente >= 1 && patente <= 10){
            classificao = 'Ferro'
        } else if(patente >= 11 && patente <= 20){
            classificao = 'Bronze'
        } else if(patente >= 21 && patente <= 50 ){
            classificao = 'Prata'
        } else if(patente >= 51 && patente <= 80){
            classifi = 'Ouro'
        } else if(patente >= 81 && patente <= 90){
            classificao = 'Diamante'
        } else if(patente >= 91 && patente <= 100){
            classificao = 'Lendário'
        } else if(patente >= 101){
            classificao = 'Imortal'
        }
        console.log(`O Herói tem de saldo de ${saldoVitorias}, está nível de ${classificao}`)
    }
    patentes(saldoVitorias)
}

main()