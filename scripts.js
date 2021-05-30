

const container = document.getElementById("container");
const rows = document.getElementsByClassName("row");
const cells = document.getElementsByClassName("cells");
const pixiePalette = document.getElementById("pixie");
const earthPalette = document.getElementById("earth");
const pastelPalette = document.getElementById("pastel");
const synthWavePalette = document.getElementById("synthWave");
const sunsetPalette = document.getElementById("sunset");


//create basic grid
createGrid(16);
colorGrid();


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
            cell.innerHTML = "<br>";
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
    let selected = 'pixie';
    pixiePalette.addEventListener("click", ()=>{
        selected = 'pixie';
        return selected;
    });
    pastelPalette.addEventListener("click", ()=>{
        selected = 'pastel';
        return selected;
    });
    synthWavePalette.addEventListener("click", ()=>{
        selected = 'synthWave';
        return selected;
    });
    earthPalette.addEventListener("click", ()=>{
        selected = 'earth';
        return selected;
    });
    sunsetPalette.addEventListener("click", ()=>{
        selected = 'sunset';
        return selected;
    });

    for (i = 0; i < cells.length; ++i){
        let colorCell = cells[i]; //gets specific cells and assigns listener
        cells[i].addEventListener("mouseover", ()=>{
            colorCell.style.backgroundColor = paletteSelector(selected);
        });
    }
};

function paletteSelector(selected){
    let palette;
    switch(selected){
        case 'pixie':
            palette = pixie();
            break;
        case 'pastel':
            palette = pastel();
            break;
        case 'earth':
            palette = earth();
            break;
        case 'synthWave':
            palette = synthWave();
            break;
        case 'sunset':
            palette = sunset();
            break;
        default:
            palette = pixie();
            break;
    }
    return palette;

}
//color functions
let color;
function pixie(){
    let colorNumber = Math.floor(Math.random()*5);
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
};
function earth(){
    let colorNumber = Math.floor(Math.random()*5);
    switch (colorNumber){
        case 0:
            color = "#f0ead2";
            break;
        case 1:
            color = "#dde5b6";
            break;
        case 2:
            color = "#adc178";
            break;
        case 3:
            color = "#a98467";
            break;
        case 4:
            color = "#6c584c";
            break;
        default:
            color = "#6c584c"
            break;
    }
    return color;
};
function sunset(){
    let colorNumber = Math.floor(Math.random()*5);
    switch (colorNumber){
        case 0:
            color = "#ff9b54";
            break;
        case 1:
            color = "#ff7f51";
            break;
        case 2:
            color = "#ce4257";
            break;
        case 3:
            color = "#f20089";
            break;
        case 4:
            color = "#b76935";
            break;
        default:
            color = "#720026"
            break;
    }
    return color;
};
function pastel(){
    let colorNumber = Math.floor(Math.random()*5);
    switch (colorNumber){
        case 0:
            color = "#edd2e0";
            break;
        case 1:
            color = "#a491d3";
            break;
        case 2:
            color = "#f4afab";
            break;
        case 3:
            color = "#c5dca0";
            break;
        case 4:
            color = "#f5f2b8";
            break;
        default:
            color = "#f4afab"
            break;
    }
    return color;
};
function synthWave(){
    let colorNumber = Math.floor(Math.random()*10);
    switch (colorNumber){
        case 0:
            color = "#f72585";
            break;
        case 1:
            color = "#b5179e";
            break;
        case 2:
            color = "#7209b7";
            break;
        case 3:
            color = "#560bad";
            break;
        case 4:
            color = "#480ca8";
            break;
        case 5:
            color = "#3a0ca3";
            break;
        case 6:
            color = "#3f37c9";
            break;
        case 7:
            color = "#4361ee";
            break;
        case 8:
            color = "#4895ef";
            break;
        case 9:
            color = "#4cc9f0";
            break;
        default:
            color = "#4cc9f0"
            break;
    }
    return color;
};
