const board = document.getElementById("mainBoard");

const ctx = board.getContext('2d');
let startX = 0;
let startY = 100;
let edx = 1;
let edy = 0;
let enemyRadius = 30;

const enemies = [];

function drawEnemy() {
    enemies.push({ x: startX, y: startY, hits: 2, path: 1, dx: 1, dy: 0 });
}
function drawEnemies(lvlNum) {
    for (let i = 0; i < Math.ceil(5 * ((lvlNum + 4) * 0.50 )); i++) {
        setTimeout(drawEnemy, 5000);
    }
}

function draw() {
    ctx.clearRect(0, 0, board.width, board.height);
    drawEnemies(1);
}