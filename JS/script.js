let todoList = function(){

    let container = document.createElement('div')
    container.classList.add('container')
    document.body.appendChild(container)
    let div = document.createElement('div')
    div.classList.add('item')
    container.appendChild(div)
    let top = document.createElement('div')
    top.classList.add('top')
    div.appendChild(top)   
    let top_name = document.createElement('p')
    top_name.classList.add('top_name')
    top_name.innerHTML = 'ToDoList'
    top.appendChild(top_name) 
  

    let input = document.createElement('div')
    input.classList.add('input')
    input.innerHTML = `<input type="text" maxlength="25" placeholder="Type your task..." name="name">`
    div.appendChild(input);

    let div_actions = document.createElement('div')
    div_actions.classList.add('div_actions')
    div.appendChild(div_actions)

    document.querySelector('input').addEventListener('keyup', function(event){
        if (event.code == 'Enter'){
            getData();
        }
    })

    this.getData = function(){
        this.action = document.querySelector('input');
        todoInfo = this.action.value
        this.showData()
        this.action.value = ''
    }

    this.showData = function(){
        let toDo = document.createElement('div')
        toDo.classList.add('div_action')
        toDo.innerHTML = "<p class='doing'>" + todoInfo + "</p>" + "<input class='checkbox' type='checkbox'>"
        div_actions.appendChild(toDo)
        checkbox = document.querySelectorAll('input[class=checkbox]')
        checkbox.forEach(function(argument){
            argument.addEventListener('change', function(event) {
                let targetTodo = event.target.closest("div");
                if(argument.checked) {
                    targetTodo.style.textDecoration = 'line-through';
                    targetTodo.style.color = 'grey';
                } else {
                    targetTodo.style.textDecoration = 'none'
                    targetTodo.style.color = 'black'
                }
            })
        }) 
        
        deletes = document.querySelectorAll('.div_action')
        deletes.forEach(function(arguments){
            arguments.addEventListener('dblclick', function(e){
                let targetDelete = e.target.closest('div')
                div_actions.removeChild(targetDelete)
            })
        })
    }         
}
todoList();
