
var arrayRocasMapa = [];
var arrayMenjarMapa = [];
var myMaze = new Maze();
var rocaImage;
var menjarImage;

function preload() {
  rocaImage = loadImage("images/roca.bmp");
  menjarImage = loadImage("images/food.png");
//  font = loadFont('assets/SourceSansPro-Regular.otf');
}
function setup() {
  createCanvas(myMaze.rows*myMaze.imageSize, myMaze.columns*myMaze.imageSize);

  for (let i = 0; i < myMaze.maze.length; i++){

    for (let j = 0; j < myMaze.maze.length; j++) {
          if(myMaze.maze[i][j]=== 1){
            let rocatemp = new Roca()
            arrayRocasMapa.push( new Roca(i*myMaze.imageSize, j*myMaze.imageSize))

          }

    }
  }

}
function draw() {


  background(0);
  //roca.show();

  //with i i count the rows, with j the columns

  for (let i = 0; i < arrayRocasMapa.length; i++) {
    console.log("Imprimo una roca:" + i);
    arrayRocasMapa[i].show();
  }

}
//array Maze = new Array[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1];
