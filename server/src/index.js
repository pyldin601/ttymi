import createApp from './app';
import config from '../config/app';
import logger from './utils/logger';

const { port } = config;

const app = createApp();

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
});
