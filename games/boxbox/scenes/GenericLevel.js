class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(-100,0))
        this.instantiate(new PointsGameObject(), new Vector2(0,20))
        this.instantiate(new RingObject(), new Vector2(0,0))
        Camera.main.backgroundColor = "cyan"
    }
}