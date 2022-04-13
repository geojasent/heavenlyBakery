const initialHome = () => {
    const content = document.getElementById("content");
    const mainHome = document.createElement("main");
    mainHome.setAttribute("id", "main");
    content.appendChild(mainHome);

    const header = document.createElement("header");
    header.setAttribute("id", "mainHeader");
    mainHome.appendChild(header);
    header.innerHTML = "Heavenly Bakery";
    
    const mainContent = document.createElement("section");
    mainContent.setAttribute("class", "mainHome");
    mainContent.setAttribute("id", "welcome");
    mainHome.appendChild(mainContent);
    const welcome = document.getElementById("welcome");
    welcome.innerHTML = "Pastries and more baked daily.";

    const hoursContent = document.createElement("section");
    hoursContent.setAttribute("class", "mainHome");
    hoursContent.setAttribute("id", "hours");
    mainHome.appendChild(hoursContent);

    const hoursHeader = document.createElement("h2");
    hoursHeader.setAttribute("id", "hoursHeader");
    hoursContent.appendChild(hoursHeader);
    document.getElementById("hoursHeader").innerHTML = "Hours";
    
    const p = document.createElement("p");
    p.setAttribute("id", "hoursText");
    hoursContent.appendChild(p);
    p.innerHTML = "Monday-Friday: 8am - 6pm</br> Saturday: 10am - 6pm</br> Sunday: Closed";
}

export {initialHome}