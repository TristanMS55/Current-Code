class PlayerHealthbarController extends Component{
    update(){
        this.gameObject.getComponent(TextLabel).text = "Filler Healthbar: " + Globals.playerHealth
    }

    updatePlayerHealth(delta){
        Globals.playerHealth -= delta
    }
}