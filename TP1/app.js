/*
leerArchivoComoString
Recibe la ruta del archivo que se quiere leer, y devuelve un único string con todo el contenido
del mismo.
*/
const fs = require("fs");
const leerArchivoComoString = (archivo) => {
  try {
    let data = fs.readFileSync(archivo, "utf8");
    console.log(data);
  } catch (error) {
    console.log(`Error en operación sincrónica de lectura: ${error.message}`);
  }
};

leerArchivoComoString("./texto2.txt");

/*
escribirTextoEnArchivo
Recibe una ruta, un texto, y un flag, y graba ese texto en un archivo en la ruta dada. Si el
directorio es válido pero el archivo no existe, decide que hacer según el flag:
● Con el flag en true, crea el archivo y lo escribe.
● Con el flag en false, lanza el error “el archivo no existe”.
*/

const escribirTextoEnArchivo = (ruta, texto, flag) => {
  if (fs.existsSync(ruta)) {
    fs.appendFileSync(ruta, `\n ${texto}`);
  } else if (flag) {
    fs.writeFileSync(ruta, texto);
  } else {
    throw new Error("El archivo no existe");
  }
};

try {
  escribirTextoEnArchivo("./texto10.txt", "hola que tal", false);
} catch (error) {
  console.error(error);
}

/*
transformarStringEnArrayDeNumeros
Recibe un texto y una secuencia de caracteres que usará como separador. Devuelve un array
con todos los números producto de partir el texto cada vez que aparezca la secuencia
separadora. En el caso de que alguna de las partes no sea numérica, no se incluirá en el
resultado, pero no debe lanzar ningún error.
*/

const transformarStringEnArrayDeNumeros = (texto, separador) => {
  let array = texto.split(separador); // divido el texto en tantos separadores haya, cada porcion es un valor en un array
  let arrayNumeros = [];
  array.forEach((i) => {
    let caracteres = [...i]; // cada caracter de ese string pasa a ser un array de char
    caracteres.forEach((c) => {
      let numero = parseInt(c); // parseo cada caracter a numero
      if (!Number.isNaN(numero)) {
        // aquellos que no sean numeros no se agregan al array (bc en este caso)
        arrayNumeros.push(numero);
      }
    });
  });
  console.log(arrayNumeros); // muestro como quedo el array de numeros
};

texto = "123 | 456 | 789 | 1bc | 10";
transformarStringEnArrayDeNumeros(texto, "|");

/*
transformarArrayDeNumerosAUnSoloString
Recibe un array con strings, y una secuencia de caracteres para usar como separador.
Devuelve un único string que es la unión de todos los strings del array, intercalando la
secuencia separadora entre cada uno.
*/

const transformarArrayDeNumerosAUnSoloString = (arrayString, separador) => {
  let stringFinal = "";
  let strings = [...arrayString];
  strings.forEach((s) => {
    stringFinal += s + separador;
  });
  stringFinal = stringFinal.substring(0, stringFinal.length - 1); // elimino el ultimo separador con el metodo substring. El método devuelve la parte de la string entre los índices especificados: 0 al ultimo-1
  console.log(stringFinal);
};

arrayString = ["123", "456", "789", "10"];
transformarArrayDeNumerosAUnSoloString(arrayString, ",");

/*
combinarDosArrays
Recibe dos arrays, ambos con datos de tipo numérico, ambos ordenados en forma ascendente,
y sin repetidos dentro de cada archivo (puede haber repetidos entre un archivo y otro).
Devuelve un nuevo array, que contenga todos los datos de ambos arrays, también ordenados
en forma ascendente, y también sin repetidos.
*/

const combinarDosArrays = (array1, array2) => {
  arraySinRepetidos = Array.from(new Set(array1.concat(array2)));
  //El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
  // SET es que es una estructura que no permite valores repetidos, por lo que si intentamos insertar un valor que ya existe, no se insertará de nuevo y, por lo tanto, puedes tener la seguridad que un Set nunca tendrá el mismo elemento almacenado. Devuelve un Objeto
  // Array.from convierte lo que le pasamos por parametro a un array.
  arraySinRepetidos.sort((a, b) => a - b); // sort: ordenamos de menor a mayot a-b (ascendente), de mayor a menor b-a (descendente)
  console.log(arraySinRepetidos);
};

array1 = [1, 5, 10];
array2 = [2, 5, 10, 11];
combinarDosArrays(array1, array2);

/*
combinarNArrays
Igual que la función anterior, solo que ésta recibe un array de arrays de números ordenados en
forma ascendente y sin repetidos, y devuelve un nuevo array, con la combinación de todos los
números de todos los arrays recibidos, también ordenados en forma ascendente, y también sin
repetidos.
Ejemplo

*/

const combinarNArrays = (array) => {
  let unicoArray = array.flat();
  unicoArray.sort((a, b) => a - b);
  console.log(unicoArray);
};

arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
combinarNArrays(arrays);

/*
  Escribir código que permita probar las funciones creadas, utilizando los datos de prueba
provistos. Luego configurar un script que permita ejecutar nuestro código de prueba mediante
la instrucción: npm test.
*/
