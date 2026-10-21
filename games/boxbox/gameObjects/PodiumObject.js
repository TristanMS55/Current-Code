class PodiumObject extends GameObject{
    constructor(){
        super("Podium", [], "platform")
        this.addComponent(new Polygon(), {fillStyle:"brown", points: Assets.square})
    }
}