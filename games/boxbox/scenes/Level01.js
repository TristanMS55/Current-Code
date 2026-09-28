class Level01 extends Scene{
    constructor(){
        super()
        this.instantiate(new EnemyGameObject(), new Vector2(window.innerWidth/2+100,window.innerHeight/2+100))
        this.instantiate(new LevelControllerGameObject())
    }
}