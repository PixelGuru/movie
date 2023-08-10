import axios from "axios";

export const getUserInfo = async (token) => {
  try {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.get("http://127.0.0.1:8000/api/profile");
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
