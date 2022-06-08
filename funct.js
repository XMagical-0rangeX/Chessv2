function loop(){
    background()
    movingplay()
    requestAnimationFrame(loop);
}
function background(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,cnv.width,cnv.height)
    ctx.fillStyle = "black";
    for (let n = 0 ; n <=700 ; n+=200){
        for (let y = 0; y <= 700; y+=100){
            let t = 0
            if(y === 100 ||y === 300 || y === 500 || y === 700){
                t = 100;
            } else {
                t = 0;
            }
        ctx.fillRect(n+t,y,100,100);
    }}
}
function movingplay(){
    //player draw
    ctx.fillStyle = "cyan";
    ctx.fillRect(player.x,player.y,player.size,player.size);

    //offshoot squares
    ctx.fillStyle = "orange";
    if (fistclick){
        for (let n = player.x+135; n<=800; n+=100){
            //drawing
            ctx.fillRect(n,player.y+35,10,10);
            //mouse over
            if (mouseX>=n&&mouseX<=n+10&&mouseY>=player.y+35&&mouseY<=player.y+45){
                beez = true;
            } 
            if (moveclick && mouseX>player.x+player.size&& mouseY>player.y&&mouseY<player.y+player.size){
                let net = 0;
                if (mouseX >700){
                    net = 710;
                } else if (mouseX >600){
                    net = 610;
                } else if (mouseX >500){
                    net = 510;
                } else if (mouseX >400){
                    net = 410;
                } else if (mouseX >300){
                    net = 310;
                } else if (mouseX >200){
                    net = 210;
                } else if (mouseX >100){
                    net = 110;
                } 
                player.x=net;
                console.log(player.x);
                fistclick = false;
                moveclick = false;
            }
        }
        for (let y = player.y+135;y<=800; y+=100){
            //drawing
            ctx.fillRect(player.x+35,y,10,10);
            //mouse over
            if (mouseX>=player.x+35&&mouseX<=player.x+45&&mouseY>=y&&mouseY<=y+10){
                beez = true;
            } 
            if (moveclick && mouseY>player.y+player.size&& mouseX>player.x&&mouseX<player.x+player.size){
                let net = 0;
                if (mouseY >700){
                    net = 710;
                } else if (mouseY >600){
                    net = 610;
                } else if (mouseY >500){
                    net = 510;
                } else if (mouseY >400){
                    net = 410;
                } else if (mouseY >300){
                    net = 310;
                } else if (mouseY >200){
                    net = 210;
                } else if (mouseY >100){
                    net = 110;
                } 
                player.y=net;
                console.log(player.y);
                fistclick = false;
                moveclick = false;
            }
        }
        for (let n = player.x-65; n>=-800; n-=100){
            //drawing
            ctx.fillRect(n,player.y+35,10,10);
            //mouse over
            if (mouseX>=n&&mouseX<=n+10&&mouseY>=player.y+35&&mouseY<=player.y+45){
                beez = true;
            } 
            if (moveclick && mouseX<player.x&& mouseY>player.y&&mouseY<player.y+player.size){
                let net = 0;
                if (mouseX <100){
                    net = 10;
                }else if (mouseX <200){
                    net = 110;
                } else if (mouseX <300){
                    net = 210;
                } else if (mouseX <400){
                    net = 310;
                } else if (mouseX <500){
                    net = 410;
                } else if (mouseX <600){
                    net = 410;
                } else if (mouseX <700){
                    net = 610;
                } 
                player.x=net;
                console.log(player.x);
                fistclick = false;
                moveclick = false;
            }
        }
        for (let y = player.y-65;y>=-800; y-=100){
            //drawing
            ctx.fillRect(player.x+35,y,10,10);
            //mouse over
            if (mouseX>=player.x+35&&mouseX<=player.x+45&&mouseY>=y&&mouseY<=y+10){
                beez = true;
            } 
            if (moveclick && mouseY<player.y&& mouseX>player.x&&mouseX<player.x+player.size){
                let net = 0;
                if (mouseY <100){
                    net = 10;
                } else if (mouseY <200){
                    net = 110;
                } else if (mouseY <300){
                    net = 210;
                } else if (mouseY <400){
                    net = 310;
                } else if (mouseY <500){
                    net = 410;
                } else if (mouseY <600){
                    net = 510;
                } else if (mouseY <700){
                    net = 610;
                } 
                player.y=net;
                console.log(player.y);
                fistclick = false;
                moveclick = false;
            }
        }
    }
    
    let run = movevarX-player.x;
    let rise = movevarY-player.y
    let h = Math.sqrt(run**2+rise**2);
    //cos = mouseX/mouseY//mouseX/Math.sqrt(mouseX*mouseX+mouseY*mouseY);
    lineY = (rise/h) *100;
    lineX = (run/h) *100;



    ctx.lineWidth = 4;
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(player.x+player.size/2,player.y+player.size/2); //set draw location
    ctx.lineTo(player.x+player.size/2+Math.sin(d)*25,player.y+player.size/2+Math.cos(d)*25); // draw from current to 700, 150
    ctx.stroke(); //draw seps path
    if(ml){
        
                    d += .2
            }if(mr){
        
                    d -= .2}
}
function mousedownHandler(){
    
    if (mouseX>=player.x && mouseX<=player.x+player.size&& mouseY>=player.y&&mouseY<=player.y+player.size && !fistclick){
    fistclick = true;
    } else if (beez){
        moveclick = true;
    }else{
        fistclick = false;
        moveclick = false;
    }
    
}
function mousemoveHandler(event){
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
    //different cursor
    if (mouseX>=player.x && mouseX<=player.x+player.size&& mouseY>=player.y&&mouseY<=player.y+player.size||beez){
    cnv.style.cursor = "pointer";
    beez = false;
    } else {
    cnv.style.cursor = "default";
    }
    
    //cos = mouseX/mouseY//mouseX/Math.sqrt(mouseX*mouseX+mouseY*mouseY);
    
}
function keydownHandler(event){
    if (event.code === "KeyA"){
        LineX++
    } else if (event.code === "ArrowRight"){
        mr = true;
    } else if (event.code === "ArrowLeft"){
        ml = true;
    }
}
function keyupHandler(event){
    if (event.code === "KeyA"){
        LineX++
    } else if (event.code === "ArrowRight"){
        mr = false;
    } else if (event.code === "ArrowLeft"){
        ml = false;
    }
}