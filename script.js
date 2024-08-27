const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em que tipo de ambiente o duende verde australiano prefere estabelecer sua residência?",

        alternativas: [
            {
                texto: "Em uma caverna escura e misteriosa, onde pode se esconder das criaturas da floresta ",
                afirmacao: "O duende verde australiano prefere morar em uma fazenda mágica, onde ele pode cuidar de plantações encantadas e dedicar seu tempo a explorar ou criar poções. Este ambiente é ideal para ele, pois combina seu amor pela magia com seu desejo de viver em um lugar vibrante e cheio de vida."
            },
            {
                texto: "Em uma fazenda mágica, repleta de plantas encantadas e animais fantásticos",
                afirmacao: "O duende verde australiano prefere morar em uma fazenda mágica, onde ele pode cuidar de plantações encantadas e dedicar seu tempo a explorar ou criar poções. Este ambiente é ideal para ele, pois combina seu amor pela magia com seu desejo de viver em um lugar vibrante e cheio de vida."
            }
        ]
    },
    {
        enunciado: "Qual é a principal ocupação do duende verde australiano em seu dia a dia?",
        alternativas: [
            {
                texto: "Ele dedica seu tempo a cuidar das plantações mágicas, garantindo que tudo cresça saudável e cheio de magia  ",
                afirmacao: "O duende verde australiano prefere morar em uma fazenda mágica, onde ele pode cuidar de plantações encantadas e dedicar seu tempo a explorar ou criar poções. Este ambiente é ideal para ele, pois combina seu amor pela magia com seu desejo de viver em um lugar vibrante e cheio de vida."
            },
            {
                texto: "Ele vive recluso como um eremita na floresta, evitando qualquer contato com o mundo exterior  ",
                afirmacao: "O duende verde australiano prefere morar em uma fazenda mágica, onde ele pode cuidar de plantações encantadas e dedicar seu tempo a explorar ou criar poções. Este ambiente é ideal para ele, pois combina seu amor pela magia com seu desejo de viver em um lugar vibrante e cheio de vida."
            }
        ]
    },
    {
        enunciado: "Como o duende verde australiano prefere passar seu tempo livre, quando não está ocupado com suas tarefas diárias?",
        alternativas: [
            {
                texto: "Ele gosta de explorar cada canto da fazenda mágica, descobrindo novos segredos e maravilhas ",
                afirmacao: "O duende verde australiano prefere morar em uma fazenda mágica, onde ele pode cuidar de plantações encantadas e dedicar seu tempo a explorar ou criar poções. Este ambiente é ideal para ele, pois combina seu amor pela magia com seu desejo de viver em um lugar vibrante e cheio de vida."
            },
            {
                texto: "Ele se dedica a preparar poções mágicas na fazenda, experimentando novas combinações de ingredientes ",
                afirmacao: "O duende verde australiano prefere morar em uma fazenda mágica, onde ele pode cuidar de plantações encantadas e dedicar seu tempo a explorar ou criar poções. Este ambiente é ideal para ele, pois combina seu amor pela magia com seu desejo de viver em um lugar vibrante e cheio de vida."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "e entao Sofia ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
