// Função de criação da paleta de cores com atribuição dinâmica de div's e classe's e selected iniciando na cor preta.
function colorPallet() {
  const paletaDeCores = document.querySelector('#color-palette');
  const optionOfColors = ['black', 'green', 'red', 'yellow'];
  for (let i = 0; i < optionOfColors.length; i += 1) {
    const paleta = document.createElement('div');
    paleta.classList.add('color');
    paleta.style.backgroundColor = optionOfColors[i];
    paletaDeCores.appendChild(paleta);
    if (i === 0) {
      paleta.classList.add('selected');
    }
  }
}

// Função desenvolvida com suporte do Leonardo Vogel XP A para remover e colocar o selected nas cores selecionadas.
function selectedColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
document.querySelector('#color-palette').addEventListener('click', selectedColor);

// Função para criar de forma dinâmica a paleta de cores.
// Foi necessário suporte do Leonardo Vogel XP A para agrupar corretamente o quadro de pixels.
function Pallet() {
  const pixels = document.getElementById('pixel-board');
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixels.appendChild(pixel);
} for (let i = 0; i < 25; i += 1) {
  Pallet();
}
colorPallet();

// Função desenvolvida com suporte do Gabriel Julio XP B para capturar a cor selecionada na paleta e aplicá-la ao quadro de pixels.
// Para desenvolvêla usamos dois métodos informados pelo Gabriel, getComputedStyle("Usado para retornar os valores de todas as propriedades CSS do elemento")
// e em seguida o getPropertyValue(Permite retornar uma propriesdade CSS em específico).
// ref from https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
// ref from https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
function colorPixel(e) {
  const colorP = document.querySelector('.selected');
  e.target.style.backgroundColor = getComputedStyle(colorP).getPropertyValue('background-color');
}
document.querySelector('#pixel-board').addEventListener('click', colorPixel);

// Função para apagar os pixels com o botão limpar.
function cleanBoard() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', cleanBoard);
  const cleanAll = document.querySelectorAll('.pixel');
  for (let i = 0; i < cleanAll.length; i += 1) {
    cleanAll[i].style.backgroundColor = 'white';
  }
}
cleanBoard();
