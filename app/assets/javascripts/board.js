const board = document.getElementById("mainBoard");
const score = document.getElementById("infoBoard");

const ctx = board.getContext('2d');
const ctz = score.getContext('2d');
// Info Board has a height of 100 and width 800
// Main board has a width of 800 and height 600

let healthPoints = 10;
let expPoints = 50;
let level = 1;


function drawHealth() {
    ctz.font = "20px Arial Black";
    ctz.fillStyle = "black";
    ctz.fillText("Health: " + healthPoints, 670, 60);
}
function drawLevel() {
    ctz.font = "28px Arial Black";
    ctz.fillStyle = "black";
    ctz.fillText("Level " + level, 335, 60);
}
function drawExp() {
    ctz.font = "20px Arial Black";
    ctz.fillStyle = "black";
    ctz.fillText("EXP: " + expPoints, 540, 60);
}
function drawStats() {
    drawHealth();
    drawLevel();
    drawExp();
}


//Paths need a border!
function drawPath() {
    //path 1
    ctx.beginPath();
    ctx.rect(0, 80, 650, 50);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(0, 77, 700, 3);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(0, 130, 650, 3);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //path 2
    ctx.beginPath();
    ctx.rect(650, 80, 50, 120);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(647, 130, 3, 70);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(700, 77, 3, 174);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    //path 3
    ctx.beginPath();
    ctx.rect(100, 200, 600, 50);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(100, 197, 550, 3);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(150, 250, 553, 3);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //path 4
    ctx.beginPath();
    ctx.rect(100, 200, 50, 200);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(97, 197, 3, 255);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(150, 250, 3, 150);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //path 5
    ctx.beginPath();
    ctx.rect(100, 400, 600, 50);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(97, 450, 553, 3);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(150, 398, 550, 3);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //path 6
    ctx.beginPath();
    ctx.rect(650, 450, 50, 160);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(647, 450, 3, 160);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(700, 398, 3, 220);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

}

function drawTowerPos() {
    //tower 1
    ctx.beginPath();
    ctx.rect(50, 20, 50, 50);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //tower 2
    ctx.beginPath();
    ctx.rect(50, 140, 50, 50);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //tower 3
    ctx.beginPath();
    ctx.rect(580, 140, 50, 50);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //tower 4
    ctx.beginPath();
    ctx.rect(160, 260, 50, 50);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //tower 5
    ctx.beginPath();
    ctx.rect(160, 340, 50, 50);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //tower 6
    ctx.beginPath();
    ctx.rect(580, 460, 50, 50);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}







//FOR ENEMY FILE!!!!!!!!!!!!!!!!!





let startX = 0;
let startY = 105;
let edx = 1.5;
let edy = 0;
let enemyRadius = 20;
let start = true;
let healthUp = (level * 0.5);
let enemies = [{x: 0, y: 105, path: 1, dx: 1.5, dy: 0, health: 1, dmg: 0 }];

function enemy() {
    enemies.push({ x: 0, y: 105, path: 1, dx: 1.5, dy: 0, health: 10, dmg: 1 });
}
let easyEnemy = 1000;
let hardEnemy = 80;


function addEnemies(lvlNum) {
    for (let i = 0; i < Math.floor(4 * ((lvlNum + 2) * 0.50)); i++) {
            setTimeout(enemy, 800*i);
        }
        start = false;
}

function drawEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.health > 0) {
            ctx.beginPath();
            ctx.arc(enemy.x, enemy.y, enemyRadius, 0, Math.PI*2);
            ctx.fillStyle = "#A20E0E";
            ctx.fill();
            ctx.closePath();
        }
    }
}


function changeDirection() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.path === 1 && enemy.x >= 675) {
            enemy.path = 2;
        } else if (enemy.path === 2 && enemy.y >= 225) {
            enemy.path = 3;
        } else if (enemy.path === 3 && enemy.x <= 125) {
            enemy.path = 4;
        } else if (enemy.path === 4 && enemy.y >= 425) {
            enemy.path = 5;
        } else if (enemy.path === 5 && enemy.x >= 675) {
            enemy.path = 6;
        }
    }
}
function moveEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.path === 1) {
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 2) {
            enemy.dx = 0;
            enemy.dy = 1.5;
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 3) {
            enemy.dx = -1.5;
            enemy.dy = 0;
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 4) {
            enemy.dx = 0;
            enemy.dy = 1.5;
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 5) {
            enemy.dx = 1.5;
            enemy.dy = 0;
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 6) {
            enemy.dx = 0;
            enemy.dy = 1.5;
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        }
    }
}

function removeHealth() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.y >= board.height && enemy.health > 0) {
            healthPoints -= enemy.dmg;
        }
    }
}

function removeEnemy() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.y >= board.height) {
            enemy.health = 0;
            if (enemies.length === 1) {
                enemies = [];
            }
            enemies = enemies.slice(0, i).concat(enemies.slice(i+1));
        } else if (enemy.health <= 0) {
            enemies = enemies.slice(0, i).concat(enemies.slice(i+1));
        }
    }
}







// FOR TOWERS.JS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let towerRadius = 20;
let towersArr = [];

