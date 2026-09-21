class MainGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"tan", points:[
            new Vector2(50,50),
            new Vector2(50,-50),
            new Vector2(-50,-50),
            new Vector2(-50,50)
        ]})
    }
}