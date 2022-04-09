function calculateTip(){
    let bill = Number(prompt("How much is the bill?"));
    let tip = 0;
    if(bill<= 50){
        tip = bill * 0.2;
    } else if (bill > 50 && bill <= 200){
        tip = bill * 0.15;
    } else {
        tip = bill * 0.1;
    }
    this.tip = tip;
    this.bill = bill;
    this.totalbill = tip + bill;
    var answer = "your total bill is $" + (this.totalbill) + ", thanks"
    return answer;

}
calculateTip();
function isDivisible(divisor){
    let sum = 0
    let allNumbers = [];
    for(let i=0 ; i <= 500; i++){
        if (i % divisor == 0){
           allNumbers.push(i)
            sum += i;
        }
    }
    console.log(allNumbers);
    return allNumbers;
    console.log(sum);
}
isDivisible(23)
isDivisible(3)
isDivisible(45)

