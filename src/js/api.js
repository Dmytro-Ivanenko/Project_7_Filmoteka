import axios from 'axios';
import { changeURLLanguage } from './translate';
import { translate } from './translate';

const API_KEY = '53f2c47317a563cd2628c68ceb6a6673';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const DISCOVER_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;
const ID_URL = `${BASE_URL}/movie/`;
const GANRE_LIST_URL = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
 
// https://api.themoviedb.org/3/movie/76600/videos?api_key=53f2c47317a563cd2628c68ceb6a6673&language=en-US





export class FetchAPI {
  // trends
  async fetchTrendingFilms(page = 1) {
    if (window.location.hash === '#ua') {
      return await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${page}&language=uk-UA`);
     
    } else {
      return await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${page}&language=en-US`);
      
    }
        
  }
  

  async fetchSearchFilms(searchQuery, page = 1) {
   if (window.location.hash === '#ua') { 
      return await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${searchQuery}&page=${page}&language=uk-UA`
    );
    } else {
        return await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${searchQuery}&page=${page}&language=en-US`
    );
    }
    
  }

  async fetchFilmsWithGenres(genres, page = 1) {
    if (window.location.hash === '#ua') {
      return await axios.get(`${DISCOVER_URL}&with_genres=${genres}&page=${page}&language=uk-UA`);
    } else {
      return await axios.get(`${DISCOVER_URL}&with_genres=${genres}&page=${page}&language=en-US`);
    }
    
  }

  async getFilmToId(id) {
    if (window.location.hash === '#ua') {
      return await axios.get(`${ID_URL}${id}?api_key=${API_KEY}&language=uk-UA`);
    } else {
      return await axios.get(`${ID_URL}${id}?api_key=${API_KEY}&language=en-US`);
    }
    
  }

  async getTrailer(id) {
    if (window.location.hash === '#ua') {
      return await axios.get(`${ID_URL}/${id}/videos?api_key=${API_KEY}&language=uk-UA`);
    } else {
      return await axios.get(`${ID_URL}/${id}/videos?api_key=${API_KEY}&language=en-US`);
    }
    
  }
  
  async fillGenreList() {
    if (window.location.hash === '#ua') {
      const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=uk-UA`);
      this.genreList = response.data.genres;
    } else {
      const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
      this.genreList = response.data.genres;
    }
    

    return this.genreList; 
   
   
  }

  getGenreById(genreId) {
    
    const genre = this.genreList.filter(({ id }) => {
      if (id === genreId) {
        return true;
      }
    });

    return genre[0].name;
  }
}

const YOUTUBE_URl_BY_ID =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';

const YOUTUBE_API_KEY = 'AIzaSyB6GdMv8RD8xISEFufgs3lbWAFN0Q-xs-Q';

export async function getTrailerYouTube(key) {
  // console.log(key);
  if (window.location.hash === '#ua') {
     return await axios.get(`${YOUTUBE_URl_BY_ID}${key}&key=${YOUTUBE_API_KEY}&language=uk-UA`);
  } else {
    return await axios.get(`${YOUTUBE_URl_BY_ID}${key}&key=${YOUTUBE_API_KEY}&language=en-US`);
   }
  
  // return await axios.get(`https://www.youtube.com/watch?v=${key}`);
}

