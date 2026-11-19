class FistController extends Component{
    punchTime = 0
    punchOccurred = false
    hitOccurred = false
    timeSinceLastPunch
    start(){
        this.timeSinceLastPunch = 100
    }

    fixedUpdate(){
        this.timeSinceLastPunch += 1
    }
    update(){
        if((Input.buttonsDown.includes(0) || this.punchOccurred == true) && this.timeSinceLastPunch > 100){
            this.punchTime += Time.deltaTime * 60
            if(this.punchTime < Time.deltaTime*60*20){
                this.transform.position.x += 4
                this.punchOccurred = true
            }
            else if(this.punchOccurred && this.punchTime < Time.deltaTime*60*39){
                this.transform.position.x -= 4
            }
            else{
                this.punchTime = 0
                this.punchOccurred = false
                this.hitOccurred = false
                this.timeSinceLastPunch = 0
            }

            // let myPosition = this.transform.position
            // let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")
            // for (const enemyGameObject of enemyGameObjects){
            //     let enemyPosition = enemyGameObject.transform.position
            //     let distance = myPosition.minus(enemyPosition).magnitude
            //     if(distance < 60 && this.punchTime >= this.punchTime*10){
            //         let healthComponent = enemyGameObject.getComponent(Health)
            //         healthComponent.health -= 1
            //         let gameObjects = GameObject.findGameObjectsByType(Transform)
            //         for(const gameObject of gameObjects){
            //             gameObject.broadcastMessage("updatePoints", [1])
            //             gameObject.broadcastMessage("updateBossHealth", [1])
            //         }
            //     }
            // }
        }
    }

    gameEnded(){
        this.gameObject.destroy()
    }

    onTriggerStay(other, minimumTransformVector){
        if (other.name == "Enemy"){
            if (this.hitOccurred == false){
                this.hitOccurred = true
                let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")
                for (const enemyGameObject of enemyGameObjects){
                    let healthComponent = enemyGameObject.getComponent(Health)
                    healthComponent.health -= 1
                    let gameObjects = GameObject.findGameObjectsByType(Transform)
                    for(const gameObject of gameObjects){
                        gameObject.broadcastMessage("updatePoints", [1])
                        gameObject.broadcastMessage("updateBossHealth", [1])
                    }
                }
            }
        }
    }
}