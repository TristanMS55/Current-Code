class BurnChoiceObject extends GameObject{
    constructor(){
        super("BurnChoice", ["Choice"], "choice")
        this.addComponent(new Polygon(), {fillStyle:"orange", points: Assets.square})
    }
}