class particle {
    constructor(){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
    }
    this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,225),random(0,225),random(0,225))
        World.add(world,this.body)
}
}