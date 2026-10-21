class HealthLabelController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).text = "Boss Health: " + Globals.bossHealth
    }

    updateBossHealth(delta){
        Globals.bossHealth -= delta
    }
}