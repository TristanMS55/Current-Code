class PodiumObject extends GameObject{
    constructor(){
        super("Podium", ["Podium"], "platform")
        this.addComponent(new Polygon(), {fillStyle:"brown", points: Assets.square})
        this.addComponent(new Collider())
    }
}