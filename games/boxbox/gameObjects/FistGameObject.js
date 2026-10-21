class FistGameObject extends GameObject{
    constructor(){
        super("Fist", [], "fists")
        this.addComponent(new FistController())
        this.addComponent(new Polygon(), {fillStyle:"black", points:Assets.triangle})
        this.transform.scale = new Vector2(1, 2)
    }
}