import express from "express";
import controller from "../controllers/movies";
const router = express.Router();

router.post("/movies", controller.getMoviesBySearchTerm);
router.post("/movies/:id", controller.getMovieById);

export = router;
