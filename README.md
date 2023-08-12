# Documentacion

lo siguiente se escribio a medida de que el proyecto se fue realizando:

### configuracion inicial (npx create-next-app):
- sin typescript
- con eslint
- con tailwind css
- usando el directiorio src
- usando el app router
- sin alias

Se hace una breve limpieza removiendo la platilla que usa next y eliminando los estilos del global.css exeptuando las clases

creacion de carpeta **components** en donde se almacenaran componentes de react, carpeta **utils** para conexion con mongodb

se crea el archivo route.js dentro de src/api/ping para creacion rutas de back end que comuniquen con la base de datos, este archivo importa:
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

En este caso se utiliza la destructuracion del segundo paramentro el cual es `{params}`, este puede devolver lo siguiente:

1. Parámetros de consulta: Puedes obtener los valores de los parámetros de consulta presentes en la URL de la solicitud. Estos parámetros pueden incluir datos como filtros, valores de búsqueda, valores de paginación, etc.
2. Filtros y criterios de búsqueda: Si estás implementando la funcionalidad de búsqueda o filtrado en tu API, los parámetros de consulta pueden contener criterios específicos para limitar los resultados devueltos por el servidor.
3. Valores de paginación: Si tu API admite la paginación de resultados, los parámetros de consulta pueden incluir valores como "page" (página) y "limit" (límite), que indican qué página de resultados se debe devolver y cuántos elementos se deben mostrar por página.
4. Otros datos específicos del endpoint: Dependiendo de cómo hayas diseñado tu API y cómo la estés utilizando, los parámetros de consulta podrían contener información específica para diferentes endpoints. Por ejemplo, en una API que ofrece información de productos, los parámetros de consulta podrían incluir un ID de producto para recuperar detalles específicos.
5. Ordenamiento: Los parámetros de consulta también podrían usarse para indicar el orden en que los resultados deben ser devueltos, como "sort" (ordenar) y "order" (ascendente o descendente).

---

Se hace lo  mismo con una peticion delete, esta vez concatenado el valor del `params` en la respuesta de next

Se añade la peticion PUT y DELETE

**se requiere mongodb instalado localmente e importar el modulo mongoose en el proyecto (npm i mongoose): link de guia de instalacion de mongodb en ubuntu: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/** 

Se crea un archivo **mongoose.js** dentro de **utils** 