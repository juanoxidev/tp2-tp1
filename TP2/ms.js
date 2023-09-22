//  modo sincrónico.
const fs = require("fs");
const leerPackageJSON = () => {
  try {
    // Leer el archivo package.json en formato string
    const contenidoStr = fs.readFileSync("package.json", "utf-8");

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

    // Imprimir info en la consola
    console.log(info);

    // Llamar a una función para guardar info en info.txt (ver siguiente paso)
    guardarInfoEnArchivo(info);
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }

  function guardarInfoEnArchivo(info) {
    try {
      // Serializar info a una cadena JSON con formato legible
      const infoStr = JSON.stringify(info, null, "\t");

      // Guardar la cadena JSON en el archivo info.txt
      fs.writeFileSync("info.txt", infoStr, "utf-8");

      console.log("info.txt se ha creado exitosamente.");
    } catch (error) {
      console.error("Error al guardar info en el archivo:", error);
    }
  }
};

leerPackageJSON();
