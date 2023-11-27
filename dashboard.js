import authHandler from "./utils/authorization.js";
import { getData } from "./utils/httpReq.js";

const mainContent = document.getElementById("container");

const renderUsers = (users) => {
  mainContent.innerHTML = "";
};

const init = async () => {
  authHandler();
  const users = await getData("users");
  renderUsers(users);
};

document.addEventListener("DOMContentLoaded", init);
