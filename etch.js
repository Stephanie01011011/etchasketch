    
    const gridDisplay = document.getElementById("gridDisplay");
    gridDisplay.style.borderWidth = "5px";
    gridDisplay.style.borderStyle = "solid";
    gridDisplay.style.display = "flex";
    
    
    
    
    gridDisplay.style.width = "960px"; //switch fit-content to 100%
    gridDisplay.style.height = "960px";
    
    const button = document.getElementById("sizeBtn");
    var columnCount = row;
    var row = 16;
    var column = 16;

function createGrid(row, column){
    for (i = 0; i< column; i++){
        const squareC = document.createElement('div');
        squareC.className = "column";
        

        for(j = 0; j < row; j++){
            const squareR = document.createElement('div');
            squareR.className = "row";
            squareR.innerHTML = "hi";
            //flexgrow and basis fit the content width wise
            squareC.style.flexGrow = "1";
            squareC.style.flexBasis = "0";
            
            //How to get content to fit height wise
            squareC.style.display = "grid";
            
            squareC.appendChild(squareR);
            squareR.style.borderStyle = "solid";
            squareR.style.borderWidth = "1px";
            squareR.style.alignItems = "stretch";
            squareR.addEventListener("mouseover", (event) =>{
                event.target.style.backgroundColor = "blue";
            })
            //event for mouse leaving the square
            squareR.addEventListener("mouseout", (event) =>{
                event.target.style.backgroundColor = "white";
            })
        }
        
        gridDisplay.appendChild(squareC);
    }
}

function clearGrid(parent){
    while(parent.firstChild){
        parent.removeChild(gridDisplay.firstChild);
    }
}


sizeBtn.addEventListener("click", (event) => {
    clearGrid(gridDisplay);
    var rows = window.prompt("How many rows & columns? ");
    while(rows > 100){
        alert("Thats too many squares, try 100 or less.")
        var rows = window.prompt("How many rows & columns? ");
    }
    var columns = rows
    createGrid(rows, columns)
    return rows;
})
     
createGrid(row, column);
