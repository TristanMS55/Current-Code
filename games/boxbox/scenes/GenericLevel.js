class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(-100,0))
        this.instantiate(new PointsGameObject(), new Vector2(0,20))
        //this.instantiate(new ClockGameObject(), new Vector2 (window.innerWidth/2, window.innerHeight/2))
        this.instantiate(new RingObject(), new Vector2(0,0))
        Camera.main.backgroundColor = "gray"

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new TextLabel(), {fillStyle: "black", font: "30px Times"})
        sceneTimer.addComponent(new SceneTimerController())
        this.instantiate(sceneTimer, new Vector2(0, 50))
    }
}