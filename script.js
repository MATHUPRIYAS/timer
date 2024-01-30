const button= document.getElementById('butt');
const task= document.getElementById('task');
const desc= document.getElementById('des');
const table=document.getElementById('table');
let timer;
let run=false;

const start=document.getElementById('start');
start.addEventListener("click",toggleTimer);
function addTask()
{

    table.innerHTML +=(`
    <tr>
           <td>${task.value}</td>
        <td>${desc.value}</td>
    <td>
       ${hour}:${min}:${sec}
    </td> </tr>
    `)
    task.value="";
      desc.value="";
      hour=0;
      min=0;
      sec=0;
      run=true;
      toggleTimer()
}

function toggleTimer() {
    if (run) {
      stopTimer();
      document.getElementById('start').innerText = 'Start ';
      start.style.setProperty('background-color','green');
      start.style.setProperty('color','white')
    } else {
      startTimer();
      document.getElementById('start').innerText = 'Stop ';
      start.style.setProperty('background-color','red');
      start.style.setProperty('color','white')

    }
    run = !run;
  }
let sec=0;
let min=0;
let hour=0;
let i;

function counter(){
    sec=sec+1;
    
    if(sec>=60)
    {
        min=min+1;
        sec=0;
    }
    if(min>=60)
    {
        hour=hour+1;
        min=0;
    }
    // document.getElementById("count").innerHTML=`${hour}hr:${min}min:${sec}sec`
}
function startTimer()
{
   i=setInterval(counter,500);
    
}
function stopTimer()
{
    clearInterval(i);
    button.addEventListener('click',addTask);
     
 }
const dom=document.querySelector('.square');
dom.addEventListener("click",()=>{
  dom.classList.add("circle");
  dom.innerHTML="circle";0})

