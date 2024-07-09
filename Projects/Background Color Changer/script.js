const primaryHeading=document.querySelectorAll('h1');
const body=document.querySelector('body');
const buttons=document.querySelectorAll('.color-button');
const secondaryHeading=document.querySelectorAll('h3');

buttons.forEach(function(button){
    
    button.addEventListener('click',function(e){
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='olive'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
        }
    });
    
});