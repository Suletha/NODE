const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Hello World');
  res.end('suletha!\n');
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
