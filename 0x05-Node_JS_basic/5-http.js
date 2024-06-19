// 5-http.js
const http = require('http');
const url = require('url');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const headers = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(',')).filter((student) => student.length === headers.length);

      const numberOfStudents = students.length;
      let result = `Number of students: ${numberOfStudents}\n`;

      const fieldStudents = {};

      students.forEach((student) => {
        const field = student[3];
        if (!fieldStudents[field]) {
          fieldStudents[field] = [];
        }
        fieldStudents[field].push(student[0]);
      });
      const keys = Object.keys(fieldStudents);
      for (const field of keys) {
        const list = fieldStudents[field];
        result += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader('Content-Type', 'text/plain');

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    countStudents(databaseFile)
      .then((result) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${result}`);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
