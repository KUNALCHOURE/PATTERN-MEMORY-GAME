let body=document.querySelector("body");
let h2=document.querySelector("h2");
let started=false;
let btn=["red","orange","green","blue"];
let gameseq=[];
let userseq=[];
let level=0;
body.addEventListener("keypress", function(){
     console.log("keypresed");
    if(started==false){
        console.log("GAMESTARTED");
        levelup();
        started=true;

     }
})

function levelup(){
 level+=1;
 h2.innerText="LEVEL"+level;

 let randomindx=Math.floor(Math.random()*3);
 let randomcolor=btn[randomindx];
 let randbtn=document.querySelector(`.${randomcolor}`);
 console.log(randbtn);
 gameseq.push(randomcolor);
 console.log(gameseq);
 btnflash(randbtn);

}
function btnflash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash");
    },500 );
    
}

let allbtn=document.querySelectorAll("btn");
for(btn in allbtn){
    btn.addEventListener("click",userclick());
}

function userclick(){
    let btn=this;
    userflash(btn);
   let color=btn.getAttribute("id");
   userseq.push(color);


}

function userflash(btn){
    btn.classList.add("userflash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },1000);

}