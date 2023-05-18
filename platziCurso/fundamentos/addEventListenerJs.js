const pUno = document.querySelector('p');
const h1Uno = document.querySelector('#dos');
const boton = document.querySelector('.btn');

boton.addEventListener('click', escribir);

function escribir()
{
    pUno.innerText = 'holaaaaaaa';
}