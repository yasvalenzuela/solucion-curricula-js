// tamaño de la cuadricula primero fue var size 8 y luego se hace el parseint
var size = parseInt(prompt('¿Cual sera el tamaño de tu cuadricula?'));

//creando la cuadricula
var result = '';

for (var row = 1; row <= size; row++) {
  for (var column = 1; column <= size; column++) {
  	if ((column + row) % 2 === 0) {
  		result += ' ';
  	} else { 
      result += '#';
  	}
  }	
 
result += '\n';
 }
 console.log(result);