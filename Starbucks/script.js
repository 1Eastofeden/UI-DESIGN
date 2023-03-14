
let fasolidDOM = document.querySelector("#fasolid");
let findDOM = document.querySelector("#find");

document.querySelector("#find").addEventListener("mouseenter", function () {
    fasolidDOM.style.color = "#006241";
    findDOM.style.color = "#006241";
});

document.querySelector("#find").addEventListener("mouseleave", function () {
    fasolidDOM.style.color = "black";
    findDOM.style.color = "black";
}); // find store

