let canvas = document.getElementById('snake'); //chamando apartir do id do elemento
let context = canvas.getContext('2d'); //diz oque vai acontecer dentro do campo
let box = 32; //32px cada quadradinho jogavel
function criarBackground(){
    context.fillStyle = 'lightgreen'; //cada quadradinho verde
    context.fillRect(0, 0, 16 * box, 16 * box); //16 quadradinhos. cada quadradinho com 32 altura largura
}
criarBackground();