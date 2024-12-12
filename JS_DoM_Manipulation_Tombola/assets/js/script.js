        const tombolaBoard = document.getElementById('tombolaBoard');
        const drawNumberBtn = document.getElementById('drawNumberBtn');
        const drawnNumbers = [];
      
        for
         (let i = 1; i <= 76; i++) {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.textContent = i;
          cell.id = `cell-${i}`;
          tombolaBoard.appendChild(cell);
        }
      
        drawNumberBtn.addEventListener('click', drawNumber);
      
        function drawNumber() {
          let randomNumber;
          do {
            randomNumber = Math.floor(Math.random() * 76) + 1;
          }  
          
          while (drawnNumbers.includes(randomNumber));
      
          drawnNumbers.push(randomNumber);
          document.getElementById(`cell-${randomNumber}`).classList.add('drawn');
        }
      

