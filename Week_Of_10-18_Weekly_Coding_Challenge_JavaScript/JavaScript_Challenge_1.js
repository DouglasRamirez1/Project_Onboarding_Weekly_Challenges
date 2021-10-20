//JavaScript Challenge 1: A robot on a 2D grid starts at position (0,0). It's movements will be in the directions of North, East, South, and West in that order.
//The number of arguments determines the number of movements. After all movements are complete, return and display the current position of the robot on the 2D grid.

console.log(trackRobot(20, 30, 10, 40)); //4 arguments, so it will move north, east, south, and west.
console.log(trackRobot()); //no arguments, so it will remain in place
console.log(trackRobot(-10, 20, 10)); //3 arguments, so it will rem

function trackRobot() {

    var currentPosition = { //starting position of the robot (0,0)
            x: 0,
            y: 0
        }

    var currentDirection = { //true represents moving in a positive direction (x or y) on a 2D grid | false represents the negative direction (x or y) on a 2D grid
            x: true,
            y: true
        }

    for (var i = 0; i < arguments.length; i++) { //iterates through the number of arguments in the function call

      if(i%2 == 0 || i == 0){ //even numbers will represent north/south movement
        if(currentDirection.y == true){ //true represents north, false represents south
            currentPosition.y = currentPosition.y + arguments[i]; //y position adjusted by the value of the current index of the arguments provided
            currentDirection.y = false; //next y direction will be south
        }
        else{
            currentPosition.y = currentPosition.y - arguments[i]; //y position adjusted by the value of the current index of the arguments provided
            currentDirection.y = true; //next y direction will be north
        }
      }
      else{ //odd numbers represent east/west movement
        if(currentDirection.x == true){ //true represents east, false represents west
            currentPosition.x = currentPosition.x + arguments[i]; //x position adjusted by the value of the current index of the arguments provided
            currentDirection.x = false; //next x direction will be west
        }
        else{
            currentPosition.x = currentPosition.x - arguments[i]; //x position adjusted by the value of the current index of the arguments provided
            currentDirection.x = true; //next x direction will be east
        }
      }
    };
    return currentPosition; //returns the final and current position of the robot.
  }