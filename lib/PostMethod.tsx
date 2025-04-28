import axios from "axios";

export const PostMethod = async (url, data) => {
  let accessToken =
    "wF6WuI0UJIG1uy7ReTVQZtWyqAzFFJFU23WrWyT8KLx9KCrQJDwF8VouvE9j3ZaK";

  try {
    const response = await axios.post(`${url}`, data, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error, you can log it or throw it further
    console.error("Error in POST request:", error);
    throw error;
  }
};
