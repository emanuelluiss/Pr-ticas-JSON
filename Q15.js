let comprarVeiculo = (veiculos) => {
    switch (veiculos) {
        case 'Hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'Sedan':
            console.log('Tem certeza que não prefere esse modelo?')
            break
        case 'Motocicleta':
            console.log('Tem certeza que não prefere esse modelo?')
            break
        case 'Caminhonete':
            console.log('Tem certeza que não prefere esse modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}
comprarVeiculo('Hatch')
comprarVeiculo('Sedan')
comprarVeiculo('Motocicleta')
comprarVeiculo('Caminhonete')
comprarVeiculo('Avião')