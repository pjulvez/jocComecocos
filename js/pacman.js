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

  moveRight(ampleImatge){
    this.coordX=this.coordX + this.speed;
    if(this.coordX  > 120){
        this.coordX = 120;

      }
  }
  moveLeft(ampleImatge){

        this.coordX = this.coordX - this.speed;
        if(this.coordX  < 0){
            this.coordX = 0;

          }
  }
  moveUp(grandariaMapa){
      this.coordY = this.coordY - this.speed;
      if(this.coordY  < 0){
          this.coordY = 0;

      }
  }
  moveDown(grandariaMapa){
      this.coordY = this.coordY + this.speed;
      if(this.coordY  > 120){
          this.coordY = 120;

      }
  }
}
