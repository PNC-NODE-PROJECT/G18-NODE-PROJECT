let url = 'http://localhost:5000'

function displayQuestion(e){
    e.target.parentElement.parentElement.remove();
    startQiuz()
}

function startQiuz(){
    let div = document.createElement('div');
    div.className = 'startApp';

}






let btn_start = document.querySelector("#start");
btn_start.addEventListener("click",displayQuestion);
