// drawing basics

//setup canvas and grapics 
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

let player = {
    x: 10,
    y: 10,
    size: 80,
},mouseX = 0,mouseY = 0,fistclick = false, beez = false,moveclick = false, LineX=0, LineY=0, movevarX = 100,movevarY = 100, d = 45, mr = false, ml = false;


document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

requestAnimationFrame(loop);