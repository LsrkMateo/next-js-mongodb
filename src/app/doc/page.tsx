"use client";
function doc() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2" id="create-the-proyect-commit-">
        create the project commit:
      </h2>
      <h3
        className="text-lg font-medium mb-1"
        id="configuracion-inicial-npx-create-next-app-"
      >
        configuracion inicial (npx create-next-app):
      </h3>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>sin typescript (posteriormente se añade)</li>
        <li>con eslint</li>
        <li>con tailwind css</li>
        <li>usando el directorio src</li>
        <li>usando el app router</li>
        <li>sin alias</li>
      </ul>
      <p className="mb-4">
        Se hace una breve limpieza removiendo la plantilla que usa next y
        eliminando los estilos del global.css exceptuando las clases.
      </p>
      <p className="mb-4">
        Creación de carpeta <em className="font-semibold">components</em> en donde
        se almacenarán componentes de React, carpeta{" "}
        <em className="font-semibold">utils</em> para conexión con MongoDB.
      </p>
      <h2 className="text-xl font-semibold mb-2" id="config-route-handlers-commit-">
        Config route handlers (commit)
      </h2>
      <p className="mb-4">
        Se crea el archivo{" "}
        <code className="bg-gray-200 px-1 rounded">route.js</code> dentro de{" "}
        <code className="bg-gray-200 px-1 rounded">src/api/ping</code> para creación
        de rutas de backend que comuniquen con la base de datos. Este archivo
        importa:
      </p>
    </div>
  );
}

export default doc;
