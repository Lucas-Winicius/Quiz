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
            question: 'Quando aconteceu as mudanças das regras que deram inicio ao futebol americano?',
            answers: ['1888', '1877', '1781', '1867'],
            correctAnswer: 3
        },
        {
            question: 'Como e chamado o  chute inicial?',
            answers: ['Punt', 'Kickoff', 'Play Action', 'Endzone'],
            correctAnswer: 1
        },
        {
            question: 'Qual a principal pontuação do futebol americano?',
            answers: ['Gol', 'Touchdown', 'Endzone', 'Field Goal'],
            correctAnswer: 1
        },
        {
            question: 'Quantos equipamentos existem no futebol americano?',
            answers: ['15', '8', '6', '9'],
            correctAnswer: 3
        },
        {
            question: 'Qual a duração minima de uma partida completa de futebol americano?',
            answers: ['1 Hora', '12 Minutos', '15 Minutos', '1 Hora e 20 Minutos'],
            correctAnswer: 0
        },
        {
            question: 'Que posição e dada o nome de recebedores',
            answers: ['Tight End', 'Middle/Inside Linebackers', 'Receiver', 'Cornerbacks'],
            correctAnswer: 2
        },
        {
            question: 'Complete o texto: __________ é a jogada do time ofensivo em que o protagonista é o quarterback.',
            answers: ['Play action', 'Punt', 'Receiver', 'Touchdown'],
            correctAnswer: 0
        },
        {
            question: 'O futebol americano e resultado de sucessivas mudanças do:',
            answers: ['Volei', 'Basquete', 'Rugby', 'Futebol Europeu'],
            correctAnswer: 2
        },
        {
            question: 'Como e dado o nome do defensor maior?',
            answers: ['Defensive End', 'Defensive Tackle', 'Tackle, Left/Right', 'Safeties'],
            correctAnswer: 1
        },
        {
            question: 'Quantos jogadores entram em campo?',
            answers: ['16', '18', '7', '11'],
            correctAnswer: 3
        },
        {
            question: 'Quantas subistituições podem ser feitas durante uma partida de futebol americano?',
            answers: ['53', '11', 'Ilimitadas', '16'],
            correctAnswer: 2
        },
        {
            question: 'Quais são as posições de habilidade?',
            answers: [
                'Center, Tackle, Cornerbacks, Punt',
                'Quarterback, Running Back, Receiver, Tight End',
                'Running Back, Tackle, Quarterback, Receiver',
                'Nenhum'
            ],
            correctAnswer: 1
        }
    ]


    do {
        const index = randint(0, questions.length - 1)
        if (!randomQuestions.includes(questions[index])) randomQuestions.push(questions[index])
    } while (randomQuestions.length <= numberOfQuestions)

    return randomQuestions
}