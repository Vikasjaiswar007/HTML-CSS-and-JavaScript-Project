const questions = [
    {
        'que' : 'Which is the following is markup language ?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a',
    },
    {
        'que' : 'What year was JavaScript launched ?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b',
    },
    {
        'que' : 'What does for css stand for ?',
        'a':'HyperText Markup Language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notations',
        'd':'Helicopters Terminals Motorboats  Lamebrains',
        'correct':"b",

    }
]
let index = 0;
let total=questions.length;
let right=0,wrong=0;
const quesBox= document.getElementById("quesBox");
const optionsInput= document.querySelectorAll(".options");
const loadQuestions = ()  => {
    if(index===total){
        return endQuiz()
    }
    reset();
    const data =questions[index]
    // console.log(data);
    quesBox.innerText =`${index+1}) ${data.que}`;

    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
}

const quizSubmit = () =>{
    const data =questions[index];
    const ans=getAnswer();
    if (ans ===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = ()=>{
    let answer;
    optionsInput.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
    
}

const reset = () =>{
    optionsInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz =()=>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> thank you for playing the quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>
    `  
}

// initial call
loadQuestions();