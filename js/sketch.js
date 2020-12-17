

var arrayRocasMapa = [];
function preload() {
  rocaImage = loadImage("/images/roca.bmp");

//  font = loadFont('assets/SourceSansPro-Regular.otf');
}
function setup() {
  createCanvas(COLUMNS*IMAGE_SIZE, ROWS*IMAGE_SIZE);

//  myMaze = new Maze();

  for (var i = 0; i < myMaze.rows; i++){
    for (var j = 0; j < myMaze.columns; j++) {

    }
  }
}
function draw() {
  clear();
  console.log("Entra a  draw");
  background(0);
  //  roca.show();
  //with i i count the rows, with j the columns
  for (var i = 0; i < arrayRocasMapa.length; i++) {
    console.log("Imprimo una roca:" + i);
    arrayRocasMapa[i].show();
  }
}
//array Maze = new Array[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1];
