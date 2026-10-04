class MainGameObject extends GameObject{
    constructor(){
        super("Main", [], "fighters")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"tan", points:[
            new Vector2(25,25),
            new Vector2(25,-25),
            new Vector2(-25,-25),
            new Vector2(-25,25)
        ]})
    }
}