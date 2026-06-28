const quizData = [
{
question:"What does HTML stand for?",
a:"Hyper Text Markup Language",
b:"High Text Machine Language",
c:"Hyper Tool Markup Language",
d:"Home Text Markup Language",
correct:"a"
},
{
question:"Which language is used for styling web pages?",
a:"HTML",
b:"Python",
c:"CSS",
d:"Java",
correct:"c"
},
{
question:"Which language is used for web interactivity?",
a:"JavaScript",
b:"C",
c:"C++",
d:"SQL",
correct:"a"
}
];

const question=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const answers=document.querySelectorAll("input");
const submit=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
deselect();

const current=quizData[currentQuiz];

question.innerText=current.question;
a_text.innerText=current.a;
b_text.innerText=current.b;
c_text.innerText=current.c;
d_text.innerText=current.d;
}

function deselect(){
answers.forEach(answer=>answer.checked=false);
}

function getSelected(){
let answer;
answers.forEach(ans=>{
if(ans.checked){
answer=ans.id;
}
});
return answer;
}

submit.addEventListener("click",()=>{
const answer=getSelected();

if(answer){
if(answer===quizData[currentQuiz].correct){
score++;
}

currentQuiz++;

if(currentQuiz<quizData.length){
loadQuiz();
}
else{
document.getElementById("quiz").innerHTML=
"<h2>Your Score: "+score+"/"+quizData.length+"</h2><button onclick='location.reload()'>Restart</button>";
}
}
});
