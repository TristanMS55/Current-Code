class Level01 extends Scene{
    constructor(){
        super()
        Globals.levelCount += 1
        this.instantiate(new EnemyGameObject(), new Vector2(100, 0))
        this.instantiate(new LevelControllerGameObject())
    }
}