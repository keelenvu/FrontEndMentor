//counting number of tasks
let numTasks = document.querySelectorAll('.todo__uncheck').length;
document.querySelector('.items__left').innerHTML = numTasks + " items left";

//toggle dark and light mode
let toggleMode = document.querySelector(".todo__header--icon");

toggleMode.addEventListener("click", () => {
 let background = document.querySelector(".wrapper");
 background.classList.toggle("wrapper--light");
});

// toggle checks

/*let toggleChecks = document.querySelectorAll(".todo__uncheck");
toggleChecks.forEach((toggleCheck) => {
 toggleCheck.addEventListener("click", () => {
 toggleCheck.classList.toggle("todo__check");
 toggleCheck.classList.toggle("todo__uncheck");

//counts the number of tasks active
let numTasks = document.querySelectorAll('.todo__uncheck').length;
document.querySelector('.items__left').innerHTML = numTasks + " items left";
 })
 
}); */

var list = document.querySelector('.todo__tasks');
list.addEventListener('click', function(e) {
  if (e.target.className === 'todo__uncheck' || e.target.className === 'todo__check')  {
    e.target.classList.toggle('todo__uncheck');
    e.target.classList.toggle('todo__check');
    
  }
  //counts the number of tasks active
  let numTasks = document.querySelectorAll('.todo__uncheck').length;
    document.querySelector('.items__left').innerHTML = numTasks + " items left";
  
});

//toggle active item and unactive items
let toggleItems = document.querySelectorAll('.items__status--item');
toggleItems.forEach((toggleItem) => {
 toggleItem.addEventListener("click", () => {
  let checkedItems = document.querySelectorAll('.todo__check');
  let uncheckedItems = document.querySelectorAll('.todo__uncheck');
  let numTasks = document.querySelectorAll('.todo__uncheck').length;
  

  
 
  if (toggleItem.textContent == "Completed") {
   uncheckedItems.forEach((uncheckedItem) => {
   uncheckedItem.parentNode.style.display = 'none';
   })

   checkedItems.forEach((checkedItem) => {
    checkedItem.parentNode.style.display = 'flex';
   })
  } else if (toggleItem.textContent == "Active") {
   checkedItems.forEach((checkedItem) => {
   checkedItem.parentNode.style.display = 'none';
   })

   uncheckedItems.forEach((uncheckedItem) => {
   uncheckedItem.parentNode.style.display = 'flex';
   })

  } else {
    uncheckedItems.forEach((uncheckedItem) => {
    uncheckedItem.parentNode.style.display = 'flex';
    })

    checkedItems.forEach((checkedItem) => {
     checkedItem.parentNode.style.display = 'flex';
    })
  }
  
 })
});

//clear completed
let clear = document.querySelector('.items__status--clear');

clear.addEventListener("click", () => {
let checkedItems = document.querySelectorAll('.todo__check');
checkedItems.forEach((checkedItem) => {
  checkedItem.parentNode.remove()
 })
});


//adding new todo-tasks
addNewTask = document.querySelector(".todo__form");
input = document.querySelector('.todo__input');
addNewTask.addEventListener("submit", (e) => {
  let tasks = document.querySelector(".todo__tasks");
  let task = document.querySelector('.todo__tasks--incomplete');
  let clonedTask = task.cloneNode(true);
  let inputTask = clonedTask.childNodes[1];
  inputTask.nodeValue = input.value;
  clonedTask.childNodes[0].classList.remove("todo__check");
  clonedTask.childNodes[0].classList.add("todo__uncheck");
  tasks.prepend(clonedTask);
  input.value = '';
});










