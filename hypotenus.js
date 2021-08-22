const sideAngle = document.querySelectorAll(".side-angle");
const checkButton = document.querySelector("#check-button");
const outputMessage = document.querySelector("#output-message");
function calculateSumOfSquare(a,b){
    const sum = a*a + b*b;
    return sum;
}

function claculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquare(Number(sideAngle[0].value),
    Number(sideAngle[1].value))
     const lenghtOfHypotenuse = Math.sqrt(sumOfSquare);
     outputMessage.innerText = "Lenght of Hypotenuse is :" + lenghtOfHypotenuse;
}

checkButton.addEventListener("click", claculateHypotenuse)
