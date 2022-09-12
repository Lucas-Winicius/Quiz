export function questions(numberOfQuestions) {
    const randint = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const randomQuestions = new Array()
    const questions = [
        {
            question: 'Quantas posições possui o futebol americano?',
            answers: ['16', '11', '15', '18'],
            correctAnswer: 0
        },
        {
            question: 'Quantas jardas de comprimento possui um campo de futebol americano?',
            answers: ['53.5 Jardas', '120 Jardas', '112 Jardas', '125 Jardas'],
            correctAnswer: 1
        },
        {
            question: 'Quando aconteceu as mudanças das regras que deram inicio ao futebol americano',
            answers: ['1888', '1877', '1781', '1867'],
            correctAnswer: 3
        },
        {
            question: 'Como e chamado o  chute inicial',
            answers: ['Punt', 'Kickoff', 'Play Action', 'Endzone'],
            correctAnswer: 1
        },
        {
            question: 'Qual a principal pontuação do futebol americano',
            answers: ['Gol', 'Touchdown', 'Endzone', 'Field Goal'],
            correctAnswer: 1
        },
        {
            question: '',
            answers: ['', '', '', ''],
            correctAnswer: -1
        },
        {
            question: '',
            answers: ['', '', '', ''],
            correctAnswer: -1
        },
    ]


    while (randomQuestions.length <= numberOfQuestions) {
        const index = randint(0, questions.length - 1)
        if(!randomQuestions.includes(questions[index])) randomQuestions.push(questions[index])
    }

    return randomQuestions
}