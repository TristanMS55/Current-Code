class Engine {
    static canvas

    static ctx

    static currentScene

    static start() {
        Engine.canvas = document.querySelector("#canv")


        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)

        Engine.currentScene.start()

        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
        //update and draw
        Engine.update()
        Engine.draw()
        
        Time.update()

        //...then call game loop again next time browser can
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        //update()
        Engine.currentScene.update()
    }

    static draw() {
        //Expand the Size of the Canvas
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        //draw(Engine.ctx)
        Engine.currentScene.draw(Engine.ctx)
    }
}