const elementoNome = document.getElementById('nome');
const elementoSituacao = document.querySelector('#situacao');
const elementoImg = document.querySelector('#imagem');
let elementoBtn = document.querySelector('#alterar');


elementoBtn.addEventListener('click', () =>{
   
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/imagem2.png' 
        elementoNome.innerText = ' Whindersson fight' 
        elementoSituacao.innerText = 'Venha pra Péa!'
        elementoBtn.value = 'segundo';

    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/img/imagem3.jpg'  
        elementoNome.innerText = 'Whindersson Frouxo'
        elementoSituacao.innerText = 'Apanhou!' 
        elementoBtn.value = 'terceiro'

    } else {
        elementoImg.src = './assets/img/imagem1.png' 
        elementoNome.innerText = 'Whindersson Nunes'
        elementoSituacao.innerText = 'Parece Serio' 
        elementoBtn.value = 'primeiro'
    }
})