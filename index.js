import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");

const showProducts = (products) => {};

const init = async () => {
  const cookie = getCookie();

  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }

  const allProducts = await getData("products");
  showProducts(allProducts);
};

document.addEventListener("DOMContentLoaded", init);
