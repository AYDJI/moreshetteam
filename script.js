// Quiz Data
const quizData = [
    {
        question: "מתי פרצה מלחמת יום הכיפורים?",
        options: ["1973", "1967", "1982"],
        answer: "1973",
    },
    {
        question: "איזה מדינות תקפו את ישראל במלחמה?",
        options: ["מצרים וסוריה", "ירדן ולבנון", "עיראק ואיראן"],
        answer: "מצרים וסוריה",
    },
    {
        question: "מהו אזור הקרב המרכזי בצפון?",
        options: ["רמת הגולן", "תעלת סואץ", "ים המלח"],
        answer: "רמת הגולן",
    },
    {
        question: "מי היה ראש ממשלת ישראל במהלך המלחמה?",
        options: ["גולדה מאיר", "דוד בן-גוריון", "יצחק רבין"],
        answer: "גולדה מאיר",
    },
    {
        question: "מהו יום סיום המלחמה?",
        options: ["22 באוקטובר", "25 באוקטובר", "30 באוקטובר"],
        answer: "25 באוקטובר",
    },
];

// Quiz Variables
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const nextBtn = document.getElementById("next-question");
const resultEl = document.getElementById("quiz-result");

// Display Question
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

// Check Answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextBtn.style.display = "inline-block";
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
}

// Show Quiz Result
function showResult() {
    questionEl.textContent = "סיימת את החידון!";
    optionsEl.innerHTML = "";
    resultEl.textContent = `ענית נכון על ${score} מתוך ${quizData.length} שאלות.`;
    nextBtn.style.display = "none";
}

// Initialize Quiz
displayQuestion();
