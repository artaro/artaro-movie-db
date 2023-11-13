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
  searchMovie: async (
    query,
    include_adult = false,
    language = "en-US",
    page = 1
  ) => {
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
