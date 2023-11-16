const form = document.getElementById("#formulario");
const inputNome = document.getElementsByClassName(".dado__nome");
const inputTelefone = document.getElementsByClassName(".dado__contato");
const inputEmail = document.getElementsByClassName(".dado__email");
const inputTextArea = document.getElementsByClassName(".dado__mensagem");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    // verifica se o nome está vazio

    if(inputNome.value === ""){
        alert("Por favor, preencha o seu nome completo!");
        return;
    }

    // verifica se o email está preenchido e se é válido

    if(inputEmail.value === "" || !isEmailValid(inputEmail.value)){
        alert("Por favor, preencha o seu email completo!");
        return;
    }

    // verifica se o telefone está preenchido

    if(inputTelefone.value === ""){
        alert("Por favor, preencha o seu numero de telefone!");
        return;
    }


    // Se todos os campos do formulario estiverem preenchidos

    form.submit();
})


// Função que valida email

function isEmailValid(email){

    // ReGex que valida email

    const emailRegex = new RegExp(
        /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g
    )

        if(emailRegex.test(email)){
            return true
        } else {
            return false
        }
}
