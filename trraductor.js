const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const translateButton = document.getElementById('translateButton');
let vowels = ['a', 'e', 'i', 'o', 'u']; // Solo 5 elementos - sin mayúsculas

// Tarea 14: Cambiar la frase de entrada
let input = "Ya Doli con el padre han encontrado a su querido hijo";

// Tarea 3: Crear resultArray como matriz vacía
let resultArray = [];

// Bucle externo - recorre cada carácter del input
for (let i = 0; i < input.length; i++) {
  // Tarea 5: Registrar la posición del iterador para comprobar el funcionamiento
  // console.log(i); // Comentado después de comprobar que funciona
  
  // Tarea 10: Verificar si la letra es 'e' y duplicarla
  if (input[i].toLowerCase() === 'e') {
    resultArray.push(input[i]);
  }
  
  // Tarea 11: Verificar si la letra es 'u' y duplicarla
  if (input[i].toLowerCase() === 'u') {
    resultArray.push(input[i]);
  }
  
  // Tarea 6: Bucle for anidado - recorre la matriz vowels
  for (let j = 0; j < vowels.length; j++) {
    // Tarea 7: Registrar las posiciones del iterador interno
    // console.log(j); // Comentado para no saturar la consola
    
    // Tarea 8: Comparar las letras del input con las vocales
    if (input[i].toLowerCase() === vowels[j]) {
      // Tarea 9: Agregar las letras coincidentes a resultArray
      resultArray.push(input[i]);
    }
  }
}

// Tarea 13: Crear resultString - juntar y poner en mayúsculas
let resultString = resultArray.join('').toUpperCase();

// Tarea 12: Registrar resultArray en la consola (parte inferior del programa)
console.log("Resultado final - resultArray:", resultArray);

// Tarea 13: Mostrar resultString
console.log("Resultado final - resultString:", resultString);