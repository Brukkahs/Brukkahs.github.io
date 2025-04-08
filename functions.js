const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
function drawCircle(x,y){
	ctx.strokeStyle = "red";
    ctx.lineWidth=10;
    ctx.beginPath();
    ctx.arc(x,y,40,0,2 *  Math.PI);
    ctx.stroke();
    ctx.fill();
}

drawCircle(100,100);
drawCircle(200,200);
drawCircle(300,300);
drawCircle(400,400);
drawCircle(500,500);
drawCircle(600,600);

