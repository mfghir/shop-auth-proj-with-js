import { postData } from "./httpReq.js";
import authHandler from "./utils/authorization.js";
import { setCookie } from "./utils/cookie.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (e) => {
  e.preventDefault();
  const username = inputsBox[0].value;
  const password = inputsBox[1].value;

  const response = await postData("auth/login", { username, password });
  setCookie(response.token);
  location.assign("index.html");
};


loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
