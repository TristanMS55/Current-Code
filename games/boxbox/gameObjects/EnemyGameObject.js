class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"])
        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.triangle})
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:6})
        this.transform.scale = new Vector2(4, 4)
    }
}