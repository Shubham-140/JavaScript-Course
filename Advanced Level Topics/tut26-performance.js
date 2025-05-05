// In order to check the performace of a function or a command, we use Performace.now() before and after the function which gives the timestamp before and after the occurence of function and thus, we calculate how much time it took for execution.

let t1=performance.now();

for(let i=0;i<100;i++){
    console.log(i);
}

let t2=performance.now();

console.log("The time of execution for above function is "+ (t2-t1) + '\n\n\n\n\n');

let t3=performance.now();
let k=0;

for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log(k++);
    }
}

let t4=performance.now();

console.log("The time of execution for above function is "+ (t4-t3) + '\n\n\n\n\n');










// Reflow is the process where the browser calculates the positions and sizes of elements after changes to the DOM.
// It is a high computational task, thus, it reuqires more resources.




// Repaint is the process of displaying content/element pixel by pixel such as displaying a shape on UI.
// It is less cost intensive as compare to reflow.



// Thus, adding 100 elements independently results in 100 reflows and 100 repaints whereas adding 100 elements in a single div causes only 1 reflow and 1 repaint, thus, the performance in second case becomes much faster as both the reflow and repaint processes are lesser.






// Document fragment is a light weight document object which has very less computation cost.
// Thus, it doesnot perform any reflow and repaint.
// It will only take 1 reflow and 1 repaint while adding document fragment content to the document.