class LevelController extends Component{
    static podiumOverlaps = false
    start(){
        SceneManager.loadScene(GenericLevel, true)
    }
    update(){
        let player = GameObject.find("Main")
        let enemy = GameObject.find("Enemy")
        let podiums = GameObject.findGameObjectsWithTag("Podium")
        
        for(const podium of podiums){
            if (Collisions.isCollisionPolygonPolygon(player, podium) == true){
                podiumOverlaps = true
            }
        }
        if(!enemy && Globals.level%2 == 0){
            Globals.level += 1
            SceneManager.loadScene(Globals.levelList[Globals.level])
        }
        else if(this.podiumOverlaps == true && Globals.level%2 == 1){
            Globals.level += 1
            SceneManager.loadScene(Globals.levelList[Globals.level])
        }
    }

}