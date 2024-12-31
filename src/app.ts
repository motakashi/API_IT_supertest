import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/resource', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.post('/api/resource', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.status(201).json({ message: `Resource created for ${name}` });
});

export default app;
