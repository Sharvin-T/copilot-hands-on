import fastify from 'fastify';
import { createLogger } from './utils/logger';
import { authMiddleware } from './middleware/auth';

const app = fastify();
const logger = createLogger();

// Logging middleware
app.use(logger);

// Exception handling middleware
app.setErrorHandler((error, request, reply) => {
  logger.error(error);
  reply.send({ error: 'Internal Server Error' });
});

// Authentication middleware
app.use(authMiddleware);

// Define routes here

const start = async () => {
  try {
    await app.listen(3000);
    logger.info('Server started');
  } catch (error) {
    logger.error(`Error starting server: ${error}`);
    process.exit(1);
  }
};

start();