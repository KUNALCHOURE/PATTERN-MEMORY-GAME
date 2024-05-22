let body=document.querySelector("body");
let h2=document.querySelector("h2");
let started=false;
let btns=["red","orange","green","blue"];
let gameseq=[];
let userseq=[];
let level=0;
body.addEventListener("keypress", function(){
     console.log("keypresed");
    if(started==false){
        console.log("GAMESTARTED");   
        started=true;
        levelup();

     }
})

function levelup(){
    body.style.backgroundColor="black";
    userseq=[];
 level+=1;
 h2.innerText="LEVEL"+level;

 let randomindx=Math.floor(Math.random()*3);
 let randomcolor=btns[randomindx];
 let randbtn=document.querySelector(`.${randomcolor}`);
 /*console.log(randbtn);*/
 gameseq.push(randomcolor);
 console.log(gameseq);
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
    console.log("clicked");
    let btn=this;
   
    userflash(btn);
   let color=btn.getAttribute("id");
   userseq.push(color);
 console.log(userseq);

checkans(userseq.length-1);
}

function userflash(btn){
   /* console.log(btn);*/
    btn.classList.add("userflash");
 setTimeout(function(){
    btn.classList.remove("userflash");
 },500);

}

function checkans(indx){
    console.log("LEVEL"+level);
 
    if(userseq[indx]==gameseq[indx]){


        if(userseq.length==gameseq.length){
           
            setTimeout(levelup,1000);
        }
    }

    else{
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
