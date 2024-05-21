import { create } from "apisauce";

const API_KEY = "&apiKey=c7e51c21082447cc943faad26bfad4cb";
const BASE_URL = "https://newsapi.org/v2";

const api = create({
  baseURL: BASE_URL,
});

const getTopHeadline = async () => {
  try {
    const response = await api.get("/top-headlines?country=us" + API_KEY);
    if (response.ok) {
      return response.data;
    } else {
      console.error("Error fetching top headlines:", response.problem);
      return null;
    }
  } catch (error) {
    console.error("Error in getTopHeadline:", error);
    return null;
  }
};

export default {
  getTopHeadline,
};
