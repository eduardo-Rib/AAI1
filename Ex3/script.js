function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todas as notas!";
        return;
    }

    let media = nota1 * 0.2 + nota2 * 0.5 + nota3 * 0.3;
    let classificacao = "";

    if (media >= 9) {
        classificacao = "A";
    } else if (media >= 8) {
        classificacao = "B";
    } else if (media >= 7) {
        classificacao = "C";
    } else if (media >= 6) {
        classificacao = "D";
    } else if (media >= 5) {
        classificacao = "E";
    } else {
        classificacao = "F";
    }

    document.getElementById("resultado").innerText = 
        `A média do aluno é = ${media.toFixed(2)} e a sua classificação é ${classificacao}`;
}