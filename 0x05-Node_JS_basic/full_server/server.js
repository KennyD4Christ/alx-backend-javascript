import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 1245;

app.use('/', router);

app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
