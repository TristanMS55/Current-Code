class Input{
    static keysDown = []
    static buttonsDown = []

    static keydown(event){
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
    }

    static keyup(event){
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index,1)
    }

    static mousedown(event){
        if(!Input.buttonsDown.includes(event.button))
            Input.buttonsDown.push(event.button)
    }

    static mouseup(event){
        let index = Input.keysDown.indexOf(event.button)
        Input.keysDown.splice(index,1)
    }
}