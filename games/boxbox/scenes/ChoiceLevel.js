class ChoiceLevel extends Scene{
    constructor(){
        super()
        
        this.instantiate(new LevelControllerGameObject())
        
        let instructionText = new GameObject('InstructionText', [], "UI")
        instructionText.addComponent(new TextLabel(), {fillStyle: "black", text: "Choose an Upgrade", font: "30px Times"})
        this.instantiate(instructionText, new Vector2(window.innerWidth/2, window.innerHeight-40))

        this.instantiate(new PodiumObject(), new Vector2(100, 150))
        this.instantiate(new PodiumObject(), new Vector2(100, 50))
        this.instantiate(new PodiumObject(), new Vector2(100, -50))
        this.instantiate(new PodiumObject(), new Vector2(100, -150))
    }
}