import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.get('/', (req, res) => res.status(200).json({ message: 'hello, world!' }));

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
