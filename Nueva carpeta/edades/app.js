var ageClass = function(age){
	age = number(age);
	if(age % 1 !== 0 || age === NaN){
         alert("Ingresa tu edad con un número entero");
         return"";
	}

	if(age >=1 && age <=3){
		return "Toddler";
	}else if(age <=5){
		return"Preschool"
	}else if(age <=12){
		return"Gradescool"
	}else if(age <=18){
		return"Teenager"
	}else if(age <=21){
		return"Young adult"
	}else{
		return"Adult"
	}

}
//hacker
//alert(ageClass(prompt()));

//humano
var userInput= prompt("Que edad tienes");
var classi = ageClass(parseint(userInput));
alert(classi);