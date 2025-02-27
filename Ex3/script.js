function calcularFrete() {
    let distancia = parseFloat(document.getElementById("distancia").value)
    let pecas = parseInt(document.getElementById("pecas").value)
    let regiao = parseInt(document.getElementById("regiao").value)
    let rastreamento = document.getElementById("rastreamento").value.toUpperCase()


    try{
        if (isNaN(distancia) || isNaN(pecas) || isNaN(regiao) || isNaN(rastreamento)) {
            throw new Error("Insira um valor!");
        }

        let taxaRastreamento = 0
        if (rastreamento === "S") {
            taxaRastreamento = 200
        }

        let valorFretePeca, desconto
        switch (regiao) {
            case 1: 
                valorFretePeca = 1.00
                desconto = 0.10
                break
            case 2: 
                valorFretePeca = 1.20
                desconto = 0.12
                break
            case 3:
                valorFretePeca = 1.30
                desconto = 0.13
                break
            default:
                alert("Região inválida! Escolha 1, 2 ou 3.")
                return
        }

        let valorFretePecas
        if (pecas <= 1000) {
            valorFretePecas = pecas * valorFretePeca
        } else {
            let excesso = pecas - 1000
            let valorComDesconto = valorFretePeca * (1 - desconto)
            valorFretePecas = (1000 * valorFretePeca) + (excesso * valorComDesconto)
        }

        let valorFreteKM = distancia * 1
        let totalFrete = valorFretePecas + valorFreteKM + taxaRastreamento

        document.getElementById("taxaRastreamento").innerText = `Taxa do rastreamento: R$ ${taxaRastreamento.toFixed(2)}`
        document.getElementById("valorFretePecas").innerText = `Valor do frete pelas peças: R$ ${valorFretePecas.toFixed(2)}`
        document.getElementById("valorFreteKM").innerText = `Valor do frete por quilômetro: R$ ${valorFreteKM.toFixed(2)}`
        document.getElementById("totalFrete").innerText = `Total do frete: R$ ${totalFrete.toFixed(2)}`
    } catch (error) {
        document.getElementById("taxaRastreamento").innerText = error.message;
    }
}