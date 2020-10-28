class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255;
      
    }
    display(){
      if (this.body.speed < 3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
      }
      
      else {
        push();
        this.Visiblity = this.Visiblity - 2;
        tint(255,this.Visiblity);
        pop();
        World.remove(world,this.body)
      }
    }

    score()
    {
             if(this.Visiblity <=0 && this.Visiblity>=-1005)
             {
                  score++;

             }

    }
}