import createApp from './app';
import logger from './utils/logger';

const app = createApp();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
});
