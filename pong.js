const canvas = document.getElementById("myCanvas5");
    const ctx = canvas.getContext("2d");


ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

 ctx.beginPath();
     ctx.rect(30, 30, 20, 100);
     ctx.rect(650, 500, 20, 100);
     ctx.arc(420, 400, 15, 0, 2 * Math.PI);
     ctx.fillStyle = 'white';
     ctx.fill();
     ctx.closePath(); 
