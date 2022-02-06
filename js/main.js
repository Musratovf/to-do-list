const elInput = document.querySelector('.header__input');
const headerBtn = document.querySelector('.header__btn');
const todoList = document.querySelector('.todolist');   
const deleteAllBtn = document.querySelector('.footer__btn');   

elInput.onkeyup = () => {
    let userData = elInput.value;
    if(userData.trim() != 0 ) {
        headerBtn.classList.add("active")
    }else {
        headerBtn.classList.remove("active")
    }
}

headerBtn.onclick = () => {
    let userData = elInput.value;
    let getLocalStorage = window.localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = [];
    }else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks()
};

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = [];
    }else {
        listArr = JSON.parse(getLocalStorage);
    } 
    const pendingNumber = document.querySelector('.pending__number'); 
    pendingNumber.textContent = listArr.length;
    if(listArr.length > 0) {
        deleteAllBtn.classList.add("active")
    }else {
        deleteAllBtn.classList.remove("active")

    }
    let newLiTag = ''
    listArr.forEach((element, index) => {
        newLiTag += `<li class="todolist__item">${element}<span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
    });
    todoList.innerHTML = newLiTag;
    elInput.value = null;
}
function deleteTask(index) {
    let getLocalStorage = window.localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1)
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks()
}

deleteAllBtn.onclick = () => {
    listArr = []
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks()
}