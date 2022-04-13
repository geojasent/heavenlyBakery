const footer = () => {
    var content = document.getElementById("content");
    var footer = document.createElement("footer");
    content.appendChild(footer)
    footer.innerHTML = "Developed by geoJasent";
}

export {footer}