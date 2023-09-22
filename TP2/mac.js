//  modo asincrónico con callbacks.

const fs = require("fs");

// Función para leer el archivo package.json y realizar las operaciones
function leerPackageJSON(callback) {
  fs.readFile("package.json", "utf-8", (error, contenidoStr) => {
    if (error) {
      callback(error);
      return;
    }

    try {
      // Parsear el contenido JSON a un objeto
      const contenidoObj = JSON.parse(contenidoStr);

      // Calcular el tamaño en bytes del archivo
      const size = Buffer.from(contenidoStr).length;

      // Crear el objeto info
      const info = {
        contenidoStr,
        contenidoObj,
        size,
      };

      // Serializar info a una cadena JSON con formato legible
      const infoStr = JSON.stringify(info, null, "\t");

      // Guardar la cadena JSON en el archivo info.txt
      fs.writeFile("info.txt", infoStr, "utf-8", (error) => {
        if (error) {
          callback(error);
          return;
        }
        callback(null, "info.txt se ha creado exitosamente.");
      });
    } catch (parseError) {
      callback(parseError);
    }
  });
}

// Llamar a la función para leer y procesar package.json
leerPackageJSON((error, resultado) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log(resultado);
  }
});
