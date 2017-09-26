var add = function(num1, num2) {
	return numb1 + numb2
}

var multiply = function(num1, num2){
	return numb1 * numb2
}
//36325 * (9824 + 777)
//esto es una manera mas ordenada de hacerlo
var sum = add(9824, 777);
var result = multiply(36325, sum);
//esto es una manera de hacerlo mas hacker
var hacker = multiply(36325, add(9824, 777));