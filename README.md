# Documentacion

lo siguiente se escribio a medida de que el proyecto se fue realizando:

#### funcion principal de la aplicacion

el proyecto es fundamentalmente una aplicacion de toma de notas, el tipo de aplicacion mas util a la hora de aprender hacer un CRUD en cualquier lenguaje o tecnologia, en este caso se usa next-js como framework de fornt-end el cual hace uso de un servidor de express el cual se coneccta con una base de datos mongo-db 

Como programador semi-principiante de next-js intente seguir paso a paso el siguiente tutorial: https://www.youtube.com/watch?v=CkiuF2wsPRg documentare commit por commit el proceso llevado a cabo, explicando detalladamente el porque de cada commit, cabe resaltar que la intencion de deste repositorio no es solo almacenar informacion sobre como crear una aplicacion en next js usando mongo db como base de datos, mas alla de eso la intencion es invitar a contribuir y testear a usuarios cuya experiencia es mas avanzada, ademas de servir de apoyo para personas no tan experimentadas.

## create the proyect commit:

### configuracion inicial (npx create-next-app):

- sin typescript
- con eslint
- con tailwind css
- usando el directiorio src
- usando el app router
- sin alias

Se hace una breve limpieza removiendo la platilla que usa next y eliminando los estilos del global.css exeptuando las clases

creacion de carpeta **components** en donde se almacenaran componentes de react, carpeta **utils** para conexion con mongodb

## Config route handlers (commit)

Se crea el archivo `route.js` dentro de `src/api/ping` para creacion rutas de back end que comuniquen con la base de datos, este archivo importa:

```
import { NextResponse } from "next/server";
```

para generar una respuesta a la peticion **GET** a la ruta `api/ping`

```
export function GET() {
  return NextResponse.json({ message: "hola mundo" });
}
```

Se crea la ruta tasks la cual contiene un route.js que tambien responde a peticiones post, adicional, se crea una carpeta dentro de tasks la cual es dinamica: `[id]` y tiene un route.js el cual recoge el valor de la ruta y lo imprime respondiendo al metodo **GET**, esto lo hace de la siguiente forma:

```
export function GET(request, { params }) {
  console.log(params);
  return NextResponse.json({ message: "obteniendo tarea" });
}
```

### documentacion uso de parametro request

Donde **request** es la informacion que viene desde el cliente, a continuación una lista de infromacion que se puede optener de este parametro:

1. Método HTTP: Puedes obtener el método HTTP utilizado en la solicitud, como GET, POST, PUT, DELETE, etc. Esto te permite determinar qué acción debe tomar el servidor en respuesta a la solicitud.
2. Ruta (URL): Puedes acceder a la URL completa de la solicitud, lo que te permite entender qué endpoint de la API está siendo accedido.
3. Cabeceras (Headers): Las cabeceras HTTP contienen información adicional sobre la solicitud, como el tipo de contenido que el cliente acepta o envía, la autenticación, la codificación de contenido, etc.
4. Parámetros de consulta (Query Parameters): Si la solicitud incluye parámetros de consulta en la URL, puedes extraer estos valores del objeto "request". Estos parámetros son comúnmente utilizados para filtrar, paginar o ajustar los resultados de una solicitud.
5. Cuerpo de la solicitud (Request Body): En las solicitudes POST o PUT, el cuerpo de la solicitud puede contener datos enviados por el cliente. Puedes acceder a estos datos para procesarlos en el servidor.
6. Cookies: Si se incluyen cookies en la solicitud, puedes obtener información sobre ellas. Las cookies a menudo se utilizan para mantener el estado de la sesión en aplicaciones web.
7. Información del cliente: Puedes obtener detalles sobre la dirección IP del cliente, el agente de usuario (navegador o cliente que realiza la solicitud) y otra información relacionada con la conexión.
8. Autenticación: Si se requiere autenticación para acceder a ciertos recursos, puedes obtener los datos de autenticación de la solicitud para verificar la identidad del cliente.
9. Token de seguridad: Si estás utilizando algún tipo de autenticación basada en tokens (como JWT), el token puede estar presente en la solicitud y se puede extraer para verificar la autorización.
10. Otros detalles específicos del framework: Dependiendo del framework o la biblioteca que estés utilizando para construir tu API, es posible que haya más detalles disponibles en el objeto "request", como información sobre enrutamiento, validación de datos, etc.

### Documentacion parametro {params}:

En este caso se utiliza la destructuracion del segundo paramentro el cual es `{params}`, este puede devolver lo siguiente:

