// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [{ x: 400, width: 100, height: 300, speedX: -2 }],
    { x: 300, width: 150, height: 400, speedX: -1.5 },
    { x: 600, width: 120, height: 250, speedX: -2 },
    { x: 950, width: 200, height: 450, speedX: -1.2 },
    { x: 1300, width: 110, height: 350, speedX: -2.5 }
  ]
  };
 lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [{ x: 700, width: 50, height: 150, speedX: 0 }],
{ x: 150, width: 20, height: 100, speedX: -3 },
{ x: 450, width: 20, height: 100, speedX: -3 },
{}
{}
  },
};
