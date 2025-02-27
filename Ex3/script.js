function calcularFaixaEtaria() {
    let idade = document.getElementById('idade').value.trim(); 

    try {
       if (!idade) {
            throw new Error("Insira um valor!");
        }

        let classificacao;
        if ((idade >= 0)&&(idade < 15)) {
            classificacao = 'criança'
        } else if ((idade >= 15)&&(idade < 30)) {
            classificacao = 'jovem'
        } else if ((idade >= 30)&&(idade < 60)) {
            classificacao = 'adulto'
        } else {
            classificacao = 'idoso'
        }
        
        document.getElementById("resultado").innerText = `${idade} é classificado como: ${classificacao}.`
    } catch (error) {
        document.getElementById("resultado").innerText = error.message
    }
}