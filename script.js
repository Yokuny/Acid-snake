let canvas = document.getElementById('snake'); //chamando apartir do id do elemento
let context = canvas.getContext('2d'); //diz oque vai acontecer dentro do campo
let box = 32; //32px cada quadradinho jogavel
let food = {
    x:Math.floor(Math.random() * 30 + 1) * box , //criando valor random para a posição
    y:Math.floor(Math.random() * 30 + 1) * box 
}
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; //direção do movimento
function criarBackground(){
    context.fillStyle = gerarCor(); //cada quadradinho verde
    context.fillRect(0, 0, 32 * box, 32 * box); //32 quadradinhos. cada quadradinho com 32 altura largura
}
function gerarCor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const color = `rgb(${r},${g},${b})`;
    return color;
}
function criarCobrinha(){
    const cor = gerarCor()
    for(var i = 0; i < snake.length; i++){
        context.fillStyle = cor ;
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function limitesCanvas(){
    if(snake[0].x > (32 * box) && direction == "right") snake[0].x = 0; //se a posição no eixo x da cobra for maior que 15 posições o tamanho da caixa ela recebe 0 para voltar ao inicio
    if(snake[0].x < 0 && direction == "left") snake[0].x = (32 * box); //se a posição no eixo x da cobra for maior que 15 posições o tamanho da caixa ela recebe 0 para voltar ao inicio
    if(snake[0].y > (31 * box) && direction == "down") snake[0].y = 0; //se a posição no eixo x da cobra for maior que 15 posições o tamanho da caixa ela recebe 0 para voltar ao inicio
    if(snake[0].y < 0 && direction == "up") snake[0].y = (32 * box); //se a posição no eixo x da cobra for maior que 15 posições o tamanho da caixa ela recebe 0 para voltar ao inicio
}
function movimentação(){
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(direction == "right") snakeX += box;
    if(direction == "down") snakeY += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //tira a ponta da cauda para fazer efeito de movimento
    }else{
        food.x = Math.floor(Math.random() * 30 + 1) * box; //modifica valor da posição da fruta
        food.y = Math.floor(Math.random() * 30 + 1) * box; 
    }
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}
function drawFood(){
    context.fillStyle = gerarCor();
    context.fillRect(food.x, food.y, box, box); //preenchendo tal posição em tal altura e largura
}
////////////////
document.addEventListener('keydown', update); //ouça teclas do Document
function update(event){ //muda a direção do movimento
    if(event.keyCode == 37 && direction != "right") direction = "left"; //muda a direção caso a teclad clicado não seja a direção contraria a direção atual na hora do click
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}
///////////////


function iniciarJogo(){
    criarBackground();
    criarCobrinha();
    limitesCanvas();
    movimentação();
    drawFood();
    for(i = 1; i < snake.length; i++){ //se o inicio do index - a cabeça - pegar no corpo, acaba
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over');
        }
    }
    let background = document.getElementById('backgroud');
    background.style.backgroundColor = gerarCor();
    let title = document.getElementById('title');
    title.style.color = gerarCor();
}
let jogo = setInterval(iniciarJogo, 50); //roda a função a cada 100ms
//mudar esse valor para meio random

