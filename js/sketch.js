const s = ( p ) => {

var arrayRocasMapa = [];
var arrayMenjarMapa = [];
var arrayPacmanMapa = [];
var arrayGrapeMapa = [];
var myMaze = new Maze();
var rocaImage;
var menjarImage;
var grapeImage;
var pacman = new Pacman(0*myMaze.imageSize, 0*myMaze.imageSize);
var pacmanImage;
var pacmanImage2;
var pacmanImage3;
var pacmanImage4;

p.preload = function() {
  try {
    rocaImage = p.loadImage("images/roca.bmp");
    grapeImage = p.loadImage("images/grape.png");
    menjarImage = p.loadImage("images/food.bmp");
    pacmanImage = p.loadImage("images/pacman.png");
    pacmanImage2 = p.loadImage("images/pacmanesquerra.png");
    pacmanImage3 = p.loadImage("images/pacmanUp.png");
    pacmanImage4 = p.loadImage("images/pacmanDown.png");

  //  font = loadFont('assets/SourceSansPro-Regular.otf');
}catch (Execption) { // non-standard
     console.log("Error al cargar les imatges");
  }
}
p.setup = function() {
  try{

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

            let grapeTemp = new Grape()
            arrayGrapeMapa.push(new Grape(i*myMaze.imageSize, j*myMaze.imageSize))
          }

      //  if(myMaze.maze[i][j]=== 3){
        //      var pacman = new Pacman(i*myMaze.imageSize, j*myMaze.imageSize);
      //      let pacmantemp = new Pacman()
        //    arrayPacmanMapa.push(new Pacman(i*myMaze.imageSize, j*myMaze.imageSize))
         //}

    }
  }
    }catch (Execption) { // non-standard
       console.log("Error a les arrays de crear objectes");
    }
}

p.draw = function() {

try{
  p.background(0);
  arrayRocasMapa.forEach(function callback(roca) {
       roca.showInstanceMode(p,rocaImage);
    });
    arrayMenjarMapa.forEach(function callback(menjar) {
         menjar.showInstanceMode(p,menjarImage);
      });
      arrayGrapeMapa.forEach(function callback(grape) {
           grape.showInstanceMode(p,grapeImage);
        });
  //   pacman.forEach(function callback(pacman) {
           pacman.showInstanceMode(p,pacmanImage);
    //    });


  }catch (err) { // non-standard
       console.log("Error al cargar les posicions de rocar i menjar en el array",err);
  }
  try{

    if(pacman.direction < 1 && pacman.direction > 4){
      //err = new EvalError;
      throw new EvalError('Direccio no te un valor valid');
    }
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
  }catch (err) { // non-standard
       console.log("Error en el switch",err);
  }
}


  p.keyPressed = function(){

  let ampleImatge = myMaze.IMAGE_SIZE * myMaze.COLUMNS;
  let grandariaMapa = myMaze.IMAGE_SIZE * myMaze.ROWS;

  try{
  if(p.keyCode == p.LEFT_ARROW){

      pacman.moveLeft(ampleImatge);
      pacman.direction = 1;


  }
  if(p.keyCode == p.RIGHT_ARROW){
    pacman.moveRight(ampleImatge);
    pacman.direction = 2;
    console.log(pacman.coordX);

  }
  if(p.keyCode == p.UP_ARROW){
    pacman.moveUp(grandariaMapa);
    pacman.direction = 3;
  }
  if(p.keyCode == p.DOWN_ARROW){
    pacman.moveDown(grandariaMapa);
    pacman.direction = 4;
    console.log(pacman.coordY);
  }
}catch (err) { // non-standard
     console.log("Error el moviment del pacman",err);
  }

}

function send(){
    var myVar = {"id" : 1};
    console.log("tuleb siia", document.getElementById('saada').value);
    fetch("http://localhost", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(myVar)
    }).then(function(response) {
        return response.text();
    }).then(function(muutuja){
        document.getElementById('väljund').innerHTML = muutuja;
    });
}
 //clau tanca draw
} //clau tanca const
//array Maze = new Array[0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1];
let myp5 = new p5(s, 'joc');
