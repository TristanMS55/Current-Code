class UpdateComponent extends Component{

    speed = 300
    enemyCollisionTime
    start(){
        
    }

    fixedUpdate(){

        if(Input.keysDown.includes("KeyD") && this.transform.position.x <= 200)
            this.transform.position.x += Time.deltaTime * this.speed // this.position.x + 1
        
        if(Input.keysDown.includes("KeyA") && this.transform.position.x >= -200)
            this.transform.position.x -= Time.deltaTime * this.speed //this.position.x - 1

        if(Input.keysDown.includes("KeyW") && this.transform.position.y >= -200)
            this.transform.position.y -= Time.deltaTime * this.speed //this.position.y - 1

        if(Input.keysDown.includes("KeyS") && this.transform.position.y <= 200)
            this.transform.position.y += Time.deltaTime * this.speed //this.position.y + 1

        // console.log(LevelController.podiumOverlaps)
        // Camera.main.transform.position = this.transform.position.clone()

        // if (this.gameObject.getComponent(Health).health <= 0)
        //     this.gameObject.destroy()
        //     let fist = GameObject.find("Fist")
        //     fist.broadcastMessage("gameEnded")

    }

    onTriggerStay(other, minimumTransformVector){
        if(other.name == "Podium")
            LevelController.podiumOverlaps = true
    }

    onCollisionStay(other, minimumTransformVector){
        if(other.name == "Enemy"){
            this.enemyCollisionTime = 10
            let healthComponent = this.gameObject.getComponent(Health)
            healthComponent.health -= 1
            let gameObjects = GameObject.findGameObjectsByType(Transform)
            for(const gameObject of gameObjects){
                gameObject.broadcastMessage("updatePlayerHealth", [1])
            }
            while(this.enemyCollisionTime > 0){
                if (this.transform.position.x < other.transform.position.x){
                    this.transform.position.x -= Time.deltaTime * this.speed
                    this.enemyCollisionTime -= 1
                }
                if (this.transform.position.y > other.transform.position.y){
                    this.transform.position.y += Time.deltaTime * this.speed
                    this.enemyCollisionTime -= 1
                }
                if (this.transform.position.x > other.transform.position.x){
                    this.transform.position.x += Time.deltaTime * this.speed
                    this.enemyCollisionTime -= 1
                }
                if (this.transform.position.y < other.transform.position.y){
                    this.transform.position.y -= Time.deltaTime * this.speed
                    this.enemyCollisionTime -= 1
                }
            }
        }
    }
    
    
}