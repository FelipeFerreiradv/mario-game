const mario = document.querySelector('.mario');
const pipeStop = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const jump = () =>{
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    },500);
} //pulo do mario


//loop de acabar o jogo ou não
const loop = setInterval(() =>{
    const coinAudio = document.querySelector('.audio-coin');
    const pipePosition = pipeStop.offsetLeft;
    const pipePositionRight = window.getComputedStyle(pipeStop).right.replace('px', '');
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const gameAudio = document.querySelector('.audio-game-over');
    const gameCoin = document.querySelector('.coin-icon');
    let CoinContagem = document.querySelector('.p-contagem');
    CoinContagem.value = 0;
    CoinContagem.innerHTML = `+${CoinContagem.value}`
    pontuaçao.innerHTML = `${pipePositionRight}`
    //console.log(pipePosition)
    //console.log(marioPosition)
    if(pipePosition <= 150 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/game-over.png';
        mario.style.width = '80px';
        
        gameOver.style.display = 'block';
        gameAudio.style.display = 'block';
    }
    if(marioPosition > 80){
        CoinContagem.value = 4;
        gameCoin.style.display = 'block';
        coinAudio.style.display = 'block'
    }else{
        gameCoin.style.display = 'none';
        coinAudio.style.display = 'none';
    }
},10);

document.addEventListener('keydown', jump); //tecla para pulo

//botões de aumentar a velocidade ou diminuir
let pipe = document.querySelector('.pipe');
let avançar = document.querySelector('.velocidade-aumentar');
let diminuir = document.querySelector('.velocidade-diminuir');
let pontuaçao = document.querySelector('.pontuação');

avançar.addEventListener('click', function(){
    pipe.style.animation = 'pipe-animation 1s .5s infinite linear';
    /*setTimeout(() => {
        pipe.style.animation = 'pipe-animation 2s infinite linear';
    },10000);*/
});

diminuir.addEventListener('click', () =>{
    pipe.style.animation = 'pipe-animation 2s infinite linear'
})