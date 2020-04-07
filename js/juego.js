let canvas;
let ctx; // Contexto
let FPS = 50;
let imgRex;

// ===============================
// Funcion Inicializar
// ===============================
function inicializar(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    imgRex = new Image(); // Objeto imagen
    imgRex.src = 'img/rexMini.png';
    // imgRex.style.width("50px");

    setInterval(function(){
        principal();
    },1000/FPS)
}

// ===============================
// PROTAGONISTA
// ===============================
let protagonista = function(x, y){
    
    this.x = x;
    this.y = y;
    this.velocidad = 3;

    this.dibuja = function(){
        ctx.drawImage(imgRex, this.x, this.y);
    }

    this.texto = function(){
        ctx.font = '30px impact';
        ctx.fillStyle = '#555555';
        ctx.fillText('X: ' + this.x, 100,100);
    }

    this.arriba = function(){
        this.y -= this.velocidad;
    }
    this.abajo = function(){
        this.y += this.velocidad;
    }
    this.izquierda = function(){
        this.x -= this.velocidad;
    }
    this.derecha = function(){
        this.x += this.velocidad;
    }

}

// ===============================
// PERSONAJE
// ===============================
let personaje = function(x, y){
    this.x = x;
    this.y = y;

    this.dibuja = function(){
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, 50,50);
    }

    this.mueve = function(velocidad){
        
        if(this.derecha == true){
            if(this.x < 400){
                this.x += velocidad;
            }
            else {
                this.derecha = false;
            }
        }
        else {
            if(this.x > 50){
                this.x -= velocidad;
            }
            else{
                this.derecha = true;
            }
        }
    }

}

// ===============================
// Creacion de objetos personajes
// ===============================
let per1 = new personaje(10,100);
let per2 = new personaje(10,200);
let per3 = new personaje(10,350);

let prota = new protagonista(200,200);


// ===============================
// Camputar eventos de teclado
// ===============================
document.addEventListener('keydown', function(tecla){
    // console.log(tecla.keyCode);

    // Arriba
    if(tecla.keyCode == 38){
        // console.log('arriba');
        prota.arriba();
    }
    // Abajo
    if(tecla.keyCode == 40){
        // console.log('abajo');
        prota.abajo();
    }
    // Izquierda
    if(tecla.keyCode == 37){
        // console.log('izquierda');
        prota.izquierda();
    }
    // Derecha
    if(tecla.keyCode == 39){
        // console.log('derecha');
        prota.derecha();
    }

})


// ===============================
// Funcion borrar canvas
// ===============================
function borrarCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}


// ===============================
// Funcion Principal
// ===============================
function principal(){
    borrarCanvas();
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();

    per1.mueve(1);
    per2.mueve(3);
    per3.mueve(7);

    prota.dibuja();
    prota.texto();

    // console.log('Putos');
}





