import express from 'express';
import router from './routes';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
