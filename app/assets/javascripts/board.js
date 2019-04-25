const board = document.getElementById("mainBoard");
const score = document.getElementById("infoBoard");

const ctx = board.getContext('2d');
const ctz = score.getContext('2d');
// Info Board has a height of 100 and width 800
// Main board has a width of 800 and height 600
let game = {
    healthPoints: 10,
    expPoints: 50,
    level: 1,
    state: 0,
};

const enemyImg = new Image();
enemyImg.src = "./assets/images/Aliens.png";
const enemyDown = new Image();
enemyDown.src = "./assets/images/Aliensdown.png";
const enemyLeft = new Image();
enemyLeft.src = "./assets/images/Aliensright.png";
const bossImg = new Image();
bossImg.src = "./assets/images/Boss.png";
const bossImgDown = new Image();
bossImgDown.src = "./assets/images/BossDown.png";
const bossImgLeft = new Image();
bossImgLeft.src = "./assets/images/BossLeft.png";
const towerImg = new Image();
towerImg.src = "./assets/images/turret.png";
const towerImg2 = new Image();
towerImg2.src = "./assets/images/turret2.png";
const towerImg3 = new Image();
towerImg3.src = "./assets/images/turret3.png";
const towerImg4 = new Image();
towerImg4.src = "./assets/images/turretMax.png";
const bulletImg = new Image();
bulletImg.src = "./assets/images/Ammo.png";

function drawHealth() {
    ctz.font = "20px Arial Black";
    ctz.fillStyle = "white";
    ctz.fillText("Health: " + game.healthPoints, 670, 60);
}
function drawLevel() {
    ctz.font = "28px Arial Black";
    ctz.fillStyle = "white";
    ctz.fillText("Level " + game.level, 335, 60);
}
function drawExp() {
    ctz.font = "20px Arial Black";
    ctz.fillStyle = "white";
    ctz.fillText("EXP: " + game.expPoints, 540, 60);
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
let enemyNum = 0;
let enemies = [];
let firstEnemy = { x: 0, y: 105, path: 1, dx: 1.5, dy: 0, health: 1, dmg: 0, num: enemyNum, boss: false }
function enemy() {
    let healthUp = 10 + (game.level * 5);
    if (game.level % 5 === 0) {
        enemyNum++;
        enemies.push({x: 0, y: 105, path: 1, dx: 1, dy: 0, health: (250 + game.level * 12), dmg: 3, num: enemyNum, boss: true });
    } else {
        enemyNum++;
        enemies.push({ x: 0, y: 105, path: 1, dx: 2, dy: 0, health: healthUp, dmg: 1, num: enemyNum });
    }
}



function addEnemies(lvlNum) {
    if (game.level % 5 === 0) {
        enemy();
    } else {
        for (let i = 0; i < Math.floor(4 * ((lvlNum + 2) * 0.75)); i++) {
                setTimeout(enemy, 800*i);
            }
    }
        start = false;
}

function drawEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.health > 0) {
            // debugger
            if (enemy.path === 1 || enemy.path === 5) {
                if (enemy.boss) {
                    ctx.drawImage(bossImg, enemy.x - 20, enemy.y - 20, 40, 40);
                } else {
                    ctx.drawImage(enemyImg, enemy.x - 20, enemy.y - 20, 40, 40);
                }
            } else if (enemy.path === 2 || enemy.path === 4 || enemy.path === 6) {
                if (enemy.boss) {
                    ctx.drawImage(bossImgDown, enemy.x - 20, enemy.y - 20, 40, 40);
                } else {
                    ctx.drawImage(enemyDown, enemy.x - 20, enemy.y - 20, 40, 40);
                }
            } else if (enemy.path === 3) {
                if (enemy.boss) {
                    ctx.drawImage(bossImgLeft, enemy.x - 20, enemy.y - 20, 40, 40);
                } else {
                    ctx.drawImage(enemyLeft, enemy.x - 20, enemy.y - 20, 40, 40);
                }
            }
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
            enemy.dy = 2;
            if (enemy.boss) {
                enemy.dy = 1;
            }
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 3) {
            enemy.dx = -2;
            enemy.dy = 0;
            if (enemy.boss) {
                enemy.dx = -1;
            }
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 4) {
            enemy.dx = 0;
            enemy.dy = 2;
            if (enemy.boss) {
                enemy.dy = 1;
            }
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 5) {
            enemy.dx = 2;
            enemy.dy = 0;
            if (enemy.boss) {
                enemy.dx = 1;
            }
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        } else if (enemy.path === 6) {
            enemy.dx = 0;
            enemy.dy = 2;
            if (enemy.boss) {
                enemy.dy = 1;
            }
            enemy.x += enemy.dx;
            enemy.y += enemy.dy;
        }
    }
}

