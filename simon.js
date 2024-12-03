let gameseq=[];
let userseq=[];

let btns=["one","two","three","four"];


let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelup();
    }
});

function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;


    let idxrandom=Math.floor(Math.random()*3);
    let randcolor=btns[idxrandom];
    let randombtn=document.querySelector(`.${randcolor}`);
    // console.log(idxrandom);
    // console.log(randcolor);
    // console.log(randombtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randombtn);
}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b><u>${level}</u></b><br>Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="#EB466E";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#FFE4EF";
        },150);
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}

function btnpress(){
    let btn=this;
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".button");

for(button  of allbtns){
    button.addEventListener("click",btnpress);
}

let quit=document.querySelector("button");
 quit.addEventListener("click",function(){
    h2.innerHTML=`You<b> Quit</b> the game!
    Press any key to restart the game.`;
    document.addEventListener("keypress",function(){
        if(started==false){
            console.log("Game Started");
            started=true;
            levelup();
        }
    });
 })