class RingObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new Polygon(), {fillStyle:"red", points:[
            new Vector2(window.innerWidth/2-200, window.innerHeight/2-200),
            new Vector2(window.innerWidth/2+200,window.innerHeight/2-200),
            new Vector2(window.innerWidth/2+200, window.innerHeight/2+200),
            new Vector2(window.innerWidth/2-200,window.innerHeight/2+200)
        ]})
    }
}