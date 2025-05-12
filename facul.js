const botao = document.querySelector("#mostrarMensagem");
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("click",frase);

function frase(){
    const frasebotao = "SEJA BEM VINDO AO MEU PRIMEIRO SITE DA FACUL!!!";
    mensagem.innerHTML = frasebotao;
}