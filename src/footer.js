const footer = () => {
    var content = document.getElementById("content");
    var footer = document.createElement("footer");
    content.appendChild(footer)
    footer.innerHTML = "this is the footer";
}

export {footer}