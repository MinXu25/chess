const squares = document.querySelectorAll(".square");
const pieces = document.querySelectorAll("img");

squares.forEach(square => {
    square.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    square.addEventListener("drop", (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    });
});

pieces.forEach(piece => {
    piece.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text", e.target.id);
    });
});