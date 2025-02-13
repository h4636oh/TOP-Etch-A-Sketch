//creates a grid of boxes in canvas
function createGrid(gridSize) {

    // clears the default text in canvas
    const canvas = document.querySelector(".canvas");
    canvas.classList.remove("center-div");
    canvas.textContent = "";
    canvas.style.fontSize = "0px";

    // removes existing boxes from the canvas
    if (document.querySelector(".box")) {
        const box = document.querySelectorAll(".box");
        box.forEach(el => {
            el.remove();
        })
    }

    // adds boxes to the canvas to create the grid
    const boxSize =(768/gridSize) + "px";
    for (let i=0; i<2*(gridSize**2); i++) {
        const box = document.createElement("div");
        canvas.appendChild(box);
        box.classList.toggle("box");
        box.style.height = boxSize;
        box.style.width = boxSize;
        box.style.backgroundColor = "var(--bs-body-bg)";
    }
}

// lets user color the grid
function colorGrid(color) {

    const prevcolorselected = document.querySelector(".selected-color");
    if (prevcolorselected) {
        prevcolorselected.classList.remove("selected-color");
    }
    const colorbtn = document.querySelector(`#c_${color}`);
    colorbtn.classList.add("selected-color");

    const boxs = document.querySelectorAll(".box");
    boxs.forEach(el => {
        el.addEventListener("mousedown", () => {
            el.style.backgroundColor = `#${color}`;
            mousedown = true;
        })
        el.addEventListener("mouseup", () => {
            mousedown = false;
        })
        el.addEventListener("mouseover", () => {
            if (mousedown) {
                el.style.backgroundColor = `#${color}`;
            }
        })
    })
    const canvas = document.querySelector(".canvas");
    canvas.addEventListener("mouseleave", () => {
        mousedown = false;
    })
}

// Rainbow grid
function rainbowgrid() {

    const prevcolorselected = document.querySelector(".selected-color");
    if (prevcolorselected) {
        prevcolorselected.classList.remove("selected-color");
    }
    const colorbtn = document.querySelector(`#rainbowcolor`);
    colorbtn.classList.add("selected-color");

    const boxs = document.querySelectorAll(".box");
    boxs.forEach(el => {
        el.addEventListener("mousedown", () => {
            el.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            mousedown = true;
        })
        el.addEventListener("mouseup", () => {
            mousedown = false;
        })
        el.addEventListener("mouseover", () => {
            if (mousedown) {
                el.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            }
        })
    })
    const canvas = document.querySelector(".canvas");
    canvas.addEventListener("mouseleave", () => {
        mousedown = false;
    })
}

// Greyscale grid
function greyscalegrid() {

    const prevcolorselected = document.querySelector(".selected-color");
    if (prevcolorselected) {
        prevcolorselected.classList.remove("selected-color");
    }
    const colorbtn = document.querySelector(`#greyscalecolor`);
    colorbtn.classList.add("selected-color");

    const boxs = document.querySelectorAll(".box");
    boxs.forEach(el => {
        el.addEventListener("mousedown", () => {
            el.style.backgroundColor = `hsl(0%, 0%, ${Math.random() * 100}%)`;
            mousedown = true;
        })
        el.addEventListener("mouseup", () => {
            mousedown = false;
        })
        el.addEventListener("mouseover", () => {
            if (mousedown) {
                el.style.backgroundColor = `hsl(0, 0%, ${Math.random() * 100}%)`;
            }
        })
    })
    const canvas = document.querySelector(".canvas");
    canvas.addEventListener("mouseleave", () => {
        mousedown = false;
    })
}

// clears the grid
function clearGrid() {
    document.querySelector("#clearbtn").addEventListener("click", () => {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(el => {
            el.style.backgroundColor = "var(--bs-body-bg)";
        })
    })
}

// selects a custom color to be filled in the grid
function customColor() {
    
    const prevcolorselected = document.querySelector(".selected-color");
    if (prevcolorselected) {
        prevcolorselected.classList.remove("selected-color");
    }
    const colorbtn = document.querySelector("#favcolor");
    colorbtn.classList.add("selected-color");

    
    const colorpicker = document.querySelector("#favcolor");
    colorpicker.addEventListener("change", () => {
        colorGrid(colorpicker.value);
    })
}

// erases the grid
function erasergrid() {
    const prevcolorselected = document.querySelector(".selected-color");
    if (prevcolorselected) {
        prevcolorselected.classList.remove("selected-color");
    }
    const colorbtn = document.querySelector(`#eraser`);
    colorbtn.classList.add("selected-color");

    const boxs = document.querySelectorAll(".box");
    boxs.forEach(el => {
        el.addEventListener("mousedown", () => {
            el.style.backgroundColor = "var(--bs-body-bg)";
            mousedown = true;
        })
        el.addEventListener("mouseup", () => {
            mousedown = false;
        })
        el.addEventListener("mouseover", () => {
            if (mousedown) {
                el.style.backgroundColor = "var(--bs-body-bg)";
            }
        })
    })
    const canvas = document.querySelector(".canvas");
    canvas.addEventListener("mouseleave", () => {
        mousedown = false;
    })
}

document.body.onload = () => {
    // for coloring the grid using draging the mouse around the canvas
    let mousedown = false;

    // Checks for change in color
    customColor();
    clearGrid();

    // 
}

// Stops user to zoom using ctrl+(+/-)/scroll
document.addEventListener("wheel", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
        event.preventDefault();
    }
});