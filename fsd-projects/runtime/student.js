function moveScenery() {
  // TODO 2: Move background scenery based on current level speed

for (var i = 0; i < scenery.building.instances.length; i++){
  var buildingInstance = scenery.building.instances[i];

  buildingInstance.x += buildingInstance.speedX - currentLevel.speed;

  if(buildingInstance.x + buildingInstance.width < 0){
    buildingInstance.x = scenery.building.loopWidth;
  }
}
for (var j = 0; j < scenery.lamp.instances.length; j++) {
  var lampInstance = scenery.lamp.instances[j];

  lampInstance.x += lampInstance.speedX - currentLevel.speed;

  if (lampInstance.x + lampInstance.width < 0) {
    lampInstance.x = scenery.lamp.loopWidth;
  }
}
}

  function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];

    create(currentObject);
    console.log(currentObject.type, currentObject.kind);
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
  if (obj.type === "obstacle"){
    makeObstacle(obj);
  }
else if (obj.type === "enemy"){
  makeEnemy(obj);
}
else if (obj.type === "powerup"){
  makePowerup(obj);
}
else if (obj.type === "goal"){
  makeGoal(obj);
}
else if (obj.type === "platform"){
  makePlatform(obj);
}
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  let matches = [];
  for (let i = 0; i < gameObjects.length; i++) {
    let currentObject = gameObjects[i];
    if (currentObject.type === type) {
      matches.push(currentObject);
    }
  }
  //console.log("Filtered matches for", type, ":", matches);
  return matches;
}

function moveGameObjects(array) {
  // TODO 6: Move all game objects of a single type based on speeds
for (let i = 0; i < array.length; i++){
  let currentObjects = array[i];
  currentObjects.x = currentObjects.x + currentObjects.speed - currentLevel.speed;
}

}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
  for (var i = 0; i < gameObjects.length; i++){
    var currentGameObject = gameObjects[i];
    for (var j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];
      if (isCollidingWithProjectile(currentProjectile, currentGameObject) === true) {
        handleProjectileObjectCollision(i, j);
      }
    } 
  }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
for (var i = 0; i < gameObjects.length; i++) {
  var currentGameObject = gameObjects[i];
  if (currentGameObject.type !== "platform") {
    if (isGenericCollision(currentGameObject) === true) {
      handleHallebotGenericCollision(i);
    }
  }
}

}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
  currentLevelIndex = currentLevelIndex + 1;
  currentLevel = cuurentLevelIndex + 1;
  gameObjects = [];  
  if (currentLevelIndex >= levels.length) { 
    player.winConditionMet = true;
  } 
  }

