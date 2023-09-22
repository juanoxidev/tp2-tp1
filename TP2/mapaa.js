// modo asincrónico con promises (sintaxis async await).

const fs = require("fs").promises; // Utilizamos fs.promises para trabajar con promesas

async function leerPackageJSON() {
  try {
    // Leer el archivo package.json en formato string
    const contenidoStr = await fs.readFile("package.json", "utf-8");

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
    await fs.writeFile("info.txt", infoStr, "utf-8");

    console.log("info.txt se ha creado exitosamente.");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamar a la función para leer y procesar package.json
leerPackageJSON();