let towers = {
    first: {x: 50, y: 20, width: 50, height: 50, level: 1, status: "open", searchRadius: 100, dmg: 5, target: [] },
    second: {x: 50, y: 140, width: 50, height: 50, level: 1, status: "open", searchRadius: 100, dmg: 5, target: [] },
    third: {x: 580, y: 140, width: 50, height: 50, level: 1, status: "open", searchRadius: 100, dmg: 5, target: [] },
    fourth: {x: 160, y: 260, width: 50, height: 50, level: 1, status: "open", searchRadius: 100, dmg: 5, target: [] },
    fifth: {x: 160, y: 340, width: 50, height: 50, level: 1, status: "open", searchRadius: 100, dmg: 5, target: [] },
    sixth: {x: 580, y: 460, width: 50, height: 50, level: 1, status: "open", searchRadius: 100, dmg: 5, target: [] },
};

function addTower(position) {
    if (towers[position].status === "open" && expPoints >= 50) {
        let tower = towers[position];
        tower.status = "filled";
        towersArr.push(position);
        expPoints -= 50;
    } else if (towers[position].status === "filled") {
        let tower = towers[position];
        if (expPoints >= (tower.level * 50)) {
            expPoints -= (tower.level * 50);
            tower.level++;
            tower.dmg++;
        }
    }
}

function drawTowers() {
    for (let i = 0; i < towersArr.length; i++) {
        let position = towersArr[i];
        let tower = towers[position];
        ctx.beginPath();
        ctx.arc(tower.x + 25, tower.y + 25, towerRadius, 0, Math.PI*2);
        ctx.fillStyle = "#992DA9";
        ctx.fill();
        ctx.closePath();


        ctx.font = "12px Arial Black";
        ctx.fillStyle = "black";
        ctx.fillText(`${tower.level}`, tower.x + 22, tower.y + 27);
    }
}

function targetEnemy() {
    for (let i = 0; i < towersArr.length; i++) {
        let tower = towers[towersArr[i]];
        if (enemies[0] && tower.target.length === 0) {
            tower.target.push({x: enemies[0].x, y: enemies[0].y });
        } 
    }
}


//PROJECTILES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



let projectiles = [];



function moveProjectiles() {
    for (let i = 0; i < projectiles.length; i++) {
        let projectile = projectiles[i];
            projectile.x += -projectile.dx;
            projectile.y += -projectile.dy;
    }
}

function projectile(startX, startY, pdx, pdy, pdmg) {
    projectiles.push({ x: startX, y: startY, dx: pdx, dy: pdy, dmg: pdmg });
}

function addProjectiles() {
    if (enemies.length > 0) {
        for (let i = 0; i < towersArr.length; i++) {
            let tower = towers[towersArr[i]];
            let x = tower.x + 25;
            let y = tower.y + 25;
            let j = 0;
            if (enemies[j].x === undefined) {
                j++;
            }
            let endX = enemies[j].x;
            let endY = enemies[j].y;
            if (enemies[j].path === 1 || enemies[j].path === 5) {
                endX += 15;
            } else if (enemies[j].path === 2 || enemies[j].path === 4 || enemies[j].path === 6) {
                endY += 15;
            } else if (enemies[j].path === 3) {
                endX -= 15;
            }
            let lengthX = endX - x;
            let lengthY = endY - y;
            let dx = lengthX / 15;
            let dy = lengthY / 15;
            projectile(x, y, -dx, -dy, tower.dmg);
        }
    }
}

function drawProjectiles() {
    for (let i = 0; i < projectiles.length; i++) {
        let projectile = projectiles[i];
        ctx.beginPath();
        ctx.arc(projectile.x, projectile.y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#E6EC42";
        ctx.fill();
        ctx.closePath();
    }
}
function removeProjectile() {
    for (let i = 0; i < projectiles.length; i++) {
        let projectile = projectiles[i];
        if (projectile.dmg <= 0 || projectile.x <= 0 || projectile.x >= 800 || projectile.y < 0 || projectile.y > 600) {
            projectiles = projectiles.slice(0, i).concat(projectiles.slice(i+1));
        }
    }
}
function collision() {
    for (let i = 0; i < projectiles.length; i++) {
        let projectile = projectiles[i];
        for (let j = 0; j < enemies.length; j++) {
            let enemy = enemies[j];
            if (projectile.x + 10 > enemy.x && projectile.x - 10 < enemy.x + enemyRadius && projectile.y + 10 > enemy.y && projectile.y - 10 < enemy.y + enemyRadius && enemy.health > 0) {
                enemy.health -= projectile.dmg;
                projectile.dmg = 0;
            }
        }
    }
}














//STILL BOARD.JS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function restart() {
    level++;
    expPoints += 50;
    addEnemies(level);
}
function nextLevel() {
    let end = true;
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.health > 0) {
            return;
        }
    }
    if (end) {
        restart();
    }
}

function draw() {
    ctx.clearRect(0, 0, board.width, board.height);
    ctz.clearRect(0, 0, score.width, score.height);
    drawStats();
    drawPath();
    drawTowerPos();
    drawEnemies();
    drawTowers();

    targetEnemy();
    drawProjectiles();
    moveProjectiles();

    moveEnemies();
    changeDirection();
    collision();

    removeHealth();
    removeProjectile();
    removeEnemy();

    nextLevel();

    if (healthPoints === 0) {
        alert("YOU LOSE =(");
        document.location.reload();
    }
    requestAnimationFrame(draw);
}
let easyFire = 40;
let hardFire = 1000;
setInterval(addProjectiles, 700);
addEnemies(level);
draw();