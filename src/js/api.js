import axios from 'axios';

const API_KEY = '53f2c47317a563cd2628c68ceb6a6673';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;
const GANRE_LIST_URL = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

// https://api.themoviedb.org/3/movie/76600/videos?api_key=53f2c47317a563cd2628c68ceb6a6673&language=en-US

export class FetchAPI {
  constructor() {
    this.page = 1;
  }

  async fetchTrendingFilms() {
    return await axios.get(`${TREND_URL}?api_key=${API_KEY}`);
  }

  async fetchSearchFilms(searchQuery) {
    return await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${searchQuery}`
    );
  }

  async getFilmToId(id) {
    return await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
  }

  async getTrailer(id) {
    return await axios.get(`${ID_URL}/${id}/videos?api_key=${API_KEY}`);
  }

  async fillGenreList() {
    const response = await axios.get(GANRE_LIST_URL);
    this.genreList = response.data.genres;
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
  return await axios.get(`${YOUTUBE_URl_BY_ID}${key}&key=${YOUTUBE_API_KEY}`);
  // return await axios.get(`https://www.youtube.com/watch?v=${key}`);
}
