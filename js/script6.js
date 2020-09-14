class Cinema{
    constructor(name, location, capacity){
        this.name = name;
        this.location = location;
        this.capacity = capacity;
        this.displayInfo = function(){
            console.log(`${this.name} :: ${this.location} :: ${this.capacity}`);
        }
    }
}

let Cinema1 = new Cinema("End Game.", "Cinema 1", "80");
Cinema.prototype.show = function(){
    console.log(`${this.location} is showing ${this.name}`);
}

console.log(Cinema1);
Cinema1.show();