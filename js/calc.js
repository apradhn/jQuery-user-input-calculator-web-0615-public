'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator() {
  var numberOne = $("#number1"), numberTwo = $("#number2"), operation = $("#operation"), equals = $("#equals"), result = $("#result");
  var value, numberError = "Sorry, one of those is not a valid number!", operatorError = 'Sorry, not a valid operation!';
  resultValue = result.text();
  var one, two, operator, calculation;
  var symbols = ["+", "-", "/", "*"];

  var add = function(a, b) { return a + b; }
  var subtract = function(a, b) { return a - b; }
  var divide = function(a, b) { return a / b; }
  var multiply = function(a, b) { return a * b; }

  function getOperation(operator) {
    switch(operator) {
      case "+": 
        return add;
      case "-": 
        return subtract;
      case "/":
        return divide;
      case "*":
        return multiply;
      default: 
      return "Something's not right...";
    }
  }

  function calculate(a, b, operation) { return operation(a, b); }

  function invalidOperator(operator) {
    return !(symbols.some(function(sym) { return sym === operator; }));
  }  

  equals.click(function() {
    one = parseInt(numberOne.val()), two = parseInt(numberTwo.val()), operator = operation.val();
    console.log(one);
    if (isNaN(one) === true || isNaN(two) === true) { result.text(numberError); } 
    else if (invalidOperator(operator) === true) { result.text(operatorError); } 
    else {
      calculation = calculate(one, two, getOperation(operator));
      result.text(calculation);
    }
  });

}