'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator() {
  var numberOne = $("#number1"), numberTwo = $("#number2"), operation = $("#operation"), equals = $("#equals"), result = $("#result");
  var value, numberError = "Sorry, one of those is not a valid number!", operatorError = 'Sorry, not a valid operation!';
  resultValue = result.text();
  var one, two, operator;
  var symbols = ["+", "-", "/", "*"];

  equals.click(function() {
    one = numberOne.val(), two = numberTwo.val(), operator = operation.val();
    console.log(one);
    if (invalidNumber(one) === true || invalidNumber(two) === true) { 
      result.text(numberError); 
    } else if (invalidOperator(operator) === true) {
      result.text(operatorError);
    } else {
      result.text(resultValue);
    }
  });

  function invalidNumber(value) {
    return isNaN(parseInt(value));
  }

  function invalidOperator(operator) {
    return !(symbols.some(function(sym) { 
      return sym === operator; 
    }));
  }
}