let myself = {
    firstname: 'Elisha James',
    lastname: 'Honorica',
    age: 20,
    subject: 'ICS2609',
    introduce(){
        return "Hello, I am" + ' ' +this.firstname + ' ' + this.lastname + ".";
    },

    enrolled(){
        return "I am enrolled in" + ' '+ this.subject + ".";
    }
};

console.log(myself.introduce());
console.log(myself.enrolled());