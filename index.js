import source from "./catalogue.md";

function initRender() {
    const app = document.getElementById("app");
    app.innerHTML = source;
}

console.log(`%cVERSION: ${VERSION}`, "color: red;font-size: 40px;");
initRender();
