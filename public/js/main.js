const image = document.getElementById('image');
const text = document.getElementById('text');
let currentIndex = 0;

const textList = [
    { imageSrc: 'images/ng-gas.JPG', textContent: 'Confeccionados com materiais padrões (Octanorm) ou vidro, o Stand do tipo Padrão, traz ao nosso cliente a possibilidade de trabalhar em uma feira ou evento de forma simples e eficaz.' },
    { imageSrc: 'images/web-spot.JPG', textContent: 'Possui uma combinação de elementos construídos e padrões, apresentando versatilidade em sua criação, agilidade na sua montagem e personalização conforme a necessidade do cliente.' },
    { imageSrc: 'images/viraj.JPG', textContent: 'Com seus formatos, materiais e cores, cada estrutura é cuidadosamente projetada para ser única e sob medida para o evento em questão, garantindo a certeza de uma presença marcante e memorável.' },
];

function updateContent() {
    const currentText = textList[currentIndex];
    image.src = currentText.imageSrc;
    text.textContent = currentText.textContent;
}

const buttons = document.querySelectorAll('.option');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.classList.remove('clicked');
      }
    });
    button.classList.add('clicked');
  });
});

updateContent();

