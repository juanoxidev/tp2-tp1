// modo asincrónico con promises (sintaxis then catch).

const fs = require("fs").promises; // Utilizamos fs.promises para trabajar con promesas

// Leer el archivo package.json en formato string
const leerPackageJSON = () => {
  fs.readFile("package.json", "utf-8")
    .then((contenidoStr) => {
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
      return fs.writeFile("info.txt", infoStr, "utf-8");
    })
    .then(() => {
      console.log("info.txt se ha creado exitosamente.");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

leerPackageJSON();
