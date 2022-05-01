
function hide(element){
    element.style.display ="none";
}

function show(element){
    element.style.display ='block';
}


function login(event) {
    event.preventDefault()
    let name = document.getElementById('name');
    let password = document.getElementById("password");
    console.log(name, password);
    if (name.value === "" || password.value === "") {
        alert('Must input your fill');
    } else {
        show(link_page);
        hide(wrappers);
    }
    let userName = document.querySelector(".username");
    userName.textContent = name.value;
}



//MAIN CODE --------------------------------------------------------
let link_page = document.querySelector('.link-page');

let wrappers = document.querySelector("#wrapper");
let subQuiz = document.querySelector("#btnNext");
subQuiz.addEventListener("click", login)

