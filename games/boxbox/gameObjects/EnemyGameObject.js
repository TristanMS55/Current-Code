class EnemyGameObject extends GameObject{
    health = 2 * Globals.levelCount
    constructor(){
        super("Enemy", ["Enemy"], "fighters")
        this.addComponent(new Polygon(), {fillStyle: "brown", points:Assets.triangle})
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:this.health})
        this.transform.scale = new Vector2(4, 4)
    }
}