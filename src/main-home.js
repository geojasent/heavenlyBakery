const mainHome = () => {
    var content = document.getElementById("content");
    var mainHome = document.createElement("main");
    content.appendChild(mainHome)
    mainHome.innerHTML = "this is the mainHome content";
}

export {mainHome}