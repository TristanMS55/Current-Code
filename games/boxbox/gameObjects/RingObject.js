class RingObject extends GameObject{
    constructor(){
        super("Ring", [], "background")
        this.addComponent(new Polygon(), {fillStyle:"red", points:[
            new Vector2(-200, -200),
            new Vector2(200, -200),
            new Vector2(200, 200),
            new Vector2(-200, 200)
        ]})
    }
}