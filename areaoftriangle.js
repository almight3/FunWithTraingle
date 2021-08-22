const baseHieght = document.querySelectorAll(".base-hieght");

const checkButton = document.querySelector("#check-button");
const outputMessage = document.querySelector("#message");
function calculateHieghtBase(a, b){
    const hieghtBase = 1/2 * (a*b);
    return hieghtBase;
}
function calculateAreaOfTriangle(){
  const bh = calculateHieghtBase(Number(baseHieght[0].value), 
        Number(baseHieght[1].value))
      outputMessage.innerText = "area of traingle :" + bh;
   console.log(bh)  

}

checkButton.addEventListener("click", calculateAreaOfTriangle)