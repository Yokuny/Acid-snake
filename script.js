let canvas = document.getElementById('snake'); //chamando apartir do id do elemento
let context = canvas.getContext('2d'); //diz oque vai acontecer dentro do campo
let box = 32; //32px cada quadradinho jogavel
let food = {
    x:Math.floor(Math.random() * 15 + 1) * box , //criando valor random para a posição
    y:Math.floor(Math.random() * 15 + 1) * box 
}
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; //direção do movimento
function criarBackground(){
    context.fillStyle = 'lightgreen'; //cada quadradinho verde
    context.fillRect(0, 0, 16 * box, 16 * box); //16 quadradinhos. cada quadradinho com 32 altura largura
}
function criarCobrinha(){
    for(var i = 0; i < snake.length; i++){
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function limitesCanvas(){
    if(snake[0].x > (15 * box) && direction == "right") snake[0].x = 0; //se a posição no eixo x da cobra for maior que 15 posições o tamanho da caixa ela recebe 0 para voltar ao inicio
    if(snake[0].x < 0 && direction == "left") snake[0].x = (16 * box); //se a posição no eixo x da cobra for maior que 15 posições o tamanho da caixa ela recebe 0 para voltar ao inicio
    if(snake[0].y > (16 * box) && direction == "down") snake[0].y = 0; //se a posição no eixo x da cobra for maior que 15 posições o tamanho da caixa ela recebe 0 para voltar ao inicio
    if(snake[0].y < 0 && direction == "up") snake[0].y = (16 * box); //se a posição no eixo x da cobra for maior que 15 posições o tamanho da caixa ela recebe 0 para voltar ao inicio
}
function movimentação(){
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(direction == "right") snakeX += box;
    if(direction == "down") snakeY += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    snake.pop(); //tira a ponta da cauda para fazer efeito de movimento
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}
function drawFood(){
    context.fillStyle = 'red'
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
}
let jogo = setInterval(iniciarJogo, 100); //roda a função a cada 100ms