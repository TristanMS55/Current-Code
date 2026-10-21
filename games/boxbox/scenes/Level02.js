class Level02 extends Scene{
    constructor(){
        super()
        // this.instantiate(new EnemyGameObject(), new Vector2(window.innerWidth/2+100,window.innerHeight/2+100))
        if (Globals.levelCount == 1)
            Globals.levelCount += 1 
        this.instantiate(new EnemyGameObject(), new Vector2(100,0))
        this.instantiate(new LevelControllerGameObject())
        this.instantiate(new HealthLabelGameObject(), new Vector2(window.innerWidth/2, window.innerHeight-40))
        //EnemyGameObject.components.Health.health *= 2

    }
}