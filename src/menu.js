import menu from "./menu.json";
import menuTemplate from "./menu.hbs";

const menuItemBox = document.querySelector(".js-menu")


function createMenu (menu) {
  return menu.map(menuTemplate).join("")
}


menuItemBox.insertAdjacentHTML("beforeend", createMenu(menu))