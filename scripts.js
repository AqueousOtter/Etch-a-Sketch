

const container = document.getElementById("container");
const rows = document.getElementsByClassName("row");
const cells = document.getElementsByClassName("cells")

//create basic grid
createGrid(16);


//make rows function
function createRow(number) {
    for(i = 0; i < number; ++i){
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
    }
};

//make columns function
function createCells(number){
    for(i=0; i < number; i++){
        for(j = 0; j < rows.length; j++){
            let cell = document.createElement("div");
            cell.innerHTML = "test";
            rows[j].appendChild(cell).className = "cells";
        }
    }

};

//creates grid size number x number
function createGrid(number){
    createRow(number);
    createCells(number);
};

//function to hold coloring logic
//TODO: add parameter for choosing different palettes
function colorGrid(){
    for (i = 0; i < cells.length; ++i){
        let colorCell = cells[i]; //gets specific cells and assigns listener
        cells[i].addEventListener("mouseover", ()=>{
            colorCell.style.backgroundColor = pixie();
        });
    }
};

//color functions
function pixie(){
    let colorNumber = Math.floor(Math.random()*5);
    let color;

    switch (colorNumber){
        case 0:
            color = "#FFAFCC";
            break;
        case 1:
            color = "#FFC8DD";
            break;
        case 2:
            color = "#CDB4DB";
            break;
        case 3:
            color = "#BDE0FE";
            break;
        case 4:
            color = "#A2D2FF";
            break;
        default:
            color = "#A2D2FF"
            break;
    }
    return color;
}