class Pacman extends GameObject
{
  constructor(coordX,coordY){
    super(coordX,coordY);
    this.coordX=coordX;
    this.coordY=coordY;
    this.direction=0;
    this.score =0;
    this.lives = 3;
    this.speed = 30;
  }


  showInstanceMode(p, pacmanImage) {
    //Nota: first in sketch.js preload we have to implement: img = loadImage('assets/laDefense.jpg');
    // Top-left corner of the img is at (x, y)
    // Width and height are the img's original width and heigh
    p.image(pacmanImage,this.coordX,this.coordY);

  }

  moveRight(){
    this.coordX = this.coordX + this.speed;
  }
  moveLeft(){
        this.coordX = this.coordX - this.speed;
  }
  moveUp(){
      this.coordY = this.coordY - this.speed;
  }
  moveDown(){
      this.coordY = this.coordY + this.speed;
  }
}
