# Tower Defense Proposal

## Background

Tower defense games have been around ever since I was kid playing flash games on online game websites. Tower defense games come from the classic Rampart which was an arcade game from 1990. Since the release of flash and other rendering/animation programs, tower defense games have had a major popularity which eventually led to the release of Desktop Tower Defense in March 2007 which had been played over 15.7 million times in late 2007 and was one of Webware 100's top ten entertainment web applications of 2007.

The basic premise of the game is to have a pathway that some type of enemy traverses and your job as the player is to place and upgrade towers that shoot and destroy all the enemies before reaching the end of the path.

## Functionality

On this iteration of Tower Defense users will be able to, 

[ ] Start the game
[ ] Place towers down on preditermined spots on the board
[ ] Upgrade towers with points earned from destroying enemies and/or winning a round.

## MVP's
### 1. Board & Render
[ ] Learn how to render items with canvas
[ ] Render a basic but stylized board
[ ] Board will have a path for objects to follow
[ ] Board will have positions to place towers
* Bonus Features
[ ] Players will be able to pause and un-pause game flow
[ ] Board will keep track of High Scores through Google Firebase

### Enemy shapes
[ ] Render "enemies" with basic shapes that follow a preditermined path through the board
[ ] Give the enemies collision detection
[ ] After a certain amount of hits and/or damage has been taken, the shapes will be destroyed and no longer render to the board
* Bonus Features
[ ] Enemies get stronger/harder to destroy on each new level
[ ] There will be multiple types of enemies with different stats for speed/health

### Towers
[ ] Towers will have positions on the board to be placed
[ ] Towers will shoot "projectiles" 
[ ] Towers will have a basic AI to detect close by enemies and shoot accurately at their current position
* Bonus Features
[ ] Once a tower has been placed they may be upgraded with points
[ ] There will be different types of towers that can be placed
[ ] Players will have different options to upgrade towers so that towers can fit into a 'class'

### Projectiles
[ ] Will have a a very quick movement across the board
[ ] Will have collision detection
[ ] Will be created or 'spawned' by towers
* Bonus Features
[ ] With different towers implemented there will be different Projectiles
[ ] Different types of projectiles will have different effects on enemies('slow', 'burn', 'freeze')

### Player Stats
[ ] Players will have a certain amount of hit points that decrease when enemies reach the end of the path
[ ] Game ends when a player no longer has any hit points
[ ] Players will win experience points to upgrade towers after each level
* Bonus Features
[ ] Game will have multiple levels that changes how many enemies get rendered to the board