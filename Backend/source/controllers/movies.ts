import { API_KEY } from '../consts/consts';
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Movie {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
}

// getting all movies
const getMoviesBySearchTerm = async (req: Request, res: Response, next: NextFunction) => {
    // get some movies
    const {search} = req.body;
    let result: AxiosResponse = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
    let movies: [Movie] = result.data;
    return res.status(200).json({
        message: movies
    });
};

export default { getMoviesBySearchTerm };
