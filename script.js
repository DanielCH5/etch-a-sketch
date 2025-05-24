//Create a 16x16 grid of square divs using JS


const container = document.querySelector('.container');
//Create an array for the divs in the grid
// const gridItems = [];
//Create a loop that creates 256 divs and pushes them
//into the gridItems array
// for (i = 0; i < 256; i++){
//     const gridItem = document.createElement('div');
//     gridItem.style.backgroundColor = 'red';
//     gridItems.push(gridItem);
// };
//Appends all of the items to the container
// for (let item of gridItems){
//     container.appendChild(item);
// };


//We have to change it to create 16 cells in a row
//and then create that row 16 times

function makeColumn(num) {
    for (i = 0; i < num; i++) {
        //Create the rows
        const gridRow = document.createElement('div');
        gridRow.classList.add('row')
        const row = [];
        for (j = 0; j < num; j++) {
            //Create 16 cells and append them to the gridrow
            const cell = document.createElement('div');
            cell.style.backgroundColor = 'green';
            cell.classList.add('cell')
            row.push(cell);
            for (let cell of row) {
                gridRow.appendChild(cell);
            }
        }
        //Append the gridrow to the container
        container.appendChild(gridRow);
    }

};

makeColumn(16);

//Setting up hover effect
//Get the cells from the dom
const cells = document.querySelectorAll('.cell');
//For each cell, when the mouse is over background is red
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'red';
    })
})
