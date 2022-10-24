// Matthew Kopay
// Quiz Game Assignment 7



//initialize Variables

var quiz = document.getElementById('quiz')
var button = document.createElement('button')
var timer = 30   // set timer to 30
var score = 0    // set score to Zero
var final = 0    // set final to Zero
var prev = document.createElement('p')
var i = 0
var questionText = document.createElement('p')
var ans1 = document.createElement('button')
var ans2 = document.createElement('button')
var ans3 = document.createElement('button')
var ans4 = document.createElement('button')
var timerText = document.createElement('p')
var button1
var button2
var button3
var button4

var ranAlready = false
var playingYet = false

var questionsArr = [
    {
        question: 'In the TV show The Big Bang Theory Who officiates Sheldon and Amy\'s Wedding?',
        answer: 'Mark Hamill',
        options: [
            'Mark Hamill',
            'William Shatner',
            'Wil Wheaton',
            'Chris Pratt',
        ]
    },
    {
        question: 'A la Crecy is a French dish made of what?',
        answer: 'Carrots',
        options: [
            'Apples',
            'Carrots',
            'Potatoes',
            'Green Beans',
        ]
    },
    {
        question: 'Which core ingredient is important to cook a savory dish?',
        answer: 'Salt',
        options: [
            'Salt',
            'Butter',
            'Sugar',
            'Brown Sugar',
        ]
    },
    {
        question: 'What is the currency of India?',
        answer: 'Rupee',
        options: [
            'Pound',
            'Rupee',
            'Riyal',
            'Dollar',
        ]
    },
    {
        question: 'Which popular Disney show was Miley Cyrus part of?',
        answer: 'Hannah Montana',
        options: [
            'Two Broke Girls',
            'Bend It Like Beckham',
            'Hannah Montana',
            'The Big Bang Theory',
        ]
    }
]

final = localStorage.getItem('previous-score')

if (final){
    prev.textContent = 'Previous Score: ' + final + "%"
    quiz.appendChild(prev)
}

quiz.appendChild(button)

ans1.setAttribute('class', 'answer')
ans2.setAttribute('class', 'answer')
ans3.setAttribute('class', 'answer')
ans4.setAttribute('class', 'answer')

button.setAttribute('id', 'start-quiz')
var start = document.getElementById('start-quiz')
button.textContent = 'Start Quiz!'

start.onclick = function(){
    Question()
    this.remove()
}

function Question(){
    clearInterval(query)
    if (!playingYet){
        var query = setInterval(function() {
            timer -= 1
            timerText.remove()
            timerText.textContent = timer;
            quiz.appendChild(timerText)
            if (timerText.textContent == '-1'){
                timer = 30
                i++
                if (i == 5){
                    conclusion()
                }else{
                Question()
                }
            }
        }, 1000);
        playingYet = true
    }
    questionText.remove()
    ans1.remove()
    ans2.remove()
    ans3.remove()
    ans4.remove()
    timerText.remove()
    questionText.textContent = questionsArr[i].question
    ans1.textContent = questionsArr[i].options[0]
    ans2.textContent = questionsArr[i].options[1]
    ans3.textContent = questionsArr[i].options[2]
    ans4.textContent = questionsArr[i].options[3]
    timerText.textContent = timer;
    if (!ranAlready){
    ans1.addEventListener('click', function submitResponse() {
        if (this.textContent == questionsArr[i].answer){
            score += 1
        }
        timer=30
        i++
        if (i == 5){
            clearInterval(query)
            conclusion()
        }else{
        Question()
        }
    })
    ans2.addEventListener('click', function submitResponse() {
        if (this.textContent == questionsArr[i].answer){
            score += 1
        }
        timer=30
        i++
        if (i == 5){
            clearInterval(query)
            conclusion()
        }else{
        Question()
        }
    })
    ans3.addEventListener('click', function submitResponse() {
        if (this.textContent == questionsArr[i].answer){
            score += 1
        }
        timer=30
        i++
        if (i == 5){
            clearInterval(query)
            conclusion()
        }else{
        Question()
        }
    })
    ans4.addEventListener('click', function submitResponse() {
        if (this.textContent == questionsArr[i].answer){
            score += 1
        }
        timer=30
        i++
        if (i == 5){
            clearInterval(query)
            conclusion()
        }else{
        Question()
        }
    })
    ranAlready = true
}
    quiz.appendChild(questionText)
    quiz.appendChild(ans1)
    quiz.appendChild(ans2)
    quiz.appendChild(ans3)
    quiz.appendChild(ans4)
    quiz.appendChild(timerText)
}

function conclusion(){
    playingYet = false
    final = (score/5)*100
    questionText.remove()
    ans1.remove()
    ans2.remove()
    ans3.remove()
    ans4.remove()
    timerText.remove()
    prev.textContent = 'Previous Score: ' + final + "%"
    quiz.appendChild(prev)
    quiz.appendChild(button)
    button.setAttribute('id', 'start-quiz')
    start = document.getElementById('start-quiz')
    button.textContent = 'Start Quiz!'
    i = 0
    localStorage.setItem('previous-score', final)
}