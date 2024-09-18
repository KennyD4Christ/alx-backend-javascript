const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line.length > 0);

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      console.log(`Number of students: ${lines.length - 1}`);

      const studentsByField = {};
      lines.slice(1).forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });

      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          const list = studentsByField[field].join(', ');
          console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${list}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
