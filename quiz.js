const quiz = document.querySelector(".quiz-from");
const submitButton = document.querySelector("#submit-button");
const outputResult = document.querySelector("#quiz-result");
const quizAnswer = ["3", "scalene triangle", "right angle triangle",
 "AB = PQ", "138°", "75 cm2", "Obtuse Angle", "HYPOTENUSE"];

function checkAnswer(){
    
    let score = 0;
    let idx = 0;
    //console.log(idx);
    const formResult = new FormData(quiz);
    for(let value of formResult.values()){
        //console.log(value)
        if(value === quizAnswer[idx]){
            console.log(value); 
            score++;
            console.log("score" + score)
        }
        idx++;
        console.log(idx);
    }
    outputResult.innerText = "your score is " + score;
   
}

submitButton.addEventListener("click" , checkAnswer);