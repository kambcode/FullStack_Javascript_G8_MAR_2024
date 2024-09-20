import { env } from "./config/env.js";
import { Server } from './server.js';
import router  from './routes/movieRoutes.js';
import { connection } from "./db/sequelize.js";

async function main () {

  const port = env.port || 3000;
  
  const server = new Server({
    port,
    routes: router,
  });
  
  server.start();
  
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  console.log("Starting");

}

main();


