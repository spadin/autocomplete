const fs = require('fs');
const http = require('http');

async function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

async function loadWords() {
  const wordsStr = await readFile('./resources/words.txt');
  return wordsStr.split('\r\n');
}

function search(words, term) {
  if (term.length === 0) {
    return [];
  }
  return words.filter((word) => word.startsWith(term));
}

async function run() {
  const port = process.env.PORT || 12345;
  const host = process.env.HOST || '0.0.0.0';
  const words = await loadWords();

  const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    let body;

    if (request.url.startsWith('/search/')) {
      const term = request.url.substring(8);
      const filtered = search(words, term).slice(0, 30);
      body = JSON.stringify(filtered);
    } else {
      body = JSON.stringify([]);
    }

    response.end(body);
  });

  console.log(`Starting word server http://${host}:${port}`);
  server.listen(port, host);
}

run();
