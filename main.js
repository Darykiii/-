const botoes = document.querySelectorAll(".botao");
const text = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const botoes = document = new Date(".2024-04-25");

contadores[0].textContent =tempoObjetivo1;

for(let i=0; i <botoes.leosngth;i++){
botoes[i].onclick = function(){

        for(let j=0; j <botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}    