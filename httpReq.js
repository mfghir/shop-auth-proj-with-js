import { removeModal, showModal } from "./utils/modal.js";

const BASE_URL = "https://fakestoreapi.com";
const modalButton = document.getElementById("modal-button");

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
    showModal(error.message);
  }
};

modalButton.addEventListener("click", removeModal);
export { postData };
