import http from 'http';
import express, { Express } from 'express';
import routes from './routes/movies';
import cors from 'cors';

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:6060', 'http://127.0.0.1:3000', 'http://127.0.0.1:6060'],
};
app.use(cors(corsOptions));

app.use('/', routes);

const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
