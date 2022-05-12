
// FUNCTION GETDATASERVER FROM SERVER
let dataServer = "";
function getdataServer() {
    axios.get("/api/items/").then((result) => {
        dataServer = result.data;
        console.log(dataServer);
        refreshDom(dataServer)
    })
}


// FUNCTION REFRESHDOM FROM DATASERVER
function refreshDom(dataServer) {
    let question = 1;
    for (let index = 0; index < dataServer.length; index++) {

        let card = document.createElement("div");
        card.classList = "card mt-3";

        let card_header = document.createElement("div");
        card_header.className = 'card-header';
        let h5 = document.createElement("h5");  
        h5.textContent = dataServer[index].question;
        card_header.appendChild(h5)
        card.appendChild(card_header);
        

        // CREATE ANSWER CHOICE RADIO TYPE
        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let input_1 = document.createElement("div");
        input_1.classList = "form-control mt-1";
        let answer1 = document.createElement("input");
        answer1.setAttribute("type","radio");
        answer1.value = "A";
        answer1.name = "question"+question;
        answer1.id = "answer_1";
        let label_1 = document.createElement("label");
        label_1.textContent = dataServer[index].answers.A;
        input_1.appendChild(answer1);
        input_1.appendChild(label_1);

        let input_2 = document.createElement("div");
        input_2.classList = "form-control mt-1";
        let answer2 = document.createElement("input");
        answer2.setAttribute("type","radio");
        answer2.value = "B";
        answer2.name = "question"+question;
        answer2.id = "answer_2";
        let label_2 = document.createElement("label");
        label_2.textContent = dataServer[index].answers.B;
        input_2.appendChild(answer2);
        input_2.appendChild(label_2);

        let input_3 = document.createElement("div");
        input_3.classList = "form-control mt-1";
        let answer3 = document.createElement("input");
        answer3.setAttribute("type","radio");
        answer3.value = "C";
        answer3.name = "question"+question;
        answer3.id = "answer_3";
        let label_3 = document.createElement("label");
        label_3.textContent = dataServer[index].answers.C;
        input_3.appendChild(answer3);
        input_3.appendChild(label_3);

        let input_4 = document.createElement("div");
        input_4.classList = "form-control mt-1";
        let answer4 = document.createElement("input");
        answer4.setAttribute("type","radio");
        answer4.value = "D";
        answer4.name = "question"+question;
        answer4.id = "answer_4";

        let label_4 = document.createElement("label");
        label_4.textContent = dataServer[index].answers.D;
        input_4.appendChild(answer4);
        input_4.appendChild(label_4);

        card_body.appendChild(input_1);
        card_body.appendChild(input_2);
        card_body.appendChild(input_3);
        card_body.appendChild(input_4);
        card.appendChild(card_body )
        card_question.appendChild(card);
        question ++;
    }
}


//FUNCTION SUBMIT
function submitQuestion() {
    let answers = document.querySelectorAll("input[type=radio]");
    for (let answer of answers) {
        if(answer.checked){
            arrayAnswer.push(answer.value);
        }
    }

    for (let index=0;index<arrayAnswer.length ;index++) {
        let answer =dataServer[index].correct;
        if (answer === arrayAnswer[index]) {
            score += 10;
        }
    }

    if (arrayAnswer.length === dataServer.length) {
        showResult();
    } else{
        arrayAnswer = [];
        alert("Select your answer");
    }
}


// FUNCTION SHOW RESULT
function showResult() {
    document.querySelector(".score").textContent = parseInt((score/dataServer.length)*10) + "%";
    document.querySelector(".result").style.display = "block";
    displayQuestion.style.display = "none";
    let level = document.querySelector(".knowledge-level");
    console.log((score/dataServer.length)*10);
    if ((score/dataServer.length)*10 > 50){
        level.textContent = "Good";
    } else{
        level.textContent = "Not so good";
    }
}


let currentQuiz = 0;
let score = 0;
let arrayAnswer = [];


// MAIN CODE
let back_score = document.querySelector("#btn-score");
let good = document.querySelector(".good");
let bad = document.querySelector(".bad");

let card_question = document.querySelector(".card-question");
let submit = document.querySelector('#btn-submit');
submit.addEventListener('click',submitQuestion);
    
let displayQuestion = document.querySelector('.container-fluid');
let content_question = document.querySelector('.card');
getdataServer ();