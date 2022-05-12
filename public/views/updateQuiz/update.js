
// FUNCTION OF GET DATA FROM SERVER TO DISPLAY ON BROWSER
let questions = [];
function dataEdit() {
    axios.get("/api/items").then((result) => {
        questions = result.data;
        domForm(questions);
    })  
}
dataEdit();

function AddQuiz(newQuiz) {
    axios.post("/api/items/add-question/", newQuiz)
    .then(dataEdit());
}

function domForm(allquestion) {
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
    for (let question of allquestion) {
        let card_question = document.createElement("div");
        card_question.className = "card-question m-auto";
        card_question.id = question["id"];
        let card = document.createElement("div");
        card.className = "card mt-4";

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
        btnedit.addEventListener("click",questionEdit);
        let btnDelete = document.createElement("button")
        btnDelete.id = "delete";
        btnDelete.className = "btn btn-danger mt-1 m-1";
        btnDelete.textContent = "Delete";
        btnDelete.addEventListener("click",deleteQuestions);

        card_question.appendChild(card);
        card_question.appendChild(btnedit);
        card_question.appendChild(btnDelete);
        container.appendChild(card_question);
    }
}


// FUNSTIN HIDE AND SHOW OF ELEMENT
function show(element) {
    element.style.display = "block";
}

function hide(element) {
    element.style.display = "none";
}


// BUTTON OF CANCEL CREATE
function cancelCreate() {
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

function addQuestion() {

    // GET ANSWER FROM INPUT
    let data ={};
    if (question.value.length === 0 || answer1.value.length === 0 || answer2.value.length === 0 || answer3.value.length === 0 || answer4.value.length === 0 || correctAnswer.value.length === 0) {
        alert("You missing")
    } else {
        data = { question: question.value, answers: {"A":answer1.value,"B":answer2.value,"C" :answer3.value,"D": answer4.value}, correct :correctAnswer.value};
        answerList.push(data);
        AddQuiz(data);
        show(container)
        hide(domCreate)
        question .value = "";
        answer1.value = "";
        answer2.value = "";
        answer3.value = "";
        answer4.value = "";
        correctAnswer.value = "";
    }
}


//  FUNCTION OF DISPLAY FOR QUESTION
function displayEditQuestion() {
    let section = document.createElement("section");
    section.className = "section2";

    let containQuestion = document.createElement("div");
    containQuestion.setAttribute("id", "containQuestion");
    let elementAnswer=document.getElementById("elementAnswer");
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


// FUCTION EDIT QUESTIONS
let id = "";
function questionEdit(e) {
    id = e.target.parentElement.id;

    for (let i = 0;i<questions.length;i++) {
        if (questions[i].id == id) {
            question .value = questions[i].question
            answer1.value = questions[i]["answers"].A;
            answer2.value = questions[i]["answers"].B;
            answer3.value = questions[i]["answers"].C;
            answer4.value = questions[i]["answers"].D;
        }
    }
    show(domCreate);
    show(btn_update)
    hide(container);
    hide(btnAdd);
    hide(button);
}

function save(e){
    questionSave(id);
    show(container);
    hide(domCreate);
    hide(btn_update)
    show(btnAdd);
    show(button);
}


//FUNCTION SAVE QUESTION
function questionSave(id) {
    let body = {"question": question.value, "answers":{"A": answer1.value,"B": answer2.value, "C":answer3.value, "D": answer4.value}};
    axios.put("/api/items/" + id, body)
    .then(dataEdit())
}
  

// FUNCTION OF DELETE QUESTION
function deleteQuestions(event) {
    event.preventDefault();
    if (event.target.id === "delete") {
        let id = event.target.parentElement.id;
        axios.delete("/api/items/" + id).then((result) => {
            alert("Deleted successfuly")
        })
        dataEdit();
    }
}


// GLOBAL VARIABLE
let answerList = [];
let btn_update = document.querySelector("#update");
btn_update.addEventListener("click", save);
let button = document.getElementById("create");
button.addEventListener("click", addQuestion);
let container = document.querySelector(".container-fluid");


// GET QUESTION FROM INPUT
let question = document.querySelector("#question");


// GET CHOICES OF ANSWER FROM INPUT
let sect = document.querySelector("section");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let correctAnswer = document.querySelector("#correctAnswer");