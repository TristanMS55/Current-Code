class MainGameObject extends GameObject{
    health = Globals.healthStat + 2
    constructor(){
        super("Main", [], "fighters")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"tan", points:[
            new Vector2(25,25),
            new Vector2(25,-25),
            new Vector2(-25,-25),
            new Vector2(-25,25)
        ]})
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())

        this.addComponent(new Health(), {health:this.health})
        Globals.playerHealth = this.health
    }
}