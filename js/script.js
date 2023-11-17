const form = document.getElementById("#formulario");
const spans = document.querySelectorAll('.mensagem_erro');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const inputNome = document.getElementById('nome');
inputNome.addEventListener('blur', validacaoNome);

const inputTelefone = document.getElementById('telefone');
inputTelefone.addEventListener('blur', validacaoTelefone);

const inputEmail = document.getElementById('email');
inputEmail.addEventListener('blur', validacaoEmail);

const inputMensagem = document.getElementById('mensagem');
inputMensagem.addEventListener('blur', validacaoMensagem);


// VALIDACAO CAMPO NOME

function setError(index){

    inputNome.style.border = '3px solid #E63636';

    inputTelefone.style.border = '3px solid #E63636';
   
    inputEmail.style.border = '3px solid #E63636';
 
    inputMensagem.style.border = '3px solid #E63636';

    spans[index].style.display = 'block';
    spans[index].style.padding = '5px';
    spans[index].style.color = '#E63636';
    spans[index].style.fontWeight = 'bold';

}

function removeError(index){

    inputNome.style.border = '';
    spans[index].style.display = 'none';

    inputTelefone.style.border = '';
    spans[index].style.display = 'none';

    inputEmail.style.border = ''; 
    spans[index].style.display = 'none';

    inputMensagem.style.border = '';
    spans[index].style.display = 'none';

}

// VALIDACAO CAMPO NOME

function validacaoNome(){

    const value = inputNome.value;
    if(value.length <= 3){
        setError(0)
    } else {
        removeError(0)
    }
}

// VALIDACAO CAMPO TELEFONE

function validacaoTelefone(){

    const value = inputTelefone.value;
    if(value.length <= 9){
        setError(1)
    } else {
        removeError(1)
    }
}

// VALIDACAO CAMPO EMAIL

function validacaoEmail(){

    if(!emailRegex.test(inputEmail.value)){
        setError(2)
    } else {
        removeError(2)
    }
}

// VALIDACAO CAMPO MENSAGEM

function validacaoMensagem(){

    const value = inputMensagem.value;
    if(value.length <= 20){
        setError(3)
    } else {
        removeError(3)
    }
}




