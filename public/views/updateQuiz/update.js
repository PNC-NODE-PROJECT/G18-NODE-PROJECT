
// FUNCTION OF GET DATA FROM SERVER TO DISPLAY ON BROWSER
function dataEdit() {
    axios.get("/api/items/").then((result) => {
        let questions = result.data;
        domForm(questions);
    })  
}
dataEdit();

function AddQuiz(newQuiz){
    console.log(newQuiz);
    axios.post("/api/items/add-question/",newQuiz).then(dataEdit());
}

function domForm (allquestion){
    while(container.firstChild){
        container.removeChild(container.lastChild)
    }
    for (let question of allquestion) {

        let card_question = document.createElement("div");
        card_question.className = "card-question m-auto";
        card_question.id = question["id"];
        let card = document.createElement("div");
        card.className = "card mt-4";
        // card.id = question["id"];

        let card_header = document.createElement("div");
        card_header.className = "card-header";
        card.appendChild(card_header);

        let h5 = document.createElement("h5");
        h5.textContent = question["question"];
        card_header.appendChild(h5);

        let form_control1 = document.createElement("div");
        form_control1.className = "form-control mx-2 my-2";
        let answer1 = document.createElement("label");
        answer1.className = "m-1";
        answer1.textContent = question["answers"]["A"];

        form_control1.appendChild(answer1);
        card.appendChild(form_control1);

        let form_control2 = document.createElement("div");
        form_control2.className = "form-control mx-2 my-2";
        let answer2 = document.createElement("label");
        answer2.className = "m-1";
        answer2.textContent = question["answers"]["B"];

        form_control2.appendChild(answer2);
        card.appendChild(form_control2);

        let form_control3 = document.createElement("div");
        form_control3.className = "form-control mx-2 my-2";
        let answer3 = document.createElement("label");
        answer3.className = "m-1";
        answer3.textContent = question["answers"]["C"];

        form_control3.appendChild(answer3);
        card.appendChild(form_control3);

        let form_control4 = document.createElement("div");
        form_control4.className = "form-control mx-2 my-2";
        let answer4 = document.createElement("label");
        answer4.className = "m-1";
        answer4.textContent = question["answers"]["D"];
        form_control4.appendChild(answer4);
        card.appendChild(form_control4);

        let btnedit = document.createElement("button");
        btnedit.id = "edit";
        btnedit.className = "btn btn-primary mt-1 m-1";
        btnedit.textContent = "Edit";

        let btnDelete = document.createElement("button")
        btnDelete.id = "delete";
        btnDelete.className = "btn btn-danger mt-1 m-1";
        btnDelete.textContent = "Delete";

        card_question.appendChild(card);
        card_question.appendChild(btnedit);
        card_question.appendChild(btnDelete);
        container.appendChild(card_question);
    }
    let btnDeletes = document.querySelectorAll("#delete");
    btnDeletes.forEach(btn => {
        btn.addEventListener("click",deleteQuestions);
    });
}


// FUNSTIN HIDE AND SHOW OF ELEMENT
function show(element) {
    element.style.display = "block";
}
function hide(element) {
    element.style.display = "none";
}


// BUTTON OF CANCEL CREATE
function cancelCreate(){
    hide(domCreate);
    show(btnAdd);
    show(container);
}


// DOM CREATE QUESTION
const domCreate = document.getElementById("form-create");
function showDomCreate() {
    show(domCreate);
    hide(btnAdd);
    hide(container);
}


// BUTTON ADD
const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", showDomCreate);


// THE LISH OF ADD QUESTION
function addQuestion() {
    isAdded = true;


    // GET QUESTION FROM INPUT
    let question = document.querySelector("#question").value;
    console.log(question);


    // GET CHOICES OF ANSWER FROM INPUT
    let answer1 = document.querySelector("#answer1").value;
    let answer2 = document.querySelector("#answer2").value;
    let answer3 = document.querySelector("#answer3").value;
    let answer4 = document.querySelector("#answer4").value;
    let correctAnswer = document.querySelector("#correctAnswer").value;


    // GET ANSWER FROM INPUT
    let data ={};
    if (question.length === 0 || answer1.length === 0 || answer2.length === 0 || answer3.length === 0 || answer4.length === 0) {
        alert("You missing")
    } else {
        data = { question: question, answers: {"A":answer1,"B":answer2,"C" :answer3,"D": answer4}, correct :correctAnswer};
        answerList.push(data);
        AddQuiz(data);
        show(container)
        hide(domCreate)
    }
}


