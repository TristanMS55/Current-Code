class Time{
    static deltaTime = 1/60
    static time = 0
    static timeScale = 1

    static update(){
        Time.time += Time.deltaTime
    }
}