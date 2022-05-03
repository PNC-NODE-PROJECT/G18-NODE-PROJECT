const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


let readFile = (filename) => JSON.parse(fs.readFileSync(filename));
let writeFile = (filename, data) => fs.writeFileSync(filename, JSON.stringify(data));


// GET ALL ITEMS 
router.get("/", (req, res) => {
    let quizes_app = readFile("app_quiz.json");
    res.send(quizes_app);
})


// CREATE QUESTION
router.post("/add-question", (req, res) => {
    let quizes_app = readFile("app_quiz.json");
    let questions = req.body.question;
    let answers = req.body.answers;
    let correct = req.body.correct;
    if (req.body.questions !== questions && req.body.answers !== undefined) {
        let quiz = {
            'id': uuidv4(),
            "question": questions,
            "answers": answers,
            "correct": correct
        }
        quizes_app.push(quiz);
        writeFile("app_quiz.json", quizes_app);
        res.status(200).send({ "message": "Add question is successfully." })
    } else {
        res.status(404).send({ "message": "Not found the question." });
    }
})


// DELETE QUESTION
router.delete("/:id", (req, res) => {
    let quizes_app = readFile("app_quiz.json");
    let id = req.params.id
    let index = quizes_app.findIndex(quiz => quiz.id === id);
    console.log(index);
    if (index !== -1) {
        quizes_app.splice(index, 1);
        res.status(200).send({ "message": "Delete item is successfully." });
    } else {
        res.status(404).send({ "message": "Not found of item." });
    }
    writeFile("app_quiz.json", quizes_app);
})


// GET ITEM TO UPDATE
router.put("/:id", (req, res) => {
    let quizes_app = readFile("app_quiz.json");
    console.log(req.body);

    let id = req.params.id;
    let index = quizes_app.findIndex(quiz => quiz.id === id);
    console.log(index);
    if (index !== -1) {
        let quiz = quizes_app[index];
        if (req.body.question !== undefined) {
            quiz.question = req.body.question;
        }
        if (req.body.answers !== undefined) {
            quiz.answers = req.body.answers;
        }
        res.status(200).send({ "message": "Updated of item is successfully." });
    } else {
        res.status(404).send({ "message": "Not found of item." });
    }
    writeFile("app_quiz.json", quizes_app);
})

module.exports = router;