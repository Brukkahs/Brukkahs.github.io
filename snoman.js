const canvas = document.getElementById("myCanvas1");
    const ctx = canvas.getContext("2d");
function drawCircle(x,y,r,color){
        ctx.strokeStyle = color;
    ctx.lineWidth=10;
    ctx.beginPath();
    ctx.arc(x,y,r,0,2 *  Math.PI);
    ctx.stroke();
}

function arc(x,y,r){
	ctx.strokeStyle = "#FFBB00";
    ctx.lineWidth=10;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI);
    ctx.stroke();

}
function smiley(x,y,r){
	drawCircle(x,y,r,"red");
	arc(x,y+20,(r/10)*5);
	drawCircle(x-50,y-30,(r/10)*2,"black");
	drawCircle(x+50,y-30,(r/10)*2,"black");
}

smiley(100,100,100)
smiley(250,250,100)
smiley(400,400,100)
smiley(550,550,100)
smiley(400,400,100)
smiley(120,550,100)
smiley(550,120,100)
