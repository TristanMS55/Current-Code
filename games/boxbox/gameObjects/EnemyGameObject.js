class EnemyGameObject extends GameObject{
    health = 2 * Globals.levelCount
    enemyType = Globals.enemyList[Math.floor(Math.random()*Globals.enemyList.length)]
    constructor(){
        super("Enemy", ["Enemy"], "fighters")
        if(this.enemyType == "Triangle"){
            this.addComponent(new Polygon(), {fillStyle: ["brown"], points: Assets.triangle})
        }
        if(this.enemyType == "Rectangle"){
            this.addComponent(new Polygon(), {fillStyle: ["white"], points: Assets.rectangle})
        }
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:this.health})
        
        this.transform.scale = new Vector2(4, 4)
        Globals.bossHealth = this.health
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())
    }
}