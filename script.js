const display = document.getElementById("screen");
const num = document.querySelectorAll(".buttons button");
const numarr = Array.from(num);

numarr.map(button =>button.addEventListener("click",function(){

    if(button.innerText !== "="){
        display.innerText += button.innerText
    };

    if(button.innerText=== "="){
        display.innerText=eval(display.innerText)
    };
    if(button.innerText === "clear"){
        display.innerText=""
    };

}))
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(47>keyCode<58 && keyCode<58) {
  } else {
  alert("Only numbers are allowed");
  }
}
