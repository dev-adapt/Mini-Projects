const actualNum=7;
let num=prompt("enter the guessing number");
while(actualNum!=num){
    num=prompt("enter the guessing number again as you guessed the wrong earlier");
}
console.log("congratulations,you guessed the right number");