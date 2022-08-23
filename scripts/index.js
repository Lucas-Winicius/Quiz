import { questions } from './questions.js';
const questionsOBJ = questions();
console.log(questionsOBJ)

const body = document.querySelector('body')
body.innerHTML = ''
questionsOBJ.forEach((array, index) => {
    body.innerHTML += 
    `<div class="question" id="questionNumber${index}">
        <h2>Pergunta ${index}: ${array.question}<h2/>
    <div/>`

    const questionDiv = document.querySelector(`#questionNumber${index}`)
    
    array.answers.forEach((question, questionIndex) => {
        questionDiv.innerHTML += 
        `<div class="radioButton">
            <input type="radio" name="question${index}" id="${questionIndex}" value="${questionIndex}">
            <label for="${questionIndex}">${question}</label>   
        <div/>`
    })

})
'<div class="radioButton"><div/>'