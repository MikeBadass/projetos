function calcularTDEE() {
    const genero = document.getElementById('genero').value;
    const idade = parseFloat(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const objetivo = document.getElementById('objetivo').value;
    const atividade = document.getElementById('atividade').value;
    const gordura = parseFloat(document.getElementById('gordura').value) || 0; 

    if (genero === "" || isNaN(idade) || isNaN(altura) || isNaN(peso) || objetivo === "" || atividade === "") {
        exibirToast();
        return;
    }

    let tmb;

    if (genero === "feminino") {
        tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
    } else if (genero === "masculino") {
        tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
    }

    // Cálculo do TDEE com base no nível de atividade física
    let nivelAtividade = 0;
    switch (atividade) {
        case "sedentario":
            nivelAtividade = 1.2;
            break;
        case "leve":
            nivelAtividade = 1.375;
            break;
        case "moderado":
            nivelAtividade = 1.55;
            break;
        case "extremo":
            nivelAtividade = 1.725;
            break;
    }

    const tdee = tmb * nivelAtividade;
    
    let objetivoText = "";
    let tdeeFinal = tdee;

    switch (objetivo) {
        case "manter":
            objetivoText = "Manutenção de peso";
            tdeeFinal = tdee
            break;
        case "perdaLeve":
            objetivoText = "Perda de peso leve";
            tdeeFinal = tdee - 250;
            break;
        case "perda":
            objetivoText = "Perda de peso";
            tdeeFinal = tdee - 500;
            break;
        case "ganhosLeves":
            objetivoText = "Ganho de peso leve";
            tdeeFinal = tdee + 250;
            break;
        case "ganhos":
            objetivoText = "Ganho de peso";
            tdeeFinal = tdee + 500;
            break;
    }

    document.getElementById('resultadoText').textContent = `Sua Taxa Metabólica Basal (TMB) é de ${tmb.toFixed(2)} kcal`;
    document.getElementById('descricaoTDEE').textContent = `Você deve consumir ${tdeeFinal.toFixed(2)} kcal para ${objetivoText}.`;
    document.getElementById('resultadoContainer').style.display = "block";
}

function exibirToast() {
    const toast = new bootstrap.Toast(document.querySelector('.toast'));
    toast.show();

    setTimeout(function () {
        toast.hide();
    }, 2500); 
}

document.getElementById('calcularBtn').addEventListener('click', calcularTDEE);