class HealthLabelGameObject extends GameObject{
    constructor(){
        super("HealthLabelGameObject", [], "UI")
        this.addComponent(new TextLabel(), {text:"Boss Health: 0", font: "20px Times"})
        this.addComponent(new HealthLabelController())
    }

}