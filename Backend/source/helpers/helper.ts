import { Rating } from '../types/movie.types';

export const checkIsValidInput = (input: string | Rating[]): boolean => {
  return input !== 'N/A' && input !== '' && !!input.length;
};

export const isKeyValid = (key: string): boolean => {
  if (key === 'Type' || key === 'Response' || key === 'DVD' || key === 'BoxOffice') {
    return false;
  }
  return true;
};
