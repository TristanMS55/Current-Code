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

        
        if(this.timeSinceLastLaser > 20 && Input.keysDown.includes("Space")){
            this.timeSinceLastLaser = 0
            let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
            laserGameObject.getComponent(Polygon).fillStyle = "#FF991180"
        }

        Camera.main.transform.position = this.transform.position.clone()
    }
}