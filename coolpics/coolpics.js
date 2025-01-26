const menuButton = document.querySelector(".menu-button");
const gallery = document.querySelector(".gallery");


function hideMenu() {
    const menu = document.querySelector(".menu nav");
    menu.classList.toggle("hide");
}

function windowSize() {
    const menu = document.querySelector(".menu nav");
        if (window.innerWidth > 1000) {
            menu.classList.remove("hide");
        } else {
            menu.classList.add("hide");
        }
}

function viewerTemplate (pic, alt) {
   return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;
    
    if (clickedElement.tagName !== "IMG") return;

    const imgSrc = clickedElement.getAttribute("src");
    const srcParts= imgSrc.split("-");
    const fullImgSrc = `${srcParts[0]}-full.jpeg`;
    const imgAlt = clickedElement.getAttribute("alt")

    const viewerHTML = viewerTemplate(fullImgSrc, imgAlt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);

}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
      viewer.remove();
    }
  }

menuButton.addEventListener("click", hideMenu);
windowSize();
window.addEventListener("resize", windowSize);
gallery.addEventListener("click", viewHandler);