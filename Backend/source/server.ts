import http from 'http';
import express, { Express } from 'express';
import routes, { route } from './routes/movies';
import cors from 'cors';

const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use(cors());
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:6060', 'http://127.0.0.1:3000', 'http://127.0.0.1:6060'],
};
router.use(cors(corsOptions));

router.use('/', routes);

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
