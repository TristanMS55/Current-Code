class LevelController extends Component{

    level = 0
    start(){
        SceneManager.loadScene(GenericLevel, true)
    }
    update(){
        let enemyGameObject = GameObject.find("Enemy")
        let podium = GameObject.find("Podium")
        // if(!enemyGameObject && this.level%2 == 1){
        //     SceneManager.loadScene(ChoiceLevel)
        //     this.level += 1
        // }
        if(!enemyGameObject){
            this.level += 1
            SceneManager.loadScene(Globals.levelList[this.level])
        }
        
    }

}