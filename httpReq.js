import { showModal } from "./utils/modal.js";

const BASE_URL = "https://fakestoreapi.com";

const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    showModal("an error occurred");
  }
};

export { postData };
