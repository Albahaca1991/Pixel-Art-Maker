// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    var table = document.getElementById("pixelCanvas");
    var grid = '';

// Your code goes here!
// Nested loop 
    for (var x = 0; x < height; x++) {
        grid += '<tr class="row-' + x + '">';
        for (var y = 0; y < width; y++) {
            grid += '<td class="cell" id="row-' + x + '_cell-' + y + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table element
    table.innerHTML = grid;

// clickEvent
    addClickEventToCells();
}

// Submit
function Submit() {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

document.getElementById('sizePicker').onsubmit = function () {
    Submit();
}

// Coloring
function addClickEventToCells() {
    var colorPicker = document.getElementById("colorPicker");
    var cells = document.getElementsByClassName('cell');
    for (var x = 0; x < cells.length; x++) {
        cells[x].addEventListener("click", function (event) {
            var clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
};