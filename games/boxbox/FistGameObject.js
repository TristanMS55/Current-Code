class FistGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new FistController())
        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(30,25),
            new Vector2(30,-25),
            new Vector2(-30,-25),
            new Vector2(-30,25)
        ]})
    }
}