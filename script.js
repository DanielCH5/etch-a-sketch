//Create a 16x16 grid of square divs using JS


const container = document.querySelector('.container');
//Create an array for the divs in the grid
const gridItems = [];
//Create a loop that creates 256 divs and pushes them
//into the gridItems array
for (i = 0; i < 256; i++){
    const gridItem = document.createElement('div');
    gridItem.style.backgroundColor = 'red';
    gridItem.style.display = 'flex';
    gridItems.push(gridItem);
};
//Appends all of the items to the container
for (let item of gridItems){
    container.appendChild(item);
};


