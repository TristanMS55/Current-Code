class Level01 extends Scene{
    constructor(){
        super()
        if (Globals.levelCount == 0)
            Globals.levelCount += 1 
        this.instantiate(new EnemyGameObject(), new Vector2(100, 0))
        this.instantiate(new LevelControllerGameObject())
        this.instantiate(new HealthLabelGameObject(), new Vector2(window.innerWidth/2, window.innerHeight-40))
    }
}