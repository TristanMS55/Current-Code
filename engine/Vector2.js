class Vector2{

    /**
     * @type{Number} the x component of the vector
     */

    x

    /**
     * @type{Number} the y component of the vector
     */

    y

    /**
     * 
     * @param {Number} x The x value of the new vector
     * @param {Number} y The y value of the new vector
     * 
     * a constructor is similar to __init__ in Python
     */

    constructor(x, y){

        //Assign incoming values to new instance
        this.x = x
        this.y = y
    }

    plus(other){
        return new Vector2(this.x + other.x, this.y + other.y)
    }
    minus(other){
        return new Vector2(this.x - other.x, this.y - other.y)
    }

    get magnitude(){
        return Math.sqrt(this.x**2 + this.y**2)
    }

    clone(){
        return new Vector2(this.x, this.y)
    }
}
