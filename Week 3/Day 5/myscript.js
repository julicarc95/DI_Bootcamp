let people = ["Greg","Mary","Devon","James"]
people.splice(people.indexOf("Greg"),1)
people.splice(people.indexOf("James"),1,"Jamon")
people.push("Julian")
// step 1
// find the element i dont want positioned
//step 2
//get the array from 0 up to the position i want to exclude add it to a variable
//step 3
//get the array from the pos i want to exclude up to the end
//step 4 
//merge step 2&3 

let mary = people.indexOf("Mary")
let currMe = "Julian"
let newpeople = people.slice(0,mary)
let newpeople2 = people.slice(mary + 1)
let concatarray = newpeople.concat(newpeople2)
let julian = concatarray.indexOf(currMe)
let newpeople3 = concatarray.slice(0,julian)
let newpeople4 = concatarray.slice(julian + 1)
concatarray = newpeople3.concat(newpeople4)
console.log(concatarray)


for (let i=0; i<newpeople.length; i++){
    console.log(newpeople[i]);
    if (newpeople === "Jamon")break;
}

let favColor = ["green","yellow","blue","grey","white"]
for(let i = 0; i < favColor.length; i++){
    console.log(i)
    let suffix 
    switch(i){
        case 0: 
        suffix = "st"
            break;
        case 1: 
        suffix = "nd"
            break;       
        case 2: 
        suffix = "rd"
            break; 
        default: 
        suffix = "th"
    }
  //  sentence+= "my $i + 1}${suffix} is ${favColor[i]}"
}
//console.log(sentence)


let num = Number(prompt("Say number"))
while(num<10 || isNaN(num)){
    num = prompt("Say number")
}
console.log(num)


