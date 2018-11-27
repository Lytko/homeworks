let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let main = document.getElementById("main");
let myList = document.getElementById("list");
let ul = document.getElementsByTagName("ul");
let story = myList.getElementsByClassName("item");
let popup = document.getElementsByClassName("popup")[0];
let close = document.querySelector(".close");


console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem(){
    let newLi = document.createElement("li");
    newLi.innerHTML = "Новая задача";
    newLi.className = "item";
    myList.appendChild(newLi);
}
function delItem(){
    myList.removeChild(story[0]);
}


btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);


let name = prompt("Ваше имя?");
let age = prompt("Сколько вам лет?");
let access = false;

function mailing()
{
    console.log('Пользователь подписан на рассылку');
}

if (age >= 18) {
    access = true;
} else {
    access = false;
}

if (access === true) {
    alert('Доступ разрешен');
    console.log('Пользователь допущен к сайту');
    mailing();
} else {
    console.log('Доступ запрещен')
    alert('Доступ запрещен');
}




