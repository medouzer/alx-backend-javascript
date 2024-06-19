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
      console.log(`Number of students: ${numberOfStudents}`);
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
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
