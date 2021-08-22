const anglesInput = document.querySelectorAll(".angles");
const checkButton = document.querySelector("#check-button");
const outputMessage = document.querySelector("#output-message");

checkButton.addEventListener("click", isTraingle)

function calculateSumOfTraingle(angle1, angle2, angle3){
        let sum  = angle1 + angle2 + angle3;
        return sum;
}

function isTraingle(){
    const  sumOfTraingle = calculateSumOfTraingle(Number(anglesInput[0].value),
    Number(anglesInput[1].value), Number(anglesInput[2].value));
    
    if(sumOfTraingle === 180){
        outputMessage.innerText = "Angles forms a Triangle";
        console.log("true")
    }
    else{
        outputMessage.innerText = "Angles won't form a Triangle";
        console.log("false")
    }
    
}