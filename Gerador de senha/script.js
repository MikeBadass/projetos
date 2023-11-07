document.addEventListener("DOMContentLoaded", function() {
    const tamanhoRange = document.getElementById("tamanhoRange");
    const tamanhoText = document.getElementById("tamanhoText");

    const gerarSenhaButton = document.getElementById("gerarSenha");
    const senhaGeradaContainer = document.getElementById("senhaGeradaContainer");
    const senhaGeradaText = document.getElementById("senhaGeradaText");
    const copiarSenhaButton = document.getElementById("copiarSenha");

    const toast = new bootstrap.Toast(document.querySelector('.toast'));
    
    const letraMaiusculaCheckbox = document.getElementById("letraMaiuscula");
    const letraMinusculaCheckbox = document.getElementById("letraMinuscula");
    const numerosCheckbox = document.getElementById("numeros");
    const simbolosCheckbox = document.getElementById("simbolos");

    tamanhoRange.addEventListener("input", () => {
        tamanhoText.textContent = `Tamanho: ${tamanhoRange.value}`;
    });

    gerarSenhaButton.addEventListener("click", () => {
        const tamanhoSenha = parseInt(tamanhoRange.value);
        const senhaGerada = gerarSenhaPersonalizada(tamanhoSenha);
        senhaGeradaText.textContent = senhaGerada;
        senhaGeradaContainer.style.display = "block";
    });

    copiarSenhaButton.addEventListener("click", () => {
        const senhaGerada = senhaGeradaText.textContent;
        const textArea = document.createElement("textarea");
        textArea.value = senhaGerada;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        toast.show();
    });

    function gerarSenhaPersonalizada(tamanho) {
        let caracteres = "";
        const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
        const numeros = "0123456789";
        const simbolos = "!@#$%&*_?";
        let senha = "";

        if (letraMaiusculaCheckbox.checked) {
            caracteres += letrasMaiusculas;
        }
        if (letraMinusculaCheckbox.checked) {
            caracteres += letrasMinusculas;
        }
        if (numerosCheckbox.checked) {
            caracteres += numeros;
        }
        if (simbolosCheckbox.checked) {
            caracteres += simbolos;
        }

        if (caracteres === "") {
            return "Selecione pelo menos uma opção";
        }

        for (let i = 0; i < tamanho; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(indice);
        }

        return senha;
    }
});