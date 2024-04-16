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
const contadores=document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-04-25T00:00:00");

contadores[0].textContent =calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1) {

    let tempoAtual = new Date;
    let tempoFinal = tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos/ 60);
    let horas = Math.floor(minutos/ 60);
    let dias = Math.floor(horas/ 24);
    segundos %=60;
    minutos %=60;
    horas %=24;

    return dias +"dias"+ "horas"+minutos+"minutos"+"segundos";
}