let favoritefood = "burguer"
let favoritemeal = "dinner"
console.log("I eat " + [favoritefood] + " at every " + [favoritemeal])


let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = " " + myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2] + "."
console.log("I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence)

myWatchedSeries.pop()
myWatchedSeries.push("friends")
myWatchedSeries.push("breaking bad")
myWatchedSeries.unshift("Game of thrones")
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1])
console.log(myWatchedSeries)


//Daily Challenge
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift()
fruits.sort()
fruits.push("kiwi")
fruits.shift()


