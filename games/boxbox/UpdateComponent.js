class UpdateComponent extends Component{

    speed = 300
    timeSinceLastPunch

    start(){
        this.timeSinceLastPunch = 200
    }

    update(){
        this.timeSinceLastPunch += 1

        if(Input.keysDown.includes("KeyD") && this.transform.position.x <= window.innerWidth/2+200)
            this.transform.position.x += Time.deltaTime * this.speed // this.position.x + 1
        
        if(Input.keysDown.includes("KeyA") && this.transform.position.x >= window.innerWidth/2-200)
            this.transform.position.x -= Time.deltaTime * this.speed //this.position.x - 1

        if(Input.keysDown.includes("KeyW") && this.transform.position.y >= window.innerHeight/2-200 )
            this.transform.position.y -= Time.deltaTime * this.speed //this.position.y - 1

        if(Input.keysDown.includes("KeyS") && this.transform.position.y <= window.innerHeight/2+200)
            this.transform.position.y += Time.deltaTime * this.speed //this.position.y + 1

        if(this.timeSinceLastPunch > 200){
            if(Input.buttonsDown.includes(0)){
                instantiate(new FistGameObject(), this.transform.position.clone())
                this.timeSinceLastPunch = 0
            }
            
        }
    }

}