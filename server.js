const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello depuis Jarvis !');
});

server.listen(3000, () => {
  console.log('Serveur en ligne sur le port 3000');
});

