import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE,LOADING } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';

// Here we create action searchMovie, this action takes a text parameter.
// dispatch coming from redux-thunk middleware, which is already implemented in our store. 
export const searchMovie = text => dispatch => {
  dispatch({  
    type: SEARCH_MOVIE,
    payload: text
  });
};

//fetchMovies action создает HTTP-запросы, которые вызывают API, а затем, в зависимости от ссылки, возвращают информацию (то есть данные и фильм, которые мы ищем)
export const fetchMovies = text => dispatch => {
  axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`) 
    .then(response =>dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};