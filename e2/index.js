import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      fs.readFile('error.html', (errError, errorData) => {
        if (errError) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error al leer los archivos HTML.');
        } else {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end(errorData);
        }
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
