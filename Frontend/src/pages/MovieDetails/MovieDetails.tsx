import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './movie-details.scss';
import { MoviesStoreImp } from '../../store/MovieStore';
import { observer } from 'mobx-react';
import { Loader } from '../../components/Loader/Loader';
import BackIcon from '../../assets/arrow.png';
import { isValueValid } from '../../helpers/utils';
import RapidApiLogo from '../../assets/rapidAPI.svg';
import RatingIcon from '../../assets/rating.svg';
import { DetailedMovie, Rating } from '../../types/Movie.types';
import { toJS } from 'mobx';
import DefaultPoster from '../../assets/default-poster.png';
interface MovieDetailsProps {
  moviesStore: MoviesStoreImp;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ moviesStore }) => {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const { isFetching, selectedMovie, errorMessage } = moviesStore;
  const movieGenres: string[] = (selectedMovie && selectedMovie.genre && selectedMovie?.genre.split(',')) || [];
  const isThereValue = (value: any) => value !== 'N/A' || value !== [] || value !== '';

  const Genres = () => {
    return (
      <div className='genres-container'>
        {movieGenres.map((genre) => {
          return (
            <div className='genre' key={genre}>
              {genre}
            </div>
          );
        })}
      </div>
    );
  };

  const movieInfoList = (movie: any): any => {
    // delete movie.id;
    // delete movie.poster;
    return Object.keys(movie).map((key) => {
      console.log('value', key);
      if (Array.isArray(movie[key])) {
        return (
          <p>
            <span>ratings </span>
            {movie.ratings.map((rate: Rating) => {
              return (
                <div key={rate.Source}>
                  {rate.Source}, {rate.Value}
                </div>
              );
            })}
          </p>
        );
      }
      return (
        <p>
          <span>{key}</span>
          {movie[key]}
        </p>
      );
    });
  };

  useEffect(() => {
    isValueValid(id) && moviesStore.getMovie(id);
  }, [id, moviesStore]);

  return (
    <div className={'movie-details-container'}>
      <nav className={'nav-bar'}>
        <button className={'go-back-button'} onClick={() => navigate(-1)}>
          <img alt='back' src={BackIcon} />
          <span>Go back</span>
        </button>
        <img className='rapidapi-logo' src={RapidApiLogo} onClick={() => navigate(-1)} />
      </nav>
      {errorMessage !== '' && errorMessage}
      {isFetching || !selectedMovie ? (
        <Loader />
      ) : (
        <div className={'detailed-movie'}>
          <div className={'movie-header-section'}>
            <div className='movie-name-section'>
              <div className='movie-name'>{selectedMovie.title}</div>

              <div className='movie-info'>
                <span>{selectedMovie.year}</span>
                <span>{selectedMovie.rated}</span>
                <span>{selectedMovie.runtime}</span>
              </div>
            </div>

            <div className='ratings-container'>
              <div>
                <span>imdbRating:</span>
                <span>{selectedMovie.imdbRating}</span>
              </div>
              <div>
                <span>imdbVotes:</span>
                <span>
                  {selectedMovie.imdbVotes}
                  <img src={RatingIcon} />
                </span>
              </div>
              <div>
                <span>language:</span>
                <span>{selectedMovie.language}</span>
              </div>
            </div>
          </div>
          <div className='poster-section'>
            <img alt='poster' src={selectedMovie.poster || DefaultPoster} />
            <div className='data-container'>
              <Genres />
              <div>{movieInfoList(selectedMovie)}</div>
              {/* {isThereValue(selectedMovie.plot) && <p>{selectedMovie.plot}</p>}
              {isThereValue(selectedMovie.director) && (
                <p>
                  <span>director</span>
                  {selectedMovie.director}
                </p>
              )}
              {isThereValue(selectedMovie.writer) && (
                <p>
                  <span>writer</span>
                  {selectedMovie.writer}
                </p>
              )}
              {isThereValue(selectedMovie.actors) && (
                <p>
                  <span>actors</span> {selectedMovie.actors}
                </p>
              )}
              {isThereValue(selectedMovie.awards) && (
                <p>
                  <span>awards</span> {selectedMovie.awards}
                </p>
              )}
              {isThereValue(selectedMovie.country) && (
                <p>
                  <span>country</span>
                  {selectedMovie.country}
                </p>
              )}
              {isThereValue(selectedMovie.metascore) && (
                <p>
                  <span>metascore</span>
                  {selectedMovie.metascore}
                </p>
              )}
              {isThereValue(selectedMovie.production) && (
                <p>
                  <span>production</span>
                  {selectedMovie.production}
                </p>
              )}
              {isThereValue(selectedMovie.ratings) && (
                <p>
                  <span>ratings </span>
                  {selectedMovie.ratings.map((rate) => {
                    return (
                      <div key={rate.Source}>
                        {rate.Source}, {rate.Value}
                      </div>
                    );
                  })}
                </p>
              )}
              {isThereValue(selectedMovie.released) && (
                <p>
                  <span>released</span>
                  {selectedMovie.released}
                </p>
              )}
              {isThereValue(selectedMovie.website) && (
                <p>
                  <span>website</span>
                  {selectedMovie.website}
                </p>
              )} */}
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default observer(MovieDetails);
