$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 500, 150, 10, "orange"); 
createPlatform(500, 630, 200, 10, "red");
createPlatform(850, 500, 200, 10, "lime"); // bright green for a finished platform
createPlatform(1000, 370, 100, 10);
createPlatform(1200, 300, 200, 10);


    // TODO 3 - Create Collectables
createCollectable("steve", 250, 450, 2.0, 0.7)
createCollectable( "kennedi", 1250, 260, 1.0, 1.0)
createCollectable("diamond", 600, 580, 0, 0.7)
createCollectable("steve", 1200, 600, 0, 0)
    

    // TODO 4 - Create Cannons
createCannon( "left", 600, 1000)
createCannon( "bottom", 1050, 500)
createCannon( "left", 300, 700 )

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
