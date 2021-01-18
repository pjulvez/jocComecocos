const s = ( p ) => {
var arrayRocasMapa = [];
var arrayMenjarMapa = [];
var arrayPacmanMapa = [];
var myMaze = new Maze();
var rocaImage;
var menjarImage;
var roca;
var pacmanImage;
p.preload = function() {

  rocaImage = p.loadImage("images/roca.bmp");
  menjarImage = p.loadImage("images/food.bmp");
  pacmanImage = p.loadImage("images/pacman.bmp")
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
          if(myMaze.maze[i][j]=== 3){

            let pacmantemp = new Pacman()
            arrayPacmanMapa.push(new Pacman(i*myMaze.imageSize, j*myMaze.imageSize))
          }

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
      arrayPacmanMapa.forEach(function callback(pacman) {
           pacman.showInstanceMode(p,pacmanImage);
        });

  //with i i count the rows, with j the columns

/*
  for (let i = 0; i < arrayRocasMapa.length; i++) {

    arrayRocasMapa[i].show();

  }
  for (let i = 0; i < arrayMenjarMapa.length; i++) {

    arrayMenjarMapa[i].show();

  }
*/
} //clau tanca draw
} //clau tanca const
//array Maze = new Array[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1];
let myp5 = new p5(s, 'joc');
