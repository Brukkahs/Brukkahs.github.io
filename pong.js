const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

let x = 0;
let dx = 5;
let y = 0;
let dy =1; 

const player = {
    x : 20,
    y : 20,
    color: 'blue',
    speed: 3
};

const keys = {};

const ball = {
      x: canvas.width/2,
      y: canvas.height/2,
      r: 15,
      color: 'white',
      dx: 4,
      dy: 4,

};
function drawBall(x,y,r) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
    ctx.fill();
};

function drawPlayer(){
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.fillRect(player.x,player.y,10,80);
    ctx.fill();
};

function movePlayer(){
    if(keys['ArrowDown']){
        player.y += player.speed;
    }
    if(keys['ArrowUp']){
        player.y -= player.speed;
    }
};


function animate() {
    drawBall();
    movePlayer();
    drawPlayer();

   ball.x += ball.dx;
   ball.y += ball.dy;


    if(ball.x > 600){
        ball.dx = ball.dx * -1;
    }
    if(ball.x < 0){
        ball.dx = ball.dx * -1;
    }

    if(ball.y > 480){
        ball.dy = ball.dy * -1;
    }
    if(ball.y < 0){
        ball.dy = ball.dy * -1;
    }

    requestAnimationFrame(animate);
};

function handleKeyPress(e){
    keys[e.key] = true;
};

function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawRect(player, "#fff");
      drawBall(bal);
    }

document.addEventListener('keydown', handleKeyPress);

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});
animate();
draw();
