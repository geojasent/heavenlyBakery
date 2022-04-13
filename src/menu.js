const menu = () => {
    const main = document.getElementById("main");
    const tempMain = document.createElement("main");
    tempMain.setAttribute("id", "main");
    main.replaceWith(tempMain);

    const menuHeader = document.createElement("section");
    menuHeader.setAttribute("id", "mainHeader");
    tempMain.appendChild(menuHeader);
    menuHeader.innerHTML = "Heavenly Bakery Menu";

    //danish -refactor into constructor?
    const danishContent = document.createElement("section");
    danishContent.setAttribute("class", "mainHome");
    danishContent.setAttribute("id", "danishSection");
    tempMain.appendChild(danishContent);
    
    const danishHeader = document.createElement("h2");
    danishHeader.setAttribute("id", "danishHeader");
    danishContent.appendChild(danishHeader);
    document.getElementById("danishHeader").innerHTML = "Danish - $4";
    
    const p = document.createElement("p");
    p.setAttribute("id", "danish");
    danishContent.appendChild(p);
    p.innerHTML = "Insert photo of danish here";
    
    //croissant
    const croissantContent = document.createElement("section");
    croissantContent.setAttribute("class", "mainHome");
    croissantContent.setAttribute("id", "croissantSection");
    tempMain.appendChild(croissantContent);

    const croissantHeader = document.createElement("h2");
    croissantHeader.setAttribute("id", "croissantHeader");
    croissantContent.appendChild(croissantHeader);
    document.getElementById("croissantHeader").innerHTML = "Croissant - $2";

    const p1 = document.createElement("p");
    p1.setAttribute("id", "croissant");
    croissantContent.appendChild(p1);
    p1.innerHTML = "Insert photo of croissant here";

    //panDulce
    const panDulceContent = document.createElement("section");
    panDulceContent.setAttribute("class", "mainHome");
    panDulceContent.setAttribute("id", "panDulceSection");
    tempMain.appendChild(panDulceContent);

    const panDulceHeader = document.createElement("h2");
    panDulceHeader.setAttribute("id", "panDulceHeader");
    panDulceContent.appendChild(panDulceHeader);
    document.getElementById("panDulceHeader").innerHTML = "Pan Dulce - $3";

    const p2 = document.createElement("p");
    p2.setAttribute("id", "panDulce");
    panDulceContent.appendChild(p2);
    p2.innerHTML = "Insert photo of panDulce here";
}

export {menu}