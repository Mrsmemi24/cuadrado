const figura = document.getElementById('figura');
const btnForma = document.getElementById('btnForma');
const btnColor = document.getElementById('btnColor');

btnForma.addEventListener('click', () => {
    if (figura.classList.contains('cuadrado')) {
        figura.classList.remove('cuadrado');
        figura.classList.add('circulo');
    } else {
        figura.classList.remove('circulo');
        figura.classList.add('cuadrado');
    }
});

btnColor.addEventListener('click', () => {
    if (figura.classList.contains('rojo')) {
        figura.classList.remove('rojo');
        figura.classList.add('azul');
    } else if (figura.classList.contains('azul')) {
        figura.classList.remove('azul');
        figura.classList.add('verde');
    } else if (figura.classList.contains('verde')) {
        figura.classList.remove('verde');
        figura.classList.add('rojo');
    }
});