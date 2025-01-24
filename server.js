import fastify from 'fastify';
import path from 'path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';

// Definir __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify({ logger: true });

// Servir archivos estáticos desde el directorio actual
app.register(fastifyStatic, {
  root: path.join(__dirname),
  prefix: '/', // prefijo opcional para las rutas
});

// Ruta para la página principal
app.get('/', (request, reply) => {
  reply.sendFile('index.html'); // Servir el archivo index.html
});

// Iniciar el servidor
const start = async () => {
  try {
    await app.listen({ port: 3002 });
    app.log.info('Servidor escuchando en http://localhost:3002');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
