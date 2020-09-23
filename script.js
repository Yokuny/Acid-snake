let canvas = document.getElementById('snake'); //chamando apartir do id do elemento
let context = canvas.getContext('2d'); //diz oque vai acontecer dentro do campo
let box = 32; //32px cada quadradinho jogavel
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}
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
criarBackground();
criarCobrinha();