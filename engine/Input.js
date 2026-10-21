class Input{
    static keysDown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static buttonsDown = []
    static buttonsDownThisFrame = []
    static buttonsUpThisFrame = []

    static mousePosition
    static mousePositionLastFrame
    static mouseDelta

    static mousemove(event){
        if(Input.mousePosition){
            Input.mousePositionLastFrame = Input.mousePosition
        }
        Input.mousePosition = new Vector2(event.clientX, event.clientY)
        if (Input.mousePositionLastFrame){
            Input.mouseDelta = Input.mousePosition.minus(Input.mousePositionLastFrame)
        }

    }


    static keydown(event){
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
            Input.keysDownThisFrame.push(event.code)
    }

    static keyup(event){
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index,1)
        Input.keysUpThisFrame.push(event.code)
    }

    static mousedown(event){
        if(!Input.buttonsDown.includes(event.button))
            Input.buttonsDown.push(event.button)
            Input.buttonsDownThisFrame.push(event.button)
    }

    static mouseup(event){
        let index = Input.buttonsDown.indexOf(event.button)
        Input.buttonsDown.splice(index,1)
        Input.buttonsUpThisFrame.push(event.button)
    }

    static update(){
        Input.keysDownThisFrame = []
        Input.keysUpThisFrame = []
        Input.buttonsDownThisFrame = []
        Input.buttonsUpThisFrame = []
    }
}