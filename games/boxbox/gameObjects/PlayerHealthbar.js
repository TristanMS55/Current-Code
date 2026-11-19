class PlayerHealthbar extends GameObject{
    constructor(){
        super("PlayerHealthbar", [], "UI")
        this.addComponent(new TextLabel(), {text:"Filler Healthbar: 0", font: "20px Times"})
        this.addComponent(new PlayerHealthbarController())
    }
}