function calcularIMC() {
    let nome = document.getElementById("nome").value;
    let alturaCm = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    
    try {
        let alturaM = parseFloat(alturaCm) / 100;
        let pesoFloat = parseFloat(peso);
        
        if (isNaN(alturaM) || isNaN(pesoFloat)) {
            throw new Error("Insira um valor!");
        }
        
        let imc = pesoFloat / (alturaM ** 2);
        
        let classificacao;
        if (imc < 16) {
            classificacao = "Baixo peso muito grave";
        } else if (imc <= 16.99) {
            classificacao = "Baixo peso grave";
        } else if (imc <= 18.49) {
            classificacao = "Baixo peso";
        } else if (imc <= 24.99) {
            classificacao = "Peso normal";
        } else if (imc <= 29.99) {
            classificacao = "Sobrepeso";
        } else if (imc <= 34.99) {
            classificacao = "Obesidade grau I";
        } else if (imc <= 39.99) {
            classificacao = "Obesidade grau II";
        } else {
            classificacao = "Obesidade grau III";
        }
        
        document.getElementById("resultado").innerText = `${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`;
    } catch (error) {
        document.getElementById("resultado").innerText = error.message;
    }
}