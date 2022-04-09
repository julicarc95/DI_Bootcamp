let userchoice = Number(prompt("Please give me a number to begin counting down bottles"))
let bottles = userchoice
let brokenbottles = 1 
for(i= 1; i < bottles; i++){
    let itOrThem = i > 1 ? "them" : "it"
        console.log(bottles + " bottles of beer on the wall " +
            bottles + " bottles of beer ")
            bottles = bottles - i    
            console.log("Take " + i +" down, pass " + itOrThem + " around " +
            bottles +" bottles of beer on the wall")
    }
    console.log(bottles + " bottles of beer on the wall " +
    bottles + " bottles of beer " + "Take " + bottles +" down, pass it around " +
    " no bottle of beer on the wall")
