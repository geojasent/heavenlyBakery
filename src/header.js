import {navHome} from "./navHome.js"
import {menu} from "./menu.js"
import {contact} from "./contact.js"

const nav = () => {
    var content = document.getElementById("content");
    var nav = document.createElement("nav");
    nav.setAttribute("id", "nav");
    content.appendChild(nav)
    
    var ul = document.createElement("UL");

    const liArray = ["Home", "Menu", "Contact"];
        liArray.forEach(item => {
            var li = document.createElement("LI");
            li.setAttribute("id", item);
            li.innerHTML = item;
            ul.appendChild(li)
        })
    nav.appendChild(ul)
        
    const Home = document.getElementById("Home");
    Home.onclick = function() {navHome()};

    const Menu = document.getElementById("Menu");
    Menu.onclick = function() {menu()};

    const Contact = document.getElementById("Contact");
    Contact.onclick = function() {contact()};

}

export {nav}