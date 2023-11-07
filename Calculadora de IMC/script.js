function calcularIMC() {
    const alturaCm = document.getElementById('altura').value;
    const pesoKg = document.getElementById('peso').value;
    const idade = document.getElementById('idade').value;

    if (!alturaCm || !pesoKg || !idade) {
        exibirToast();
        return; 
    }

    const alturaM = alturaCm / 100;
    const imc = pesoKg / (alturaM * alturaM);

    var imcDescricao = "";

    if (imc < 16.4) {
        imcDescricao = "Magreza";
    }
    else if (imc >= 16.4 && imc <= 25.1) {
        imcDescricao = "Normal";
    }
    else if (imc > 25.1 && imc <= 29.7) {
        imcDescricao = "Sobrepeso";
    }
    else {
        imcDescricao = "Obesidade";
    }

    const imcDescricaoText = document.getElementById("descricaoIMC");
    const resultadoContainer = document.getElementById('resultadoContainer');
    const resultadoText = document.getElementById('resultadoText');

    resultadoText.textContent = `Seu IMC é de: ${imc.toFixed(2)}`;
    imcDescricaoText.textContent = "De acordo com a Organização Mundial da Saúde, você está na categoria de: ";
    const strongTag = document.createElement("strong");
    strongTag.textContent = imcDescricao;
    imcDescricaoText.appendChild(strongTag);
    resultadoContainer.style.display = 'block';
}

function exibirToast() {
    const toast = new bootstrap.Toast(document.querySelector('.toast'));
    toast.show();

    setTimeout(function () {
        toast.hide();
    }, 2500); 
}

document.getElementById('calcularBtn').addEventListener('click', calcularIMC);