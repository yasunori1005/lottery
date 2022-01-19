const btn = document.getElementById("btn");
let array = [];

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const human = document.getElementById("human");

const formFirst = document.getElementById("formFirst");
const formSecond = document.getElementById("formSecond");
const formThird = document.getElementById("formThird");
const formHuman = document.getElementById("formHuman");

const inputFirst = document.getElementById("inputFirst");
const inputSecond = document.getElementById("inputSecond");
const inputThird = document.getElementById("inputThird");
const inputHuman = document.getElementById("inputHuman");

const btnFirst = document.getElementById("btnFirst");
const btnSecond = document.getElementById("btnSecond");
const btnThird = document.getElementById("btnThird");
const btnHuman = document.getElementById("btnHuman");

const removeFirst = document.getElementById("removeFirst");
const removeSecond = document.getElementById("removeSecond");
const removeThird = document.getElementById("removeThird");
const removeHuman = document.getElementById("removeHuman");

let countFirst = 0;
let countSecond = 0;
let countThird = 0;
let countHuman = 0;

/*enterInput
inputFirst.addEventListener('keypress',function(event){
    const h3 = document.createElement("h3");
    if(countFirst===0){
        h3.innerText = inputFirst.value;
        first.appendChild(h3);
        countFirst += 1 ;
        inputFirst.value='';
    }
    event.preventDefault();
})

inputSecond.addEventListener('keypress',function(event){
    const h3 = document.createElement("h3");
    if(countSecond===0){
        h3.innerText = inputFirst.value;
        second.appendChild(h3);
        countSecond += 1 ;
        inputSecond.value='';
    }
    event.preventDefault();
})

inputThird.addEventListener('keypress',function(event){
    const h3 = document.createElement("h3");
    if(countThird===0){
        h3.innerText = inputFirst.value;
        third.appendChild(h3);
        countThird += 1 ;
        inputThird.value='';
    }
    event.preventDefault();
})

inputHuman.addEventListener('keypress',function(event){
    const h3 = document.createElement("h3");
        h3.innerText = inputFirst.value;
        human.appendChild(h3);
        countHuman += 1 ;
        inputHuman.value='';
    event.preventDefault();
})

 */



//inputButton
btnFirst.addEventListener('click' , function(){
    const h3 = document.createElement("h3");
    if(countFirst===0){
        h3.innerText = inputFirst.value;
        first.appendChild(h3);
        countFirst += 1 ;
        inputFirst.value='';
    }
})

btnSecond.addEventListener('click' , function(){
    const h3 = document.createElement("h3");
    if(countSecond===0){
        h3.innerText = inputSecond.value;
        second.appendChild(h3);
        countSecond += 1 ;
        inputSecond.value='';
    }
})

btnThird.addEventListener('click' , function(){
    const h3 = document.createElement("h3");
    if(countThird===0){
        h3.innerText = inputThird.value;
        third.appendChild(h3);
        countThird += 1 ;
        inputThird.value='';
    }
})

btnHuman.addEventListener('click', function(){
    array.push(inputHuman.value);
    const a = document.createElement("p");
    a.innerHTML = inputHuman.value;
    human.appendChild(a);
    inputHuman.value='';
})


//removeButton
removeFirst.addEventListener('click' , function(){
    countFirst = 0;
    first.removeChild(first.firstElementChild);
})

removeSecond.addEventListener('click' , function(){
    countSecond = 0;
    second.removeChild(second.firstElementChild);
})

removeThird.addEventListener('click' , function(){
    countThird = 0;
    third.removeChild(third.firstElementChild);
})

removeHuman.addEventListener('click' , function(){
    human.removeChild(human.firstElementChild);
})


//StartButton
btn.addEventListener('click' , function(){
    lottery();
})

function lottery(){
    const len = array.length;
        for(i=0;i<len;i++){
            const r= Math.floor(Math.random()*array.length);
            const v = array.splice(r,1);
            if(i<2){
                const p = document.createElement('p');
                p.innerText = v ;
                first.appendChild(p);
            }else if(i<4){
                const p = document.createElement('p');
                p.innerText = v ;
                second.appendChild(p);
            }else{
                const p = document.createElement('p');
                p.innerText = v ;
                third.appendChild(p);
            }
        }
}

function one(){
    const p = document.createElement('p');
    p.innerText = "Good Morning" ;
    first.appendChild(p);
}

function two(){
    const p = document.createElement('p');
    p.innerText = "Hello" ;
    second.appendChild(p);
}

function three(){
    const p = document.createElement('p');
    p.innerText = "Good Evening" ;
    third.appendChild(p);
}


