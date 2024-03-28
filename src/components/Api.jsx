import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: '3ff3f10d4a0989a7fb08bb03d3658e9b',
};

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}

export const searchMovies = async query => {
  try {
    const response = await axios.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error during API call:', error);
    throw error;
  }
};

export async function fetchMovieById(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by id:', error);
    throw error;
  }
}


export async function fetchMovieCredits(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
}


export async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
}