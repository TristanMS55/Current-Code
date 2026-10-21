class MainGameObject extends GameObject{
    constructor(){
        super("Main", [], "ships")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"blue", points: Assets.triangle})
        this.transform.scale = new Vector2(2, 2)

        /*ctx.lineTo(100, -50)
        ctx.lineTo(90, -40)
        ctx.lineTo(100, 50)
        ctx.lineTo(-100, 50)
        ctx.lineTo(-90, -40)
        ctx.lineTo(-90, -40)
        ctx.lineTo(-100, -50)*/
    }
}