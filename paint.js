"use strict";

const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();       //distancia entre left y top con un punto(o esquina sup izq del cuadrado)
                                                  // diferencia entre la pagina y el canvas, para detectar justo el punto
                                                  //algo asi como relative y absolute 
const ctx = canvas.getContext("2d");

let painting, color, linewidth;
let difX, difY;

canvas.addEventListener("mousedown", e => {
    difX = e.clientX - dif.left;               //coordenada en x del mouse - diferencia entre canvas y el principio de la pantalla
    difY = e.clientY - dif.top;               //coordenada en y del mouse - diferencia entre canvas y el principio de la pantalla
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("rango").value;
    ctx.beginPath();
})

canvas.addEventListener("mousemove", e => {
    if(painting){
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
})

canvas.addEventListener("mouseup", () => {
    ctx.closePath();
    painting = false;
})

const dibujar = (x1, y1, x2, y2) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(x1, y1);        //mover el apd a la posicion anterior
    ctx.lineTo(x2, y2);        //crear la nueva posicion
    ctx.stroke();              //se dibuja
}