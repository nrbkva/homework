document.querySelector('.addBtn').onclick = function () {
        if (document.querySelector('input').value === ""){
            alert('Please enter a task')
        }else{(document.querySelector('.tasks').innerHTML
        +=`<div class = "task">
            <span class = "taskName">${document.querySelector('input').value}</span>
            <button class = "delete">x</button>
        </div>;`)
        //    delete task
        let current_tasks = document.querySelectorAll('.delete')
        for (let i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function (){
            this.parentNode.remove();
            }
        }
        ///////////done
        let doneTask = document.querySelectorAll('.taskName')
        for (let i = 0; i < doneTask.length; i++){
            doneTask[i].onclick = function (){
                this.classList.toggle('completed')
            }
        }
        let buttons = document.getElementsByClassName("addBtn");
        for (let i in buttons) {
          if (buttons[i].addEventListener) {
            buttons[i].addEventListener('click', function(e){
              this.previousElementSibling.value = "";
            });
          }
        }
    }
}

