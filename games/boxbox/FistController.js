class FistController extends Component{
    punchTime = 0
    update(){
        this.punchTime += Time.deltaTime * 60
        if(this.punchTime < 10)
            this.transform.position.x += 4
        else{
            this.gameObject.destroy()
            this.punchTime = 0
        }
    }
}