1. Parámetros de consulta: Puedes obtener los valores de los parámetros de consulta presentes en la URL de la solicitud. Estos parámetros pueden incluir datos como filtros, valores de búsqueda, valores de paginación, etc.
2. Filtros y criterios de búsqueda: Si estás implementando la funcionalidad de búsqueda o filtrado en tu API, los parámetros de consulta pueden contener criterios específicos para limitar los resultados devueltos por el servidor.
3. Valores de paginación: Si tu API admite la paginación de resultados, los parámetros de consulta pueden incluir valores como "page" (página) y "limit" (límite), que indican qué página de resultados se debe devolver y cuántos elementos se deben mostrar por página.
4. Otros datos específicos del endpoint: Dependiendo de cómo hayas diseñado tu API y cómo la estés utilizando, los parámetros de consulta podrían contener información específica para diferentes endpoints. Por ejemplo, en una API que ofrece información de productos, los parámetros de consulta podrían incluir un ID de producto para recuperar detalles específicos.
5. Ordenamiento: Los parámetros de consulta también podrían usarse para indicar el orden en que los resultados deben ser devueltos, como "sort" (ordenar) y "order" (ascendente o descendente).

---

Se hace lo mismo con una peticion delete, esta vez concatenado el valor del `params` en la respuesta de next

Se añade la peticion PUT y DELETE

## Add conection with mongoDB (commit)

**se requiere mongodb instalado localmente e importar el modulo mongoose en el proyecto (npm i mongoose): link de guia de instalacion de mongodb en ubuntu: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/**

Se crea un archivo **mongoose.js** dentro de **utils** el cual sera encargado de conectarse con la base de datos

dentro de mongoose.js, se importan metodos connect, y connection para la propia conexion a la base de datos

```
import { connect, connection } from "mongoose";
const conn = {
  isConnected: false,
};
```

Se crea una funcion para la conectarse a la DB

```
export async function conectDB() {
if (conn.isConnected) return; // si ya esta conectado no volver a establecer coneccion
// establecer coneccion
const db = await connect("mongodb://localhost/next-mongo-crud");
console.log(db.connection.db.databaseName);
conn.isConnected = db.connections[0].readyState; // devuelve verdadero si es uno, devuleve uno si esta conectado
}

```

por ultimo se crean funciones que responden a los enventos `connected` y `error`

```
connection.on("connected", () => {
console.log("base de datos mongoose se ha conectado con exito");
});

connection.on("error", (err) => {
console.log("mongoose error: " + err);
});

```

## Config schema and requests get and post (commit)

Se crea la carpeta models junto con el arhivo de Task.js para especificar como se va a guardar la informacion en la base de datos

#### importante tener en cuenta que:

un modelo es una funcion que permite operar con la base de datos, el esquema es la definicion de lo que va a venir en la base de datos

```
import { Schema, model, models } from "mongoose";

```

Luego se crea un objeto con lo que se espera recibir de la peticion http

```
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo es requerido"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "El titulo es requerido"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
```

trim sirve para formatear la informacion pasada, timestamps : true genera una etiqueta de la fecha en la que fue generada la peticion, en este caso el esquema funciona para generar tareas en una aplicacion de tareas.

Por ultimo se exporta la funcion de forma que si existe Task en models la use si no existe la crea

```
export default models.Task || model("Task", taskSchema);

```

se modifica el archivo rotue.js de /tasks/:

```
export async function GET() {
  conectDB();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}
```

se utiliza `Task.find()` para encontrar todos las `tareas` creadas en la base de datos, en el caso del metodo post se utiliza `newTask.save()` para guardar la tarea en la base de datos:

```
export async function POST(request) {
  try {
    const data = await request.json();
    const newTask = new Task(data);
    const savedTask = await newTask.save();

    return NextResponse.json(savedTask);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}
```

## Config PUT and GET requests from dinamic url (commit):

para el metodo get de la direccion dinamica se hace uso del `params` para obtener el `request_id` el cual nos sirve para obtener la tarea correspontiente a la id, usando el medoto `Task.findById`

```
export async function GET(request, { params }) {
  try {
    conectDB();
    const taskFound = await Task.findById(params.task_id);
    if (!taskFound)
      return NextResponse.json({ message: "Task not found" }, { status: 404 });

    return NextResponse.json(taskFound);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
```

Al igual que el metodo GET, el metodo PUT utiliza params para obtener el id del `task` a modificar asi como el `request`, el cual sera la nueva informacion de la `task`, en este caso se usa el metodo `Task.findByIdAndUpdate`

```
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const updatedTask = await Task.findByIdAndUpdate(params.task_id, data, {
      new: true, // return updated task
    });
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}
```
