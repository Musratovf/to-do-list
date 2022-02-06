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