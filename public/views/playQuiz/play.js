function dataServer() {
    axios.get("http://localhost/api/items/").then((result) => {
        let dataServer = result.data;
        refreshDom(dataServer)
    })
}


function refreshDom(dataServer) {
    // console.log(dataServer);
    let question = 1;
    for (let index = 0; index < dataServer.length; index++) {

        let card = document.createElement('div');
        card.classList = 'card mt-3';

        let card_header = document.createElement('div');
        card_header.className = 'card-header';
        let h5 = document.createElement('h5');  
        h5.textContent = dataServer[index].question;
        card_header.appendChild(h5)
        card.appendChild(card_header);
        
        // CREATE ANSWER CHOICE RADIO TYPE
        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let input_1 = document.createElement('div');
        input_1.classList = 'form-control mt-1';
        let answer1 = document.createElement("input");
        answer1.setAttribute("type","radio");
        answer1.value = dataServer[index].answers.A;
        answer1.name = "question"+question;
        answer1.id = "answer_1";
        let label_1 = document.createElement("label");
        label_1.textContent = dataServer[index].answers.A;
        input_1.appendChild(answer1);
        input_1.appendChild(label_1);

        let input_2 = document.createElement('div');
        input_2.classList = 'form-control mt-1';
        let answer2 = document.createElement("input");
        answer2.setAttribute("type","radio");
        answer2.value = dataServer[index].answers.A;
        answer2.name = "question"+question;
        answer2.id = "answer_2";
        let label_2 = document.createElement("label");
        label_2.textContent = dataServer[index].answers.B;
        input_2.appendChild(answer2);
        input_2.appendChild(label_2);

        let input_3 = document.createElement('div');
        input_3.classList = 'form-control mt-1';
        let answer3 = document.createElement("input");
        answer3.setAttribute("type","radio");
        answer3.value = dataServer[index].answers.A;
        answer3.name = "question"+question;
        answer3.id = "answer_3";
        let label_3 = document.createElement("label");
        label_3.textContent = dataServer[index].answers.C;
        input_3.appendChild(answer3);
        input_3.appendChild(label_3);

        let input_4 = document.createElement('div');
        input_4.classList = 'form-control mt-1';
        let answer4 = document.createElement("input");
        answer4.setAttribute("type","radio");
        answer4.value = dataServer[index].answers.A;
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
        // document.body.appendChild(container);
        question ++;
    }
}
//function submit----------------------------------------------------
function submitQuestion(){
    let answer = document.querySelectorAll('.')
}
//function check score-------------------------------------------------
function checkAnswer(){
    // let countScore = 0;
    let radios = document.querySelectorAll('input[type=radio]');
        console.log(radios);
        radios.forEach(radio=>{
                if(radio.checked){
                    radio.nextElementSibling.textContent; 
                    let answersRetrun = false;
                    if(radio.nextElementSibling.textContent === correct){
                        answersRetrun = true;
                        console.log(answersRetrun);
                    }

                }
        
        })
}
let card_question = document.querySelector(".card-question");
let submit = document.querySelector('#btn-submit');
submit.addEventListener('click',checkAnswer);
let displayQuestion = document.querySelector('.container-fluid');
let content_question = document.querySelector('.card');
dataServer();