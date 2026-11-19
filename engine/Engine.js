class Engine {
    static canvas

    static ctx

    static layers = ["default", "UI"]

    static collisionLayers = []

    static aspectRatio

    static cameraWidthInWorldSpace

    static letterBoxingWidth = 0
    static letterBoxingHeight = 0

    static lastTimeStep

    static start(nextScene, settings) {
        Engine.canvas = document.querySelector("#canv")


        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)
        addEventListener("mousemove", Input.mousemove)

        SceneManager.nextScene = nextScene

        if(settings){
            Engine.layers = settings.layers
            Engine.aspectRatio = settings.aspectRatio
            Engine.cameraWidthInWorldSpace = settings.cameraWidthInWorldSpace
            if(settings.collisionLayers){
                Engine.collisionLayers = settings.collisionLayers
            }
        }

        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop(timestamp) {
        // if(!Engine.lastTimeStep){
        //     Engine.lastTimeStep = timestamp
        // }
        // else{
        //     const diffInMilliseconds = timestamp - Engine.lastTimeStep
        //     const diffInSeconds = diffInMilliseconds / 1000
        //     Time.deltaTime = diffInSeconds
        //     //Time.deltaTime = Math.min(diffInSeconds, 1/60)
        //     Engine.lastTimeStep = timestamp
        // }
        SceneManager.update()
        //update and draw
        Engine.update()
        Engine.draw()
        
        Time.update()
        Input.update()

        //...then call game loop again next time browser can
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        //update()
        SceneManager.currentScene.start()
        SceneManager.currentScene.update()
    }

    static draw() {
        //Expand the Size of the Canvas
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        //draw(Engine.ctx)
        SceneManager.currentScene.draw(Engine.ctx)
    }
}