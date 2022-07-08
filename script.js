const quizDB=[
    {
        question:"1. Feeling nervous, anxious, or on edge?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans3"
    },
    {
        question:"2. Worrying too much about different things?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans3"
    },
    {
        question:"3. Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans3"
    },
    {
        question:"4. Trouble concentrating on things, such as reading the newspaper or watching television?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans3"
    },
    {
        question:"5. Thoughts that you would be better off dead, or of hurting yourself?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans3"
    },
    {
        question:"6. Trouble falling or staying asleep, or sleeping too much?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans3"
    },
    {
        question:"7. Feeling lonely or isolated?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans3"
    },
    {
        question:"8. Felling hopeless?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans3"
    },
    {
        question:"9. Worried so much about your future?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"10. Don't find interest in your hobbies that you loved to do before?",
        a:"EVERY DAY",
        b:"SEVERAL DAYS",
        c:"NOT AT ALL",
        ans:"ans1"
    },
]

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');

const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion = () => {
    const questionList=quizDB[questionCount]
    question.innerText= questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
   
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click', () => {
    const checkedanswer=getCheckAnswer();
    console.log(checkedanswer);

    if(checkedanswer== quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3>YOUR SCORE IS ${score}/${quizDB.length} <br>If your score is less than 5 then you need to see a doctor</h3>
        
        <button class="btn" onclick="location.reload()"> Start again</button>
        `;
        showScore.classList.remove('scoreArea');
    };
});
