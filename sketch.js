var car, wall;
var speed, wieght;

function setup() {
  createCanvas(1600,400);

  speed = random (50,90);
  wieght = random (400, 1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall=createSprite(1400, 200, 10, height/2);
  
}

function draw() {
  background(0);  

  /*if(car.isTouching(wall)){
    car.velocityX = 0;
  }*/
  
  if(car.velocityX > 50 && car.velocityX < 63 && car.isTouching(wall)){
      car.shapeColor = "green";
      car.velocityX = 0;
    }

    if(car.velocityX > 63 && car.velocityX < 77 && car.isTouching(wall)){
      car.shapeColor = "yellow";
      car.velocityX = 0;
    }

    if(car.velocityX > 77 && car.velocityX < 90 && car.isTouching(wall)){
      car.shapeColor = "red";
      car.velocityX = 0;
    }

  drawSprites();

}