function removeHealth() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.y >= board.height && enemy.health > 0) {
            game.healthPoints -= enemy.dmg;
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
    first: {x: 50, y: 20, width: 50, height: 50, level: 1, status: "open", searchRadius: 150, dmg: 5, target: [] },
    second: {x: 50, y: 140, width: 50, height: 50, level: 1, status: "open", searchRadius: 150, dmg: 5, target: [] },
    third: {x: 580, y: 140, width: 50, height: 50, level: 1, status: "open", searchRadius: 150, dmg: 5, target: [] },
    fourth: {x: 160, y: 260, width: 50, height: 50, level: 1, status: "open", searchRadius: 150, dmg: 5, target: [] },
    fifth: {x: 160, y: 340, width: 50, height: 50, level: 1, status: "open", searchRadius: 150, dmg: 5, target: [] },
    sixth: {x: 580, y: 460, width: 50, height: 50, level: 1, status: "open", searchRadius: 150, dmg: 5, target: [] },
};

function addTower(position) {
    if (towers[position].status === "open" && game.expPoints >= 50) {
        let tower = towers[position];
        tower.status = "filled";
        towersArr.push(position);
        game.expPoints -= 50;
    } else if (towers[position].status === "filled") {
        let tower = towers[position];
        if (game.expPoints >= (tower.level * 50)) {
            game.expPoints -= (tower.level * 50);
            tower.level++;
            tower.dmg += 2;
            tower.searchRadius += 2;
        }
    }
}

function drawTowers() {
    for (let i = 0; i < towersArr.length; i++) {
        let position = towersArr[i];
        let tower = towers[position];
        // ctx.beginPath();
        // ctx.arc(tower.x + 25, tower.y + 25, towerRadius, 0, Math.PI*2);
        // ctx.fillStyle = "#992DA9";
        // ctx.fill();
        // ctx.closePath();
        if (tower.level <= 2) {
            ctx.drawImage(towerImg, tower.x + 10, tower.y , 30, 50);
        } else if (tower.level < 5 ) {
            ctx.drawImage(towerImg2, tower.x + 10, tower.y, 30, 50);
        } else if (tower.level < 7) {
            ctx.drawImage(towerImg3, tower.x + 10, tower.y, 30, 50);
        } else if (tower.level >= 7) {
            ctx.drawImage(towerImg4, tower.x + 10, tower.y, 30, 50);
        }

        if (position === "first" || position === "second" || position === "fourth" || position === "fifth") {
            ctx.font = "12px Arial Black";
            ctx.fillStyle = "white";
            ctx.fillText(`Level: ${tower.level}`, tower.x + 60, tower.y + 27);
        } else {
            ctx.font = "12px Arial Black";
            ctx.fillStyle = "white";
            ctx.fillText(`Level: ${tower.level}`, tower.x - 60, tower.y + 27);
        }
    }
}

function targetEnemy() {
    for (let i = 0; i < towersArr.length; i++) {
        let tower = towers[towersArr[i]];
        for (let j = enemies.length - 1; j >= 0; j--) {
            let enemy = enemies[j];
            if (enemy.x > (tower.x + 25) - tower.searchRadius && enemy.x < (tower.x + 25) + tower.searchRadius && enemy.y > (tower.y + 25) - tower.searchRadius && enemy.y < (tower.y + 25) + tower.searchRadius) {
                if (tower.target[0] === undefined && enemies[j] !== undefined) {
                    tower.target[0] = enemy;
                    continue;
                } else if (tower.target[0].enemyNum === enemy.enemyNum && enemy.health > 0) {
                    tower.target[0] = enemy;
                    continue;
                }
                if (tower.target[0].enemyNum === enemy.enemyNum && enemy.x < tower.x - tower.searchRadius && enemy.x > tower.x + tower.searchRadius && enemy.y < tower.y - tower.searchRadius && enemy.y > tower.y + tower.searchRadius) {
                    tower.target[0] = undefined;
                    continue;
                }
            }
        }
    }
}

