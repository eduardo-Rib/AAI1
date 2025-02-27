function calculaSalario() {
    let codigo = parseInt(document.getElementById("codigo").value)
    let horas = parseFloat(document.getElementById("horas").value)
    let turno = document.getElementById("turno").value
    let categoria = document.getElementById("categoria").value.toLowerCase()
    let salario = parseFloat(document.getElementById("salario").value)

    try{

        if (isNaN(codigo) || isNaN(horas) || isNaN(salario)) {
            throw new Error("Insira um valor!")
        }

        let valorHoras = 0;
        if (categoria === 'g'){
            if ((turno === 'm')||(turno === 'v')){
                valorHoras = salario*0.04 
            }
        }else{
            if (turno === 'n'){
                valorHoras = salario*0.02
            }else{
                valorHoras = salario*0.01
            }
        }

        let salarioBruto = horas*valorHoras

        let alimentacao  = 0
        if (salarioBruto <= 800){
            alimentacao = salarioBruto*0.25
        }else if (salarioBruto <= 1200){
            alimentacao = salarioBruto*0.20
        }else{
            alimentacao = salarioBruto*0.15
        }

        document.getElementById("codigoSaida").innerText = `Código: ${codigo}`
        document.getElementById("horasSaida").innerText = `Horas: ${horas}`
        document.getElementById("valorHoras").innerText = `Valor por hora: R$ ${valorHoras.toFixed(2)}`
        document.getElementById("salarioBruto").innerText = `Salário Bruto: R$ ${salarioBruto.toFixed(2)}`
        document.getElementById("alimentacao").innerText = `Vale alimentação: R$ ${alimentacao.toFixed(2)}`
        document.getElementById("salarioFinal").innerText = `Salário Final: R$ ${(salarioBruto + alimentacao).toFixed(2)}`
    }catch (error) {
        document.getElementById("codigoSaida").innerText = error.message;
    }
}