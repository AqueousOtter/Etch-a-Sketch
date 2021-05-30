const container = document.getElementById("container");
const rows = document.getElementsByClassName("row");
const cells = document.getElementsByClassName("cell")


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
            rows[j].appendChild(cell).className = "cell";
        }
    }

};

//creates grid size number x number
function createGrid(number){
    createRow(number);
    createCells(number);
};

//random color function
//picks a random number, assigns color based on parameter
//TODO: add parameter to choose palette
function colorPicker() {

}