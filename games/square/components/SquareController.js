class SquareController extends Component{
  speed = 200
  start(){
    
  }

  update(){
    if(Input.keysDown.includes("KeyD"))
      this.transform.position.x += Time.deltaTime * this.speed // this.position.x + 1
    
    if(Input.keysDown.includes("KeyA"))
      this.transform.position.x -= Time.deltaTime * this.speed //this.position.x - 1

    if(Input.keysDown.includes("KeyW"))
      this.transform.position.y -= Time.deltaTime * this.speed //this.position.y - 1

    if(Input.keysDown.includes("KeyS"))
      this.transform.position.y += Time.deltaTime * this.speed //this.position.y + 1
  }
}
