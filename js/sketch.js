const s = ( p ) => {

var arrayRocasMapa = [];
var arrayMenjarMapa = [];
var arrayPacmanMapa = [];
var myMaze = new Maze();
var rocaImage;
var menjarImage;
var pacman = new Pacman(0*myMaze.imageSize, 0*myMaze.imageSize);
var pacmanImage;
var pacmanImage2;
var pacmanImage3;
var pacmanImage4;

p.preload = function() {

  rocaImage = p.loadImage("images/roca.bmp");
  menjarImage = p.loadImage("images/food.bmp");
  pacmanImage = p.loadImage("images/pacman.png")
  pacmanImage2 = p.loadImage("images/pacmanesquerra.png")
  pacmanImage3 = p.loadImage("images/pacmanUp.png")
  pacmanImage4 = p.loadImage("images/pacmanDown.png")
//  font = loadFont('assets/SourceSansPro-Regular.otf');
}
p.setup = function() {

  p.createCanvas(myMaze.rows*myMaze.imageSize, myMaze.columns*myMaze.imageSize);

  for (let i = 0; i < myMaze.maze.length; i++){

    for (let j = 0; j < myMaze.maze.length; j++) {
          if(myMaze.maze[i][j]=== 1){
            let rocatemp = new Roca()
            arrayRocasMapa.push(new Roca(i*myMaze.imageSize, j*myMaze.imageSize))

          }  if(myMaze.maze[i][j]=== 2){

            let menjartemp = new Menjar()
            arrayMenjarMapa.push(new Menjar(i*myMaze.imageSize, j*myMaze.imageSize))
          }
      //  if(myMaze.maze[i][j]=== 3){
        //      var pacman = new Pacman(i*myMaze.imageSize, j*myMaze.imageSize);
      //      let pacmantemp = new Pacman()
        //    arrayPacmanMapa.push(new Pacman(i*myMaze.imageSize, j*myMaze.imageSize))
         //}

    }
  }

}

p.draw = function() {


  p.background(0);
  arrayRocasMapa.forEach(function callback(roca) {
       roca.showInstanceMode(p,rocaImage);
    });
    arrayMenjarMapa.forEach(function callback(menjar) {
         menjar.showInstanceMode(p,menjarImage);
      });
  //   pacman.forEach(function callback(pacman) {
           pacman.showInstanceMode(p,pacmanImage);
    //    });

    switch (pacman.direction) {

      case 1:
          pacman.showInstanceMode(p,pacmanImage2);
            break;
      case 2:
          pacman.showInstanceMode(p,pacmanImage);
            break;
      case 3:
          pacman.showInstanceMode(p,pacmanImage3);
            break;
      case 4:
          pacman.showInstanceMode(p,pacmanImage4);
        break;
      default:

    }
}
p.keyPressed = function(){

  if(p.keyCode == p.LEFT_ARROW){
    pacman.moveLeft();
    pacman.direction = 1;
  }
  if(p.keyCode == p.RIGHT_ARROW){
    pacman.moveRight();
    pacman.direction = 2;

  }
  if(p.keyCode == p.UP_ARROW){
    pacman.moveUp();
    pacman.direction = 3;
  }
  if(p.keyCode == p.DOWN_ARROW){
    pacman.moveDown();
    pacman.direction = 4;
  }
}


 //clau tanca draw
} //clau tanca const
//array Maze = new Array[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1];
let myp5 = new p5(s, 'joc');
