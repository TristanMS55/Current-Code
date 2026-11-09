class LightningChoiceObject extends GameObject{
    constructor(){
        super("LightningChoice", ["Choice"], "choice")
        this.addComponent(new Polygon(), {fillStyle:["blue"], points: Assets.bolt})
    }
}