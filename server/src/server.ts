import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import { logger } from './middleware/logger.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});
