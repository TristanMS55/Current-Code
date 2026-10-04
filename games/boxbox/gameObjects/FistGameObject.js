class FistGameObject extends GameObject{
    constructor(){
        super("Fist", [], "fists")
        this.addComponent(new FistController())
        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(15,12.5),
            new Vector2(15,-12.5),
            new Vector2(-15,-12.5),
            new Vector2(-15,12.5)
        ]})
    }
}