const contact = () => {
    const main = document.getElementById("main");
    const tempMain = document.createElement("main");
    tempMain.setAttribute("id", "main");
    main.replaceWith(tempMain);

    const contactHeader = document.createElement("section");
    contactHeader.setAttribute("id", "mainHeader");
    tempMain.appendChild(contactHeader);
    contactHeader.innerHTML = "Contact Us";

    //contact
    const contactContent = document.createElement("section");
    contactContent.setAttribute("class", "mainHome");
    contactContent.setAttribute("id", "contactSection");
    tempMain.appendChild(contactContent);

    const ownerHeader = document.createElement("h2");
    ownerHeader.setAttribute("id", "ownerHeader");
    contactContent.appendChild(ownerHeader);
    document.getElementById("ownerHeader").innerHTML = "first last";

    const p = document.createElement("p");
    p.setAttribute("id", "number");
    contactContent.appendChild(p);
    p.innerHTML = "555-555-5555";

    const p1 = document.createElement("p");
    p1.setAttribute("id", "email");
    contactContent.appendChild(p1);
    p1.innerHTML = "first.last@gmail.com";
    

}

export {contact}