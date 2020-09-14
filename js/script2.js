function isTeenager(age){
    this.age = age;
    if(age <= 19){
        return true;
    }else{
        return false;
    }
}

console.log(isTeenager(18));