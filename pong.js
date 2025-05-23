const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

const keys = {};

let gameOver = false;
let gameStarted = false;
let score1 = 0;
let score2 = 0;
let winner = "";


const player1 = {
    x: 20,
    y: 200,
    width: 10,
    height: 80,
    color: 'white',
    speed: 5
};

const player2 = {
    x: 570,
    y: 200,
    width: 10,
    height: 80,
    color: 'white',
    speed: 5
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    color: 'white',
    dx: 4,
    dy: 4
};

function drawRect(p) {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.width, p.height);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.font = "20px arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Player 1: ${score1}`, 50, 30);   
    ctx.fillText(`Player 2: ${score2}`, 400, 30);    
}

function GameOver() {
    ctx.font = "40px arial ";
    ctx.fillStyle = "white";
    if (score1 === 7) {
	winner = "player 1"
	}
    else if (score2 === 7){
	winner = "player 2"
	}
    ctx.fillText(`${winner} Wins!`, 180, 300)
	
}

function StartScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "80px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("PONG", 160, 210);
    ctx.font = "40px Arial";
    ctx.fillText("Press SPACE to Start", 100, 250);
}


function movePlayers() {
    if (keys['w'] && player1.y > 0) player1.y -= player1.speed;
    if (keys['s'] && player1.y + player1.height < canvas.height) player1.y += player1.speed;

    if (keys['ArrowUp'] && player2.y > 0) player2.y -= player2.speed;
    if (keys['ArrowDown'] && player2.y + player2.height < canvas.height) player2.y += player2.speed;
}

function startGame() {
	if (keys[' ']) gameStarted = true;


}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y - 10 < 0 || ball.y + 10 > canvas.height) {
        ball.dy *= -1;
    }

    if (
        ball.x - 10 <= player1.x + player1.width && 
        ball.y >= player1.y &&
        ball.y <= player1.y + player1.height
    ) {
        ball.dx *= -1.05;
	ball.dy *= 1.05;
	ball.dy += (Math.random()-0.5 )* 2
        ball.x = player1.x + player1.width + 10;
    }

    if (
        ball.x + ball.radius >= player2.x &&
        ball.y >= player2.y &&
        ball.y <= player2.y + player2.height
    ) {
        ball.dx *= -1.05;
	ball.dy *= 1.05;
	ball.dy += (Math.random()-0.5 )* 2
        ball.x = player2.x - 10;
    }

 if (ball.x + ball.radius < 0) {
        score2++;
        if (score2 === 7) {
            gameOver = true;
        }

        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = 4;  
        ball.dy = 4;
    }

    if (ball.x - ball.radius > canvas.width) {
        score1++;
        if (score1 === 7) {
            gameOver = true;
        }

        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = -4; 
        ball.dy = 4;
    }



}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    startGame();
    if (gameStarted === false){
	StartScreen();
	requestAnimationFrame(animate);
	
	}
    if (gameStarted === true){
    if (gameOver === false){
    movePlayers();
    moveBall();
    drawRect(player1);
    drawRect(player2);
    drawBall();
      }
    if (gameOver === true){
    GameOver();
      }
    requestAnimationFrame(animate);
	}
}

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

animate();


