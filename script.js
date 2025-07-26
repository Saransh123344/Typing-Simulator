const paragraphs=["The sun rises in the east and sets in the west. Birds chirp in the morning, welcoming a new day. The air is fresh, and everything feels calm and peaceful.",
    "Typing is an essential skill in the digital world. Practicing every day can improve your speed and accuracy. The more you type, the better you become.",
    "A cat sat on the windowsill, watching the rain. Drops of water rolled down the glass, making tiny rivers. The world outside looked gray and quiet.",
    "Learning to type can be fun and challenging. It requires practice and patience. The more you practice, the better you become. Keep going!",
    "The sky was clear, and the stars shone brightly. The moon was full, casting a soft light on the ground. The night was calm and peaceful, and everything felt still.",
    "Typing is a skill that can be learned by anyone. It takes time and practice to improve your speed and accuracy. Keep practicing, and you will get better!",
    "The wind blew through the trees, rustling the leaves. The sound was soothing, like a lullaby. The world felt alive, and everything seemed to be in harmony.",
    "Practice makes perfect. The more you practice typing, the better you become. Keep going, and you will see improvement. Don't give up!",
    "The sun was setting, casting a warm glow on the horizon. The sky was painted in shades of orange and pink. The world was bathed in a soft light, and everything felt peaceful.",
    "Typing is a valuable skill in today's digital world. It can help you communicate more effectively and efficiently. Keep practicing, and you will see improvement.",
    "The rain fell softly, tapping on the roof. The sound was soothing, like a melody. The world outside was gray and wet, but everything felt calm and peaceful.",

];
    

let paragraphText="";
let timeLeft=60;
let timerStarted=false;
let error=0;
let total=0;
let timer;
let wordsCount=1;


function loadParagraph(){
    paragraphText= paragraphs[Math.floor(Math.random()*paragraphs.length)];
    document.getElementById("paragraph").textContent=paragraphText;
}

function startTyping(){
    if(!timerStarted){
        timerStarted=true;
        timer=setInterval(updateTimer, 1000);
    }

    let inputText=document.getElementById("input-box").value.trim();
    let originalWords= paragraphText.split(/\s+/);
    let inputWords= inputText.split(/\s+/);
    let correctWords=0;
    let total=originalWords.length;
    let error=0;

    for(let i=0; i<inputWords.length; i++){
        if(i<total){
            if(originalWords[i]===inputWords[i]){
                correctWords++;
            }
            else{
                error++;
            }
        }
        else{
            error++;
        }
    }


    let accuracy = total > 0 ? (correctWords / inputWords.length) * 100 : 100;
    let elapsedTime = 60 - timeLeft || 1;
    let wpm = (correctWords / elapsedTime) * 60 || 0;


    document.getElementById("wpm").textContent=`WPM: ${wpm.toFixed(1)}`;
    document.getElementById("accuracy").textContent=`Accuracy: ${accuracy.toFixed(1)}%`;
    
}

function updateTimer(){
    if(timeLeft>0){
        timeLeft--;
        document.getElementById("timer").textContent=`Time :${timeLeft}s`;
    }
    else{
        clearInterval(timer);
        document.getElementById("input-box").disabled=true;
    }
}

function resetTest(){
    clearInterval(timer);
    document.getElementById("input-box").value="";
    document.getElementById("input-box").disabled=false;
    document.getElementById("timer").textContent="Time: 60s";
    document.getElementById("wpm").textContent="WPM: 0";
    document.getElementById("accuracy").textContent="Accuracy: 0%";
    timeLeft=60;
    timerStarted=false;
    correctWprds=0;
    total=0;
    
    loadParagraph();

}

window.onload=loadParagraph();
