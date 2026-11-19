class PodiumObject extends GameObject{
    constructor(){
        super("Podium", ["Podium"], "podium")
        this.addComponent(new Polygon(), {fillStyle:"brown", points: Assets.square})
        this.addComponent(new Collider(), {isTrigger: true})
        this.addComponent(new RigidBody())
    }
}