// function removeTargetEnemy() {
//     for (let i = 0; i < towersArr.length; i++) {
//         let tower = towers[towersArr[i]];
//         for (let j = 0; j < enemies.length; j++) {
//             let enemy = enemies[j];
//             if (tower.target[0] !== undefined) {
//                 if (tower.target[0].enemyNum === enemy.enemyNum) {
//                     break;
//                 }
//             }
//             tower.target[0] = undefined;
//         }
//     }
// }
// function targetEnemy() {
//     for (let i = 0; i < towersArr.length; i++) {
//         let tower = towers[towersArr[i]];
//         if (enemies[0] && tower.target.length === 0) {
//             tower.target.push({x: enemies[0].x, y: enemies[0].y });
//         } 
//     }
// }


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
            let x = tower.x + 15;
            let y = tower.y ;

            let enemy = tower.target[0];
            if (enemy !== undefined && enemy.health > 0) {
                let endX = enemy.x;
                let endY = enemy.y;
                if (enemy.path === 1 || enemy.path === 5) {
                    endX += 20;
                } else if (enemy.path === 2 || enemy.path === 4 || enemy.path === 6) {
                    endY += 20;
                } else if (enemy.path === 3) {
                    endX -= 20;
                }
                let lengthX = endX - x;
                let lengthY = endY - y;
                let dx = lengthX / 10;
                let dy = lengthY / 10;
                projectile(x, y, -dx, -dy, tower.dmg);
                tower.target[0] = undefined;
            }
            // let j = 0;
            // if (enemies[j].x === undefined) {
            //     j++;
            // }
            // let endX = enemies[j].x;
            // let endY = enemies[j].y;
        }
    }
}

function drawProjectiles() {
    for (let i = 0; i < projectiles.length; i++) {
        let projectile = projectiles[i];

        ctx.drawImage(bulletImg, projectile.x, projectile.y, 20, 20);
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
            if (projectile.x + 5 > enemy.x - 10 && projectile.x - 5 < enemy.x + 10 && projectile.y  > enemy.y - 10 && projectile.y - 5 < enemy.y + 10 && enemy.health > 0) {
                enemy.health -= projectile.dmg;
                projectile.dmg = 0;
            }
        }
    }
}














//STILL BOARD.JS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function restart() {
    game.level++;
    if (game.level % 5 === 1) {
        game.expPoints += 200;
    } else {
        game.expPoints += 50;
    }
    addEnemies(game.level);
}
function nextLevel() {
    let end = true;
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        if (enemy.health > 0) {
            return;
        }
    }
    if (end && game.state === 1) {
        restart();
    }
}

function draw() {
    ctx.clearRect(0, 0, board.width, board.height);
    ctz.clearRect(0, 0, score.width, score.height);
    drawBoard();
    drawEnemies();
    drawTowers();

    // removeTargetEnemy();
    targetEnemy();
    drawProjectiles();
    moveProjectiles();

    moveEnemies();
    changeDirection();
    collision();

    removeHealth();
    removeProjectile();
    removeEnemy();

    setTimeout(nextLevel, 8000);

    if (game.healthPoints <= 0) {
        document.location.reload();
        clearInterval(projectileInterval);
        game.state = 0;
        alert("YOU LOSE =(");
    }
    requestAnimationFrame(draw);
}
function drawBoard() {
    drawStats();
    drawPath();
    drawTowerPos();
}

let projectileInterval;

function startGame() {
    game.state = 1;
    draw();
    rojectileInterval = setInterval(addProjectiles, 400);
    addEnemies(game.level);
}
document.addEventListener("keydown", event => {
    if (event.key === " ") {
        startGame();
    }
});

drawBoard();

