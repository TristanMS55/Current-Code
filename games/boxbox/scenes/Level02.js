class Level02 extends Scene{
    constructor(){
        super()
        // this.instantiate(new EnemyGameObject(), new Vector2(window.innerWidth/2+100,window.innerHeight/2+100))
        Globals.levelCount += 1
        this.instantiate(new EnemyGameObject(), new Vector2(100,0))
        this.instantiate(new LevelControllerGameObject())
        
        //EnemyGameObject.components.Health.health *= 2

    }
}