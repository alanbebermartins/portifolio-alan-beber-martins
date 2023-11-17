const form = document.getElementById("#formulario");
const inputNome = document.getElementsByClassName(".dado_pessoal__nome");
const inputTelefone = document.getElementsByClassName(".dado_pessoal__contato");
const inputEmail = document.getElementsByClassName(".dado_pessoal__email");
const inputTextArea = document.getElementsByClassName(".dado_pessoal__mensagem");

form.addEventListener("submit", (event) => {

    event.preventDefault();
    console.log('Deu certo')

    // verifica se o nome está vazio

    if(inputNome.value <= 3){
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
