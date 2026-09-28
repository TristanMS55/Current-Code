class EnemyController extends Component{
    direction = 1
    update(){
        this.transform.position.y += Time.deltaTime * 100 * this.direction
        if (this.transform.position.y > 500){
            this.direction = -1
        }
        if (this.transform.position.y < 300)
            this.direction = 1
        if (this.gameObject.getComponent(Health).health <= 0)
            this.gameObject.destroy()
    }
}