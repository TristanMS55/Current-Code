class MainGameObject extends GameObject{
    constructor(){
        super("Main")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"blue", points: [
            new Vector2(0, -20), 
            new Vector2(10, 10), 
            new Vector2(-10, 10)]
        })

        /*ctx.lineTo(100, -50)
        ctx.lineTo(90, -40)
        ctx.lineTo(100, 50)
        ctx.lineTo(-100, 50)
        ctx.lineTo(-90, -40)
        ctx.lineTo(-90, -40)
        ctx.lineTo(-100, -50)*/
    }
}