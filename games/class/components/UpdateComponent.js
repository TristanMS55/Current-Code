class UpdateComponent extends Component{
    
    speed = 200
    timeSinceLastLaser

    start(){
        this.timeSinceLastLaser = 0
    }

    update() {

        this.timeSinceLastLaser += 1
            
        //console.log(Input.keysDown)

        if(Input.keysDown.includes("KeyD"))
            this.transform.position.x += Time.deltaTime * this.speed // this.position.x + 1
        
        if(Input.keysDown.includes("KeyA"))
            this.transform.position.x -= Time.deltaTime * this.speed //this.position.x - 1

        if(Input.keysDown.includes("KeyW"))
            this.transform.position.y -= Time.deltaTime * this.speed //this.position.y - 1

        if(Input.keysDown.includes("KeyS"))
            this.transform.position.y += Time.deltaTime * this.speed //this.position.y + 1

        
        if(this.timeSinceLastLaser > 20){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
    }
}