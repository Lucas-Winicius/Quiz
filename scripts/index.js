const body = document.querySelector('#questionsSpace')
import { questions } from '../sources/questions.js';
const questionsList = questions(9);

questionsList.forEach((array, index) => {
    
    body.innerHTML += 
    `<div class="question" id="questionNumber${index}">
    <h2><strong>Pergunta ${index + 1}:</strong> ${array.question}</h2>
    </div>`
    
    const questionDiv = document.querySelector(`#questionNumber${index}`)
    array.answers.forEach((question, questionIndex) => {
        questionDiv.innerHTML += 
        `<div class="radioButton">
            <input type="radio" name="question${index}" value="${questionIndex}">
            <label for="${questionIndex}">${question}</label>   
        </div>`
    })

})

const checkAnswers = (a) => {
    if(a.path[0].id !== "button") return null
    const answersList = new Array()

    for(let c = 0; c < questionsList.length; c++) {
        const answer = document.querySelector(`input[name="question${c}"]:checked`)
        if(answer) answersList.push(answer)
    }

    if(questionsList.length != answersList.length) {
        const emptyQuestions = questionsList.length - answersList.length
        if(emptyQuestions == 1) return alert(`Você esqueceu de responder 1 pergunta`)
        else return alert(`Você deixou ${emptyQuestions} questões em branco`)
    }

    const punctuation = { maxScore: questionsList.length, score: 0 }
    answersList.forEach((value, index) => {
        console.log(value)
        if(value.value == questionsList[index].correctAnswer) {
            punctuation.score += 1
            document.querySelector(`#questionNumber${index}`).style.backgroundColor = "#00a000cf"
        }
        else document.querySelector(`#questionNumber${index}`).style.backgroundColor = "#ff0000af"
    })

    document.querySelector('#button').style.display = 'none'
    document.querySelector('div[pontuacao]').style.display = 'block'
    document.querySelector('div[pontuacao]').innerHTML = `Acertos: ${punctuation.score}/${punctuation.maxScore}`

}
addEventListener('click', (a) => checkAnswers(a))