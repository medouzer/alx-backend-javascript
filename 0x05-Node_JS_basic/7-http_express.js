const express = require('express');
const fs = require('fs').promises;

const app = express();
const databaseFile = process.argv[2];

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
