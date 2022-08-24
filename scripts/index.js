import { questions } from '../sources/questions.js';
const questionsOBJ = questions();
console.log(questionsOBJ)

const body = document.querySelector('#questionsSpace')
questionsOBJ.forEach((array, index) => {

    body.innerHTML += 
    `<div class="question" id="questionNumber${index}">
        <h2><strong>Pergunta ${index + 1}:</strong> ${array.question}<h2/>
    <div/>`

    const questionDiv = document.querySelector(`#questionNumber${index}`)    
    array.answers.forEach((question, questionIndex) => {
        questionDiv.innerHTML += 
        `<div class="radioButton">
            <input type="radio" name="question${index}" value="${questionIndex}">
            <label for="${questionIndex}">${question}</label>   
        <div/>`
    })

})

const checkAnswers = (a) => {
    if(a.path[0].id !== "button") return null

    for(let c = 0; c < questionsOBJ.length; c++) {
        console.log(document.querySelector(`input[name="question${c}"]:checked`))
    }

}
addEventListener('click', (a) => checkAnswers(a))