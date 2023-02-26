const quizData = [{
    question: "What is the largest State in india?",
    a: "Delhi",
    b: "Mumbai",
    c: "Uttar Pradesh",
    d: "Rajasthan",
    correct: "d",
},
{
    question: "What is the smallest State in india?",
    a: "Goa",
    b: "Delhi",
    c: "Uttar Pradesh",
    d: "Mumbai",
    correct: "a",
},
{
    question: "what is the closset planet to earth?",
    a: "sun",
    b: "Venus",
    c: "Jupiter",
    d: "pluto",
    correct: "b",
},
{
    question: "Capital of india before Delhi",
    a: "Goa",
    b: "kolkata",
    c: "Uttar Pradesh",
    d: "Assam",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Great!, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);