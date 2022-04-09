let x = 5
let y = 2
if(x > y) {
    console.log(x + " is bigger than " + y)
}
else if(x < y) {
    console.log(y + " is bigger than " + x)
}
else {
    console.log( x + " is equal to " + y )
}

let newdog = "teo"
let dog 
let lettercount = newdog.length
console.log(lettercount) 
console.log(newdog.toLowerCase())
console.log(newdog.toUpperCase())
dog = prompt("Whats the name of your dog?")
if(newdog == dog){
    alert("I love Teo, He is my dog")
}
else{
    alert("I hate all the dogs that are not Teo")
}
