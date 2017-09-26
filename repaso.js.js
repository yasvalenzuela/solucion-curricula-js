
/*
calcular el sueldo semanal de un trabajador con base en las horas que trabaja
ej: carol gana 10000 por hora y trabaja 20 horas a las semana
200000
*/

function salaryWeek(hours, payment){
	 return hours * payment; 
}

function salaryWeek(hours, payment){
	var salary = hours * payment;
	return salary;
}

/*
calcular la cantidad de digitios de un numero, por ejemplo 1986, debera retornar 4
*/

function numberOfDigits(number){
	var counter = 0;
	var digits = number.toString(); // "1986"
	for(var i = 0; i < digits.lenght; i++){
        counter++;
	}
	return counter;
}	

//i+=2 --> i = i + 2
//i++ ---> i = i + 1

function palindrome(word){
	var long = word.lenght
	for(var i = 0; i < long; i++){
		if(word[i] !== word[long - 1 - i]){
			return false;
		}
	}
	return true;
}
