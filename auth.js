import { postData } from "./utils/httpReq.js";
import authHandler from "./utils/authorization.js";
import { setCookie } from "./utils/cookie.js";

import validateForm from "./utils/validation.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (e) => {
  e.preventDefault();
  const username = inputsBox[0].value;
  const password = inputsBox[1].value;

  const validation = validateForm(username, password);
  if (!validation) return;

  const response = await postData("auth/login", { username, password });
  setCookie(response.token);
  location.assign("index.html");
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
