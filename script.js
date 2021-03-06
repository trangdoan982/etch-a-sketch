const bw_btn = document.querySelector(".bw");
        const random_btn = document.querySelector(".random");
        const clearGrid_btn = document.querySelector(".clear-grid");
        const container = document.querySelector('.container');
        let theme=0;   


        //change color function
        function changeColor (e) {
            switch (theme) {
                case 0: 
                    this.style.backgroundColor = "black";
                    this.classList.add('.black');
                    break;
                case 1:
                    this.style.backgroundColor = randomizeColor();
                    this.classList.add(".Random");
                    break;
            }
        }

        function randomizeColor(e) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let color = "#"+randomColor;
            return color; 
        }


        //create grid function
        function createGrid(size) {
            //2 is double the size of border for each 
            let widthSquare = (container.offsetWidth)/size - 2;
            for (let c=0; c<(size**2); c++) {
                const cell = document.createElement('div');
                cell.classList.add('cell')
                cell.setAttribute('style', 
                    'border: 1px solid black');
                cell.style.height = widthSquare + 'px';
                cell.style.width = widthSquare + 'px';
                container.appendChild(cell);
            }
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => cell.addEventListener("mouseover", changeColor));

        }

        function updateGridSize() {
            dimension = prompt("What is the size of the grid?", 16);
            return dimension;
        }
        

       function clearGrid(e) {
            while (container.firstChild) {
            container.removeChild(container.lastChild);
            }
            updateGridSize();
            createGrid(dimension);
        }

        //add event listeners for each buttons
        bw_btn.addEventListener("click", () => {
            theme = 0;
            });
        random_btn.addEventListener("click",() =>  {
            theme = 1});
       
        clearGrid_btn.addEventListener("click", clearGrid);
        
        
    let size = prompt("What is the size of the grid?", 16);
    createGrid(size);
    console.log(theme);