class FistController extends Component{
    punchTime = 0
    update(){
        this.punchTime += Time.deltaTime * 60
        if(this.punchTime < Time.deltaTime*60*10)
            this.transform.position.x += 4
        else{
            this.gameObject.destroy()
            this.punchTime = 0
        }

        let myPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")
        for (const enemyGameObject of enemyGameObjects){
            let enemyPosition = GameObject.find("Enemy").transform.position
            let distance = myPosition.minus(enemyPosition).magnitude
            if(distance < 60 && this.punchTime >= this.punchTime*10){
                let healthComponent = enemyGameObject.getComponent(Health)
                healthComponent.health --
                let gameObjects = GameObject.findGameObjectsByType(Transform)
                for(const gameObject of gameObjects)
                    gameObject.broadcastMessage("updatePoints", [1])
            }
        }
    }
}