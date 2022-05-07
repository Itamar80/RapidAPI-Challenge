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
interface MovieDetailsProps {
  moviesStore: MoviesStoreImp;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ moviesStore }) => {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const { isFetching, selectedMovie, errorMessage } = moviesStore;
  const movieGenres: string[] = selectedMovie?.genre.split(',') || [];
  const isThereValue = (value: any) => value !== ('N/A' || '' || []);

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

  useEffect(() => {
    isValueValid(id) && moviesStore.getMovie(id);
  }, [id, moviesStore]);

  return (
    <div className={'movie-details-container'}>
      <nav className={'nav-bar'}>
        <img alt='back' className={'go-back-button'} src={BackIcon} onClick={() => navigate(-1)} />
        <img className='rapidapi-logo' src={RapidApiLogo} />
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
            <img alt='poster' src={selectedMovie.poster} />
            <div className='data-container'>
              <Genres />
              {isThereValue(selectedMovie.plot) && <p>{selectedMovie.plot}</p>}
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
              )}
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default observer(MovieDetails);
