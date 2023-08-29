# Documentacion

Lo siguiente es un readme muy basico de la aplicacion: introduccion, instalacion, y modo de uso se encuentran aqui.
Para mirar la documentacion del proyecto este se encuentra dentro de la aplicacion. (esto para facilitar su lectura y no perturbar el readme del proyecto)

## funcion principal de la aplicacion

el proyecto es fundamentalmente una aplicacion de toma de notas, el tipo de aplicacion mas util a la hora de aprender hacer un CRUD en cualquier lenguaje o tecnologia, en este caso se usa next-js como framework de fornt-end el cual hace uso de un servidor de express el cual se conecta con una base de datos mongo-db

Como programador semi-principiante de next-js intente seguir paso a paso el siguiente tutorial: https://www.youtube.com/watch?v=CkiuF2wsPRg documentare commit por commit el proceso llevado a cabo (documentacion), explicando detalladamente el porque de cada commit, cabe resaltar que la intencion de deste repositorio no es solo almacenar informacion sobre como crear una aplicacion en next js usando mongo db como base de datos, mas alla de eso la intencion es invitar a contribuir y testear a usuarios cuya experiencia es mas avanzada, ademas de servir de apoyo para personas no tan experimentadas.

## Ejecución de Proyecto Next.js con MongoDB
A continuación se detallan los pasos necesarios para ejecutar tu proyecto basado en Next.js con una base de datos MongoDB.

### Requisitos previos
- Node.js instalado en tu sistema. Puedes descargarlo desde nodejs.org.
- MongoDB instalado y en funcionamiento. Puedes obtener más información sobre cómo instalarlo en mongodb.com.
Paso 1: Clonar el repositorio
```
git clone <URL_del_repositorio>
cd <nombre_del_proyecto>
```
Paso 2: Instalar dependencias
```
npm install
```
Paso 3: Configurar la conexión a MongoDB
En tu proyecto, asegúrate de tener una configuración adecuada para conectarte a la base de datos MongoDB. Esto generalmente se hace en un archivo de configuración o en el código donde se inicializa la conexión a la base de datos.

Paso 4: Ejecutar la aplicación en modo desarrollo
```
npm run dev
```
Esto iniciará el servidor de desarrollo de Next.js y tu aplicación estará disponible en http://localhost:3000.

Paso 5: Interactuar con la aplicación
Abre un navegador web y navega a http://localhost:3000 para interactuar con tu aplicación Next.js.
