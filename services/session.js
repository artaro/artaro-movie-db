import API from "./api";

const sessionService = {
  getTMDBRequestToken: async () => {
    try {
      const response = await API.get("/authentication/token/new");

      return response.data;
    } catch (error) {
      throw new Error("Error getting TMDB request token", error.message);
    }
  },
  createTMDBSession: async (body) => {
    try {
      const response = await API.post("/authentication/session/new", {
        data: { request_token: body },
      });

      return response;
    } catch (error) {
      throw new Error("Error creating TMDB session", error.message);
    }
  },
  deleteTMDBSession: async (body) => {
    try {
      const response = await API.delete("/authentication/session", body);

      return response;
    } catch (error) {
      throw new Error("Error deleting TMDB session", error.message);
    }
  },
};

export default sessionService;
