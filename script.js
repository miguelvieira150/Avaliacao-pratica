let golsCasa = 0;
let golsVisitante = 0;

function alterarGol(time, valor) {
if (time === 'casa') {
golsCasa += valor;
document.getElementById('gols-casa').innerText = golsCasa;
} else if (time === 'visitante') {
golsVisitante += valor;
document.getElementById('gols-visitante').innerText = golsVisitante;
}
}

function zerarPlacar() {
golsCasa = 0;
golsVisitante = 0;
document.getElementById('gols-casa').innerText = 0;
document.getElementById('gols-visitante').innerText = 0;
}

const formJogo = document.getElementById('form-jogo');
const listaJogos = document.getElementById('lista-jogos');

formJogo.addEventListener('submit', function(evento) {
evento.preventDefault();

const timeA = document.getElementById('time-a').value;
const placarA = document.getElementById('placar-a').value;
const placarB = document.getElementById('placar-b').value;
const timeB = document.getElementById('time-b').value;

const resultadoTexto = `${timeA} ${placarA} x ${placarB} ${timeB}`;
