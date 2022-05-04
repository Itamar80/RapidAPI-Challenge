import express from 'express';
import controller from '../controllers/movies';
const router = express.Router();

router.get('/movies', controller.getMoviesBySearchTerm);
// router.get('/posts/:id', controller.getPost);
// router.put('/posts/:id', controller.updatePost);
// router.delete('/posts/:id', controller.deletePost);
// router.post('/posts', controller.addPost);

export = router;