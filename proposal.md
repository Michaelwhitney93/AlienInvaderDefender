# Tower Defense Proposal

## Background

Tower defense games have been around ever since I was kid playing flash games on online game websites. Tower defense games come from the classic Rampart which was an arcade game from 1990. Since the release of flash and other rendering/animation programs, tower defense games have had a major popularity which eventually led to the release of Desktop Tower Defense in March 2007 which had been played over 15.7 million times in late 2007 and was one of Webware 100's top ten entertainment web applications of 2007.

The basic premise of the game is to have a pathway that some type of enemy traverses and your job as the player is to place and upgrade towers that shoot and destroy all the enemies before reaching the end of the path.

## Functionality

On this iteration of Tower Defense users will be able to, 

- [ ] Start the game
- [ ] Place towers down on predetermined spots on the board
- [ ] Upgrade towers with points earned from destroying enemies and/or winning a round.

## MVP's
### 1. Board & Render
- [ ] Learn how to render items with canvas
- [ ] Render a basic but stylized board
- [ ] Board will have a path for objects to follow
- [ ] Board will have positions to place towers
* Bonus Features
- [ ] Players will be able to pause and un-pause game flow
- [ ] Board will keep track of High Scores through Google Firebase

### Enemy shapes
- [ ] Render "enemies" with basic shapes that follow a predetermined path through the board
- [ ] Give the enemies collision detection
- [ ] After a certain amount of hits and/or damage has been taken, the shapes will be destroyed and no longer render to the board
* Bonus Features
- [ ] Enemies get stronger/harder to destroy on each new level
- [ ] There will be multiple types of enemies with different stats for speed/health
- [ ] Enemies will have an actual shape other than a basic circle

### Towers
- [ ] Towers will have positions on the board to be placed
- [ ] Towers will shoot "projectiles" 
- [ ] Towers will have a basic AI to detect close by enemies and shoot accurately at their current position
* Bonus Features
- [ ] Once a tower has been placed they may be upgraded with points
- [ ] There will be different types of towers that can be placed
- [ ] Players will have different options to upgrade towers so that towers can fit into a 'class'
- [ ] Towers will be styled 

### Projectiles
- [ ] Will have a a very quick movement across the board
- [ ] Will have collision detection
- [ ] Will be created or 'spawned' by towers
* Bonus Features
- [ ] With different towers implemented there will be different Projectiles
- [ ] Projectiles will do a certain amount of damage based on what level the tower is 
- [ ] Different types of projectiles will have different effects on enemies('slow', 'burn', 'freeze')

### Player Stats
- [ ] Players will have a certain amount of hit points that decrease when enemies reach the end of the path
- [ ] Game ends when a player no longer has any hit points
- [ ] Players will win experience points to upgrade towers after each level
* Bonus Features
- [ ] Game will have multiple levels that changes how many enemies get rendered to the board

## Wireframes

My game will consist of two pages. An introductory page to explain the games simple mechanics as well as links to my Github, Linkedin, Personal Site, and Full Stack website. The first page will also link you to the second page where my game will be rendered. On the second page will be the game board rendered in the center of the page. On the bottom will be icons to link all of the necessary sites again. On the left-hand side will feature the High-scores(bonus). On the right of the page will have a button to pause and un-pause the game(bonus). On top will be several container div elements that show the current level(bonus) amount of experience points(bonus) and health points left to the player. Once Upgrades for towers are implemented there will be another container that shows information on a selected tower as well as a button that allows an upgrade.

![image one]()
![image two]()

## Architecture and Technologies
This project will implement two main technologies
* `Javascript` to handle in-game logic
* `HTML` and `Canvas` to render the game

### Files
`index.html` will be the entry file.

`board.js` will handle rendering the overall appearance of the board on the DOM as well as rendering individual components imported from other `.js` files.

`enemy.js` will handle the logic of the enemy objects, including movement and collision detection.

`tower.js` will handle tower logic, `board.js` will be responsible for spawning tower elements onto the board. In this script tower objects will use an imported `projectile.js` object to fire at `enemy.js` objects.

`projectile.js` will be responsible for dealing with creating projectile objects and the logic of movement and collision.

`stats.js` will be a simple Javascript class that holds onto information about the game state.

## Implementation Timeline

### Day 1:
Learn as much about Canvas as possible and setup the entry file. Create all necessary `.js` files with a basic skeleton of future methods/functions. Desired output for the day will be to render the board onto the page with a clear path that the enemies will be taking to traverse the board.
### Day 2:
Build out the `enemy.js` file and start rendering enemies to the board. Enemies will take the shape of a colored circle to start. Desired output at the end of the day will be to have the movement path for the enemies built out and enemies correctly rendering and following the path. Enemies will also have a slow move speed to help projectiles correctly hit them.
### Day 3:
Day three will be focused on creating tower objects and rendering them correctly to the board. Apart of this day will be focused on quickly building out the `projectile.js` file and getting the towers to shoot projectile objects. Building out the logic for search radius and direction of projectiles will be focused on day 4 & 5. Desired output for day three will be to render towers on the board and fire projectiles at a steady consistent rate across the board. Projectiles will move very quickly but slow enough that players can still see them.
### Day 4 & 5:
These two days will be heavily focused on the simple AI of the towers. Towers will have a radius that an enemy must be in in order for the tower to attack it. Along with search radius day 4 and 5 will focus on the towers being able to shoot a projectile towards where an enemy currently is and have the projectile either track the enemy correctly or move ahead of where the enemy currently is so the collision will look realistic. The last portion of day 5 will be focused on getting collision on the enemies and removing them from the board when they are hit.