//  FUNCTION OF DISPLAY FOR EDIT QUESTION
function displayEditQuestion() {
    let section = document.createElement("section");
    section.className = "section2";

    let containQuestion = document.createElement("div");
    containQuestion.setAttribute("id", "containQuestion");
    let elementAnswer=document.getElementById('elementAnswer');
    for (let question of answerList) {
        let container = document.querySelector(".container-fluid");
        let card_question = document.createElement("div");
        card_question.className = "card-question m-auto";

        let card = document.createElement("div");
        card.className = "card mt-4";
        card.id = question["id"];

        let card_header = document.createElement("div");
        card_header.className = "card-header";
        card.appendChild(card_header);

        let h5 = document.createElement("h5");
        h5.textContent = question["question"];
        card_header.appendChild(h5);

        let form_control1 = document.createElement("div");
        form_control1.className = "form-control mx-2 my-2";
        let answer1 = document.createElement("label");
        answer1.className = "m-1";
        answer1.textContent = question["myAnsers"]["answer1"];
        let radio1 = document.createElement("input");
        radio1.type = "radio"
        radio1.id = "provices1";
        radio1.name = "provices";
        radio1.value = 5;
        form_control1.appendChild(radio1);
        form_control1.appendChild(answer1);
        card.appendChild(form_control1);

        let form_control2 = document.createElement("div");
        form_control2.className = "form-control mx-2 my-2";
        let answer2 = document.createElement("label");
        answer2.className = "m-1";
        answer2.textContent = question["myAnsers"]["answer2"];
        let radio2 = document.createElement("input");
        radio2.type = "radio"
        radio2.id = "provices2";
        radio2.name = "provices";
        radio2.value = 5;
        form_control2.appendChild(radio2);
        form_control2.appendChild(answer2);
        card.appendChild(form_control2);

        let form_control3 = document.createElement("div");
        form_control3.className = "form-control mx-2 my-2";
        let answer3 = document.createElement("label");
        answer3.className = "m-1";
        answer3.textContent = question["myAnsers"]["answer3"];
        let radio3 = document.createElement("input");
        radio3.type = "radio"
        radio3.id = "provices3";
        radio3.name = "provices";
        radio3.value = 5;
        form_control3.appendChild(radio3);
        form_control3.appendChild(answer3);
        card.appendChild(form_control3);

        let form_control4 = document.createElement("div");
        form_control4.className = "form-control mx-2 my-2";
        let answer4 = document.createElement("label");
        answer4.className = "m-1";
        answer4.textContent = question["myAnsers"]["answer4"];
        let radio4 = document.createElement("input");
        radio4.type = "radio"
        radio4.id = "provices4";
        radio4.name = "provices";
        radio4.value = 5;
        form_control4.appendChild(radio4);
        form_control4.appendChild(answer4);
        card.appendChild(form_control4);

        let btnedit = document.createElement("button");
        btnedit.id = "edit";
        btnedit.className = "btn btn-primary mt-1 m-1";
        btnedit.textContent = "Edit";

        let btnDelete = document.createElement("button")
        btnDelete.id = "delete";
        btnDelete.className = "btn btn-danger mt-1 m-1";
        btnDelete.textContent = "Delete";

        card_question.appendChild(card);
        card_question.appendChild(btnedit);
        card_question.appendChild(btnDelete);
        elementAnswer.appendChild(card_question);
    }
    

}
  
function deleteQuestions(event){
    event.preventDefault();
    if (event.target.id === "delete"){
        let id = event.target.parentElement.id;
        axios.delete("/api/items/" +id).then((result)=>{
            alert("success")
        })
        dataEdit();
    }
}
// deleteQuestions(e);
// GLOBAL VARIABLE
let answerList = [];
let button = document.getElementById("create");
button.addEventListener("click", addQuestion);
// console.log(button);
let container = document.querySelector(".container-fluid");