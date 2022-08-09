function main(object) {
    if (typeof object !== 'string') {
        alert("Неверный тип")
    }
    else {
        if (object.length > 30) {
            return object.slice(30) + "..." 
        }
        else {
           return object.trim()
        }
    }
}

console.log(main('objectobjectobjectobjectobjectobjectobjectobjectobjectobjectobjectobjectobjectobjectobject'));
