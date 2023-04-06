// Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo.
//  No modo de direção “viagem”, a funcionalidade
//  a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível.
//  E caso não exista posto de gasolina, retornar -1

// A pessoa responsável por fazer a especificação do sistema informou que você terá
//  as seguintes informações: consumo médio de combustível,
//  quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

// Exemplo:
// Combustivel (em litros): 2
// Consumo médio (km/l): 8
// Postos de Gasolina (km): [2, 21, 22, 10.2]


const json = {
    "postos":[
        {
            "nome": "Posto Ipiranga",
            "distancia": 20
        },
        {
            "nome": "Posto Shell",
            "distancia": 12
        },
        {
            "nome": "Posto Dois Irmão",
            "distancia": 21
        },
        {
            "nome": "Posto DaSkinna",
            "distancia": 17
        },
    ]
}

let postosPerto = []


function pegarPostosProximos (postosGasolina,distanciaConsumo){
    postosGasolina.map((posto) => {
        const postoDistanciaFormatado = posto.distancia * 1000
        if(distanciaConsumo <= postoDistanciaFormatado){
            postosPerto.push(posto)
        }
    })
    console.log(postosPerto)
}

function proximaParada (consumoMedio, combustivel, postosGasolina) {
    let distanciaConsumo = (combustivel * 1000) * consumoMedio
    console.log(`${distanciaConsumo} metros`)

    pegarPostosProximos(postosGasolina, distanciaConsumo)
    
    if(postosPerto.length !== 0){
        let maxDistanciaPosto = postosPerto[0]
        for(let i=1; i < postosPerto.length; i++){
            if(postosPerto[i].distancia > maxDistanciaPosto.distancia){
                maxDistanciaPosto = postosPerto[i]
            }
        }
        console.log(`O posto mais distante ao seu limite de combustível é o ${maxDistanciaPosto.nome} à uma distância de ${maxDistanciaPosto.distancia}Km`)
    }
    else{
        console.log('não há nenhum posto o mais distante ao limite do seu combustível!')
    }
}


proximaParada(8,2,json.postos)
