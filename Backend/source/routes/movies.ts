import express from 'express';
import { getMoviesBySearchTerm, getMovieById } from '../controllers/movies';
const router = express.Router();

router.get('/movies/:q', getMoviesBySearchTerm);
router.get('/movie/:id', getMovieById);

export = router;
