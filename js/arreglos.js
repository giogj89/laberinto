let canvas;
let ctx;
let FPS = 50;

let anchoF = 50;
let altoF = 50;

let cesped = '#34c62f';
let agua = '#4286f4';
let tierra = '#c6892f';

let escenario = [
    [0,1,0,0,2],
    [0,1,1,0,0],
    [0,0,1,1,1],
    [0,2,2,2,2],
    [2,2,2,0,0]
];

function dibujaEscenario(){
    
    let color;

    for(y=0;y<5;y++){
        for(x=0;x<5;x++){
            if(escenario[y][x]==0)
                color = cesped;
            if(escenario[y][x]==1)
                color = agua;
            if(escenario[y][x]==2)
                color = tierra;

                
                ctx.fillStyle = color;
                ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF);
            }
    }
}

function inicializar(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principal();

    setInterval(function(){
        principal();
    },1000/FPS)
}

// ===============================
// Funcion borrar canvas
// ===============================
function borrarCanvas(){
    canvas.width = 500;
    canvas.height = 500;
}


// ===============================
// Funcion Principal
// ===============================
function principal(){
    borrarCanvas();
    dibujaEscenario();
    
}