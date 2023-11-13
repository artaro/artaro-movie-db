import API from "./api";

const movieService = {
  getTrendingMovie: async (language = "en-US") => {
    try {
      const response = await API.get("/trending/movie/day", {
        params: {
          language,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Error get trending movies: ", error.message);
    }
  },
  searchMovie: async (query, page = 1) => {
    try {
      const response = await API.get("/search/keyword", {
        params: {
          query,
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
