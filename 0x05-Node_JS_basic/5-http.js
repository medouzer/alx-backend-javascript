const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) throw new Error('Cannot load the database');

      const hashtable = {};
      let studentCount = 0;

      lines.slice(1).forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!hashtable[field]) {
          hashtable[field] = [];
        }
        hashtable[field].push(firstname);
        studentCount += 1;
      });

      let result = `Number of students: ${studentCount}\n`;
      for (const [key, students] of Object.entries(hashtable)) {
        result += `Number of students in ${key}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      return result.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
