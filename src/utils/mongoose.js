import { connect, connection } from "mongoose";
const conn = {
  isConnected: false,
};
export async function conectDB() {
  if (conn.isConnected) return; // si ya esta conectado no volver a establecer coneccion
  // establecer coneccion
  const db = await connect("mongodb://localhost/next-mongo-crud");
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState; // devuelve verdadero si es uno, devuleve uno si esta conectado
}

connection.on("connected", () => {
  console.log("base de datos mongoose se ha conectado con exito");
});

connection.on("error", (err) => {
  console.log("mongoose error: " + err);
});
