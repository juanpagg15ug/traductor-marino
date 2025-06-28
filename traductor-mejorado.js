// ============================================
// TRADUCTOR AL LENGUAJE MARINO - VERSIÓN MEJORADA
// ============================================

// Configuración
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
const DOUBLED_VOWELS = new Set(['e', 'u']);

// Referencias a elementos DOM (si existen)
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const translateButton = document.getElementById('translateButton');

// Texto de entrada
let input = "Ya Doli con el padre han encontrado a su querido hijo";

// ============================================
// VERSIÓN ORIGINAL (comentada para comparación)
// ============================================
/*
function translateToMarineOriginal(text) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let resultArray = [];
    
    for (let i = 0; i < text.length; i++) {
        // Duplicar 'e'
        if (text[i].toLowerCase() === 'e') {
            resultArray.push(text[i]);
        }
        
        // Duplicar 'u'
        if (text[i].toLowerCase() === 'u') {
            resultArray.push(text[i]);
        }
        
        // Buscar vocales
        for (let j = 0; j < vowels.length; j++) {
            if (text[i].toLowerCase() === vowels[j]) {
                resultArray.push(text[i]);
            }
        }
    }
    
    return resultArray.join('').toUpperCase();
}
*/

// ============================================
// VERSIÓN MEJORADA 1: Más eficiente
// ============================================
function translateToMarineImproved(text) {
    const result = [];
    
    for (const char of text) {
        const lowerChar = char.toLowerCase();
        
        // Si es vocal o 'y', la agregamos
        if (VOWELS.has(lowerChar)) {
            result.push(char);
            
            // Si es 'e' o 'u', la duplicamos
            if (DOUBLED_VOWELS.has(lowerChar)) {
                result.push(char);
            }
        }
    }
    
    return result.join('').toUpperCase();
}

// ============================================
// VERSIÓN MEJORADA 2: Funcional (más elegante)
// ============================================
function translateToMarineFunctional(text) {
    return text
        .split('')
        .filter(char => VOWELS.has(char.toLowerCase()))
        .flatMap(char => {
            const lowerChar = char.toLowerCase();
            return DOUBLED_VOWELS.has(lowerChar) ? [char, char] : [char];
        })
        .join('')
        .toUpperCase();
}

// ============================================
// VERSIÓN MEJORADA 3: Con expresiones regulares (más concisa)
// ============================================
function translateToMarineRegex(text) {
    return text
        .replace(/[^aeiouy]/gi, '') // Eliminar consonantes (excepto 'y')
        .replace(/[eu]/gi, match => match + match) // Duplicar 'e' y 'u'
        .toUpperCase();
}

// ============================================
// FUNCIÓN DE PRUEBA Y COMPARACIÓN
// ============================================
function testAllVersions(testText) {
    console.log('='.repeat(50));
    console.log(`PRUEBA CON: "${testText}"`);
    console.log('='.repeat(50));
    
    // Medir rendimiento
    const iterations = 10000;
    
    // Versión mejorada 1
    console.time('Versión Mejorada (bucle)');
    let result1;
    for (let i = 0; i < iterations; i++) {
        result1 = translateToMarineImproved(testText);
    }
    console.timeEnd('Versión Mejorada (bucle)');
    console.log('Resultado:', result1);
    
    // Versión funcional
    console.time('Versión Funcional');
    let result2;
    for (let i = 0; i < iterations; i++) {
        result2 = translateToMarineFunctional(testText);
    }
    console.timeEnd('Versión Funcional');
    console.log('Resultado:', result2);
    
    // Versión con regex
    console.time('Versión Regex');
    let result3;
    for (let i = 0; i < iterations; i++) {
        result3 = translateToMarineRegex(testText);
    }
    console.timeEnd('Versión Regex');
    console.log('Resultado:', result3);
    
    // Verificar que todos dan el mismo resultado
    console.log('¿Todos los resultados son iguales?', 
                result1 === result2 && result2 === result3);
}

// ============================================
// FUNCIÓN PRINCIPAL RECOMENDADA
// ============================================
function translateToMarine(text) {
    // Recomendamos la versión con regex por ser más concisa y eficiente
    return translateToMarineRegex(text);
}

// ============================================
// EJECUCIÓN Y PRUEBAS
// ============================================

// Prueba con el texto original
console.log('TEXTO ORIGINAL:', input);
console.log('TRADUCCIÓN AL LENGUAJE MARINO:', translateToMarine(input));

// Pruebas con diferentes textos
testAllVersions(input);
testAllVersions("Trementina y tortugas");
testAllVersions("Hola mundo");

// ============================================
// INTEGRACIÓN CON DOM (si los elementos existen)
// ============================================
if (translateButton && inputText && outputText) {
    translateButton.addEventListener('click', () => {
        const text = inputText.value || input;
        const translated = translateToMarine(text);
        outputText.textContent = translated;
        console.log(`Traducido: "${text}" → "${translated}"`);
    });
}

// ============================================
// ANÁLISIS DE MEJORAS IMPLEMENTADAS
// ============================================
console.log(`
🌊 MEJORAS IMPLEMENTADAS:

1. EFICIENCIA:
   ✅ Eliminado bucle anidado innecesario
   ✅ Uso de Set() para búsquedas O(1) en lugar de arrays O(n)
   ✅ Eliminada lógica redundante

2. LEGIBILIDAD:
   ✅ Nombres de variables más descriptivos
   ✅ Separación clara de responsabilidades
   ✅ Comentarios explicativos
   ✅ Constantes para valores mágicos

3. FUNCIONALIDAD:
   ✅ Múltiples implementaciones para diferentes casos de uso
   ✅ Funciones de prueba y benchmarking
   ✅ Manejo robusto de entrada

4. MANTENIBILIDAD:
   ✅ Código modular y reutilizable
   ✅ Fácil de extender y modificar
   ✅ Separación de lógica y presentación
`);