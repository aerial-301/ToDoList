'use-strict';

const list = document.getElementById('list');
const task = document.getElementById('task');

function createDoneButton(l){
    
    const doneItem = document.createElement('Button');
    doneItem.textContent = 'Done';
    doneItem.addEventListener('click', function(){
        taskDone(l);
    }, true);

    doneItem.className = 'Done-btn';

    l.appendChild(doneItem);
}

function createRemoveButton(l){

    const remItem = document.createElement('Button');
    remItem.textContent = 'Remove';
    remItem.addEventListener('click', function() {
        l.remove();
    }, true)

    remItem.className = 'Remove-btn';

    l.appendChild(remItem);
}

function addTask(e){
    if (e.key == 'Enter') submit();
}

function submit(){
    const task_value = task.value.trim();
    if (!task_value) return false;

    const listItem = document.createElement('li');
    const textItem = document.createElement('p');
    const editItem = document.createElement('button');
    editItem.textContent = 'Edit';
    editItem.addEventListener('click', function(){
        // Implement task editing
    })
    editItem.className = 'Edit-btn';
    textItem.className = 'list-text';
    textItem.textContent = task_value;
    listItem.appendChild(textItem);
    createDoneButton(listItem);
    listItem.appendChild(editItem);
    createRemoveButton(listItem);
    list.appendChild(listItem);
    task.value = '';
}

function taskDone(i){
    const p = i.querySelector('.list-text')
    const b = i.querySelector('.Done-btn');
    const e = i.querySelector('.Edit-btn');
    p.style.cssText = 
    '   text-decoration: line-through;\
        text-decoration-thickness: 2px;'
    b.remove();
    e.remove();


}


