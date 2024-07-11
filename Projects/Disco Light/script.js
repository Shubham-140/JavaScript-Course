let randomColor=function(){
    let hex='0123456789ABCDEF';
    let color='#';

    for(let i=0;i<6;i++){
        color=color+hex[Math.floor(Math.random()*16)];
    }

    return color;
}

let startChangingColor;

const start=()=>{
    if(!startChangingColor){
        document.getElementById('head').innerHTML='Click STOP to stop disco light';
        startChangingColor=setInterval(() => {
            document.body.style.backgroundColor=randomColor();
        }, 50);
    }
}

const stop=()=>{
    document.getElementById('head').innerHTML='Click START to start disco light';
    clearInterval(startChangingColor);
    document.body.style.backgroundColor='white';
    startChangingColor=null;
}

document.querySelector('#btn1').addEventListener('click',start);

document.querySelector('#btn2').addEventListener('click',stop);

