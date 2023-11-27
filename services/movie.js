import API from "./api";

const movieService = {
  getPopularMoviesByPage: async (language, page) => {
    try {
      const response = await API.get("/movie/popular", {
        params: {
          language,
          page,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Error getting popular movies: ", error.message);
    }
  },
  searchMovie: async (query, include_adult, language, page) => {
    try {
      const response = await API.get("/search/movie", {
        params: {
          query,
          include_adult,
          language,
          page,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Error searching movies: ", error.message);
    }
  },
};

export default movieService;
