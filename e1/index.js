import http from 'http';
import { horaActual } from './modules/tiempo.js';
import { sumar, restar } from './modules/calculo.js';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
        <title>Resultados del servidor</title>
        <h1>Resultados de los módulos:</h1>
        <ul>
          <li>Hora actual: ${horaActual()}</li>
          <li>5 + 3 = ${sumar(5, 3)}</li>
          <li>10 - 4 = ${restar(10, 4)}</li>
        </ul>
  `);
});

server.listen(3000, () => {
  console.log('Servidor funcionando en http://localhost:3000');
});
