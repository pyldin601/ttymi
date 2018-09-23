import createApp from './app';

const web = createApp();
const port = process.env.PORT || 8080;

web.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
