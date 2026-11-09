class Polygon extends Component {

    fillStyle = ["magenta"]
    points = []

    draw(ctx) {

        let position = this.transform.position

        //Signaling to the context that I'm going to draw something
        ctx.save()

        //Set center of our object
        // ctx.translate(position.x, position.y)
        // ctx.rotate(this.transform.rotation)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)

        ctx.beginPath()
        for(let i = 0; i < this.points.length; i++){
            ctx.fillStyle = this.fillStyle[i]
            for(const point of this.points[i]){
                ctx.lineTo(point.x, point.y)
            }
            ctx.fill()
            ctx.beginPath()
        }

        //tell canvas to draw object

        //Signaling that I'm done drawing
        ctx.restore()
    }
}