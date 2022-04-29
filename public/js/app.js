let url = 'http://localhost:3000';

function display(){
    hide(container);
    hide(displayQuestion);
    show(createQuestion);
    hide(container3)
    
}

function showBack(){
    hide(createQuestion);
    hide(displayQuestion);
    show(container);
    hide(container3)
    
}

function startQiuz(){
    show(displayQuestion);
    hide(createQuestion);
    hide(container);
    hide(container3);
    axios.get("/api/items/").then((result)=>{
        console.log(result.data);
    })
    
}
function hide(element){
    element.style.display ="none";
}

function submitQuiz(){
    hide(displayQuestion)
    show(container3)
    show(subQuiz);
}
function show(element){
    element.style.display ='block';
}

function addQuestion(){
    let add = [
        {
            question: "Who invented JavaScript?",
            answers: {
              a: "Douglas Crockford",
              b: "Sheryl Sandberg",
              c: "Brendan Eich"
            },
            correctAnswer: "c"
          },
    ]
    console.log(add)
}


let displayQuestion = document.querySelector('.contain1');
let createQuestion = document.querySelector('.contain2');
let container = document.querySelector("#container");
let container3 = document.querySelector(".contain3");
let subQuiz = document.querySelector("#submitQuiz");


// let btn_start = document.querySelector("#start");
// btn_start.addEventListener("click",startQiuz);
// let btn_create = document.querySelector("#create");
// btn_create.addEventListener("click",display);
// let backTostartQiuz = document.querySelector('#btn-back');
// backTostartQiuz.addEventListener('click',showBack);
// let submit = document.querySelector('#btn-submit');
// submit.addEventListener('click',submitQuiz);
// let back = document.querySelector('#back');
// back.addEventListener('click',showBack);
// let add = document.querySelector('#btn-add');
// add.addEventListener('click',addQuestion);
