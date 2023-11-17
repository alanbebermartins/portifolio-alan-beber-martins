const form = document.getElementById("#formulario");
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.mensagem_erro');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

