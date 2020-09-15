var numberEle = document.body.querySelector(".number")
var answerEle = document.body.querySelector(".answer")

var numberOne = Number (prompt("Enter a number"))
var numberTwo = Number (prompt("Enter a number"))

answerEle.innerHTML = numberOne+numberTwo;