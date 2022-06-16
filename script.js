let change = document.querySelector(".change");
let container = document.getElementById("grid");
let restart = document.querySelector('.restart');
let cells = document.getElementsByClassName("cell");

let numRows = 16;
let numColumns = 16;
let height = parseInt(container.style.height);
let width = parseInt(container.style.width);

let cellHeight = (640 - numColumns * 2) / numRows;
let cellWidth = (640 - numRows * 2) / numColumns;

for (i = 0; i < numRows * numColumns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.style.height = String(cellHeight) + 'px';
    cell.style.width = String(cellWidth) + 'px';

    // addMouseOver(cell);
    addMouseClick(cell);
    // addMouseOut(cell);
}

function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

restart.addEventListener("click", () => {
    for (let cellRestart of cells) {
        cellRestart.style.backgroundColor = "white";
    }
})

change.addEventListener("click", () => {
    let rows = prompt("How many rows? (Up to 100)");
    let columns = prompt("How many columns? (Up to 100)");
    numRows = parseInt(rows);
    numColumns = parseInt(columns);

    cellHeight = (640 - numColumns * 2) / rows;
    cellWidth = (640 - numRows * 2) / columns;

    while (cells[0]) {
        container.removeChild(cells[0]);
    }

    for (i = 0; i < rows * columns; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
        cell.style.height = String(cellHeight) + 'px';
        cell.style.width = String(cellWidth) + 'px';

        // addMouseOver(cell);
        addMouseClick(cell);
        // addMouseOut(cell);
    }
})

function addMouseOver(cell) {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";
        console.log("div mouse over"); 
    });
    return cell;
}

function addMouseOut(cell) {
    cell.addEventListener("mouseout", () => {
        cell.style.background = "white";
        console.log("div mouse out")
    });
    return cell;
}

function addMouseClick(cell) {
    cell.addEventListener("click", () => {
        color = randomColor();
        cell.style.background = color;
        console.log("div clicked");
    });
    return cell;
}