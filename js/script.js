import validaNome from "./valida-nome.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    // campo.addEventListener("invalid", evento => event.preventDefault());
})

function verificaCampo(campo){
    if(campo.name == "nome" && campo.value.length >= 3){
        validaNome(campo);
    }

}


















