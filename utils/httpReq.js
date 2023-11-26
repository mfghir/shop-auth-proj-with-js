import { removeModal, showModal } from "./modal.js";

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
    // showModal("an error occurred");
    alert("an error occurred");
  }
};

const getData = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    const json = await response.json();
    return json;
  } catch (error) {
    alert("an error occurred");
  }
};

modalButton.addEventListener("click", removeModal);
export { postData, getData };
