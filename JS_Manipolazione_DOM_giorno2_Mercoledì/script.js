document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', addTask);
  
    function addTask() {
      if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
  
        
        taskText.addEventListener('click', () => {
          taskText.classList.toggle('crossed');
  
          if (taskText.classList.contains('crossed')) {
            const now = new Date();
            const dateString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
            const dateSpan = document.createElement('span');
            dateSpan.textContent = ` (completato il: ${dateString})`;
            dateSpan.className = 'completion-date';
            taskText.appendChild(dateSpan);
          } else {
            const dateSpan = taskText.querySelector('.completion-date');
            if (dateSpan) {
              taskText.removeChild(dateSpan);
            }
          }
        });
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Elimina';
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation(); 
          taskList.removeChild(li);
        });
  
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
  
        taskInput.value = '';
      }
    }
  });
  