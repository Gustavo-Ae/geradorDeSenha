let barrinha = document.querySelector("#slider");

let tamanhoSenha = document.querySelector("#valor");

let senha = document.querySelector("#password");

let containerSenha = document.querySelector("#container-password");

let conjuntoCaracteres = "qwertyuiopasdfgjhklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM!@#$%123456789";

let novaSenha = "";

tamanhoSenha.innerHTML = barrinha.value;

slider.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha(){
    let senhaGerada = "";

    for(let i = 0, tamanhoCaracteres = conjuntoCaracteres.length;i < barrinha.value;++i){
       senhaGerada += conjuntoCaracteres.charAt(Math.floor(Math.random() * tamanhoCaracteres));
    }

    containerSenha.classList.remove("hide");
    senha.innerHTML = senhaGerada;
    novaSenha = senhaGerada;

}

function copiarSenha(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!");
}