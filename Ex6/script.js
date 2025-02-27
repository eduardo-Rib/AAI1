function getNumbers(conta){
    let number = conta.match(/\d+/g)
    return number ? number.map(Number) : []
}

function getOperacao(conta){
    let index
    let n = 0
    for (let i = 0; i <= conta.length; i++){
        if ((conta[i] === '+')||(conta[i] === '-')||(conta[i] === '*')||(conta[i] === '/')){
            index = i
            n++
        }
    }
    if (n === 1){
        return conta[index]
    }
    return ''
}

function calcular() {
    let conta = document.getElementById("conta").value
    let numbers = getNumbers(conta)
    let operacao = getOperacao(conta)

    if ((numbers.length === 2)&&(operacao != '')){
        let resultado;
        switch (true) {
            case (operacao === '+'):
                resultado = numbers[0] + numbers[1]
                break
            case (operacao === '-'):
                resultado = numbers[0] - numbers[1]
                break
            case (operacao === '*'):
                resultado = numbers[0] * numbers[1]
                break
            case (operacao === '/'):
                resultado = numbers[0] / numbers[1]
                break
        }
        document.getElementById("resultado").innerText = `${numbers[0]} ${operacao} ${numbers[1]} = ${resultado}`
    }else{
        document.getElementById("resultado").innerText = `entrada invalida`
    }
}