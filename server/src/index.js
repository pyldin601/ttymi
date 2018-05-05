import http from 'http';

const server = http.createServer((req, res) => {
  res.end('OK');
});

server.listen(process.env.PORT || 3001);
