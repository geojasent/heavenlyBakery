const header = () => {
    var content = document.getElementById("content");
    var header = document.createElement("header");
    content.appendChild(header)
    header.innerHTML = "this is the header content";
    
    var ul = document.createElement("UL");

    const liArray = ["Home", "Menu", "Contact"];
        liArray.forEach(item => {
            var li = document.createElement("LI");
            li.innerHTML = item;
            ul.appendChild(li)
        })
    header.appendChild(ul)
}

export {header}