const botoes = document.querySelectorAll(".botao");
const textos=document.querySelectorAll(".aba-conteudo")
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");

    }
}

const contadores = document.querySelectorAll("contador");
const tempoObjetivo1 = new Date("2024-12-31T00:00:00");
let tempoAtual = new Date ()
contadores[0].textcontent = tempoObjetivo1;

let tempoFinal = tempoObjetivo1 - tempoAtual;
let segundos = tempoFinal/1000;
let minutos = segundos/60;
let horas = minutos/60;
let dias = horas/24;