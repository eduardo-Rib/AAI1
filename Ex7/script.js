function converterData() {
    let data = document.getElementById("data").value.trim()
    
    let meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ]

    let partes = data.split("/")

    if (partes.length !== 3) {
        document.getElementById("resultado").innerText = "Formato inválido! Use dd/mm/aaaa."
        return;
    }

    let dia = parseInt(partes[0])
    let mes = parseInt(partes[1]) - 1
    let ano = parseInt(partes[2])

    if (mes < 0 || mes > 11 || ano < 1) {
        document.getElementById("resultado").innerText = "Mês ou ano inválido!"
        return;
    }

    let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (mes === 1 && ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)) {
        diasPorMes[1] = 29
    }

    if (dia < 1 || dia > diasPorMes[mes]) {
        document.getElementById("resultado").innerText = "Dia inválido para o mês informado!"
        return
    }

    document.getElementById("resultado").innerText = `${dia} de ${meses[mes]} de ${ano}`
}