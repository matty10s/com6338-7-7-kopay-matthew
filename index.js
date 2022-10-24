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
        question: 'In which Italian City can you find the Colosseum?',
        answer: 'Rome',
        options: [
            'Venice',
            'Rome',
            'Naples',
            'Milan',
        ]
    },
    {
        question: 'In the TV show New Girl, which actress plays Jessica Day?',
        answer: 'Zooey Deschanel',
        options: [
            'Zooey Deschanel',
            'Kaley Cuoco',
            'Jennifer Anniston',
            'Alyson Hannigan',
        ]
    },
    {
        question: 'What is the largest canyon in the world?',
        answer: 'Grand Canyon, USA',
        options: [
            'Verdon Gorge, France',
            "King's Canyon, Australia",
            'Grand Canyon, USA',
            'Fjaorargljufur Canyon, Iceland',
        ]
    },
    {
        question: 'How long is the border between the United States and Canada?',
        answer: '5,525 miles',
        options: [
            '3,525 miles',
            '4,525 miles',
            '5,525 miles',
            '6,525 miles',
        ]
    },
    {
        question: 'What is the largest active volcano in the world?',
        answer: 'Mouna Loa',
        options: [
            'Mount Etna',
            'Mount Vesuvius',
            'Mouna Loa',
            'Mount Batur',
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