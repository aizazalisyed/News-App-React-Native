import { create } from "apisauce";

const API_KEY = "c7e51c21082447cc943faad26bfad4cb";
const BASE_URL = "https://newsapi.org/v2";

const api = create({
  baseURL: BASE_URL,
});

const getTopHeadline = async () => {
  try {
    const response = await api.get(
      `/top-headlines?country=us&apiKey=${API_KEY}`
    );
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

const getByCategory = async (category) => {
  try {
    const response = await api.get(
      `/everything?q=${category}&apiKey=${API_KEY}`
    );
    if (response.ok) {
      return response.data;
    } else {
      console.error("Error fetching news by category:", response.problem);
      return null;
    }
  } catch (error) {
    console.error("Error in getByCategory:", error);
    return null;
  }
};

export default {
  getTopHeadline,
  getByCategory,
};
