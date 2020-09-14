class Rectangle{
    constructor(height, width){
        this.height = height;
        this.length = width;
    }

    get area(){
        return this.computearea();
    }

    computearea(){
        return this.length * this.height;
    }
}

const rec = new Rectangle(10,25)

console.log(rec.area)