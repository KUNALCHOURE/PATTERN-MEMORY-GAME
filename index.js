let body=document.querySelector("body");
let h2=document.querySelector("h2");
let highscore = localStorage.getItem('simonHighScore') || 0;
let h22 = document.getElementById("hs");
h22.innerText = `HIGH SCORE: ${highscore}`;
let started=false;
let btns=["red","orange","green","blue"];
let gameseq=[];
let userseq=[];
let level=0;
body.addEventListener("keypress", function(){
    
    if(started==false){
          
        started=true;
        levelup();

     }
})

function levelup(){
    body.style.backgroundColor="#1e3850";
    userseq=[];
    level+=1;
 h2.innerText="LEVEL"+level;
 let randomindx=Math.floor(Math.random()*4);
 let randomcolor=btns[randomindx];
 let randbtn=document.querySelector(`.${randomcolor}`);
 gameseq.push(randomcolor);
 btnflash(randbtn);

}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500)

}

let allbtn=document.querySelectorAll(".btn");
for(let btn of allbtn){
    btn.addEventListener("click",userclick);
}

function userclick(){
    let btn=this;
    userflash(btn);
   let color=btn.getAttribute("id");
   userseq.push(color);

checkans(userseq.length-1);
}

function userflash(btn){
    btn.classList.add("userflash");
 setTimeout(function(){
    btn.classList.remove("userflash");
 },500);

}

function checkans(indx){ 
    if(userseq[indx]==gameseq[indx]){

        if(userseq.length==gameseq.length){           
            setTimeout(levelup,1000);
        }
    }

    else{
        if (level > highscore){
        highscore = level; 
        localStorage.setItem('simonHighScore', highscore); 
        h22.innerText = `HIGH SCORE: ${highscore}`;
        }
        h2.innerHTML=`GAME OVER YOUR SCORE IS:<b> ${level} </b><br>
         PRESS ANY KEY TO RESTART`;
         body.style.backgroundColor="red";
         
        setTimeout(function(){
            restart();
          
        },500);


    }

}

function restart(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
   
}
