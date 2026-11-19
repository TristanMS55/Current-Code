class FistGameObject extends GameObject{
    
    constructor(){
        super("Fist", [], "fists")
        this.addComponent(new FistController())
        this.addComponent(new Polygon(), {fillStyle:"black", points:Assets.triangle})
        this.addComponent(new Collider(), {isTrigger: true})
        this.addComponent(new RigidBody())
        
        
    }
}