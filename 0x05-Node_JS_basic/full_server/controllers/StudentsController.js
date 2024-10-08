import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];

    if (!filePath) {
      res.status(500).send('Cannot load the database');
      return;
    }

    try {
      const studentsByField = await readDatabase(filePath);

      const fields = Object.keys(studentsByField)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      let response = 'This is the list of our students\n';

      fields.forEach((field) => {
        const list = studentsByField[field].join(', ');
        response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${list}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (!filePath) {
      res.status(500).send('Cannot load the database');
      return;
    }

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(400).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(filePath);
      const list = studentsByField[major];

    if (!list || list.length === 0) {
      return res.status(404).send(`No students found for major: ${major}`);
    }

    res.status(200).send(`List: ${list.join(', ')}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
}

export default StudentsController;
