import axios from 'axios';
//api.themoviedb.org/3/trending/movie/week?api_key=76cbb606f190fc237086ec33f1fd98a3&page=1 -----trand

//api.themoviedb.org/3/search/movie?api_key=76cbb606f190fc237086ec33f1fd98a3&language=en-US&query=cats&page=1&include_adult=false -----search

//api.themoviedb.org/3/movie/550?api_key=76cbb606f190fc237086ec33f1fd98a3&language=en-US -----details

//api.themoviedb.org/3/movie/550/credits?api_key=76cbb606f190fc237086ec33f1fd98a3&language=en-US -----cast

//api.themoviedb.org/3/movie/550/reviews?api_key=76cbb606f190fc237086ec33f1fd98a3&language=en-US -----reviews

export const API_KEY = '76cbb606f190fc237086ec33f1fd98a3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrandingMovies = async (pageNumber = 1) => {
  try {
    const response = await axios.get(
      `trending/all/day?api_key=${API_KEY}&page=${pageNumber}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async (searchQuery, pageNumber) => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${pageNumber}&include_adult=false`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async filmId => {
  try {
    const response = await axios.get(
      `movie/${filmId}?api_key=76cbb606f190fc237086ec33f1fd98a3&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async filmId => {
  try {
    const response = await axios.get(
      `movie/${filmId}/reviews?api_key=76cbb606f190fc237086ec33f1fd98a3&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCredits = async filmId => {
  try {
    const response = await axios.get(
      `movie/${filmId}/credits?api_key=76cbb606f190fc237086ec33f1fd98a3&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
