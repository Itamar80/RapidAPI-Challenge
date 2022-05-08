import { SystemErrors } from '../types/Movie.types';

export const Errors: SystemErrors = {
  NO_MOVIES_WITH_SEARCHTERM: 'No movies with the search term: ',
  GETTING_MOVIES_FAILER: 'Getting movies failed',
  NO_MOVIE_WITH_GIVEN_ID: 'No movie with that id: ',
  GET_SPECIFIC_MOVIE_FAILED: 'Getting specific movie failed',
};

export const NO_DATA_AVAILABLE: string = 'Not available';
export const DISABLED: string = 'disabled';
export const FORM_MOVE_UP: string = 'form-move-up';
export const FORM_MOVE_DOWN: string = 'form-move-down';
export const ITEM_VISIBLE: string = 'item-visibility-visible';
export const ITEM_HIDDEN: string = 'item-visibility-hidden';
