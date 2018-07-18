// adds a flex child to Column with two child elements that also flex;
function addDay() {
    var evalcol = document.createElement("div"); //big div
    evalcol.className = "evalcol";
    evalcol.setAttribute("style", "display: flex;width:70px; height:100%; text-align:center;");
      //h3 with date
    var evalcolh3 = document.createElement("h3");
    evalcolh3.className = "evalcolh3";
    evalcolh3.className +=" "+"datescol";
    evalcol.appendChild(evalcolh3);

      //looping as many times as how many students are given;
    var studentCount = document.getElementById("names").childElementCount;
    document.getElementById("numberOfStudents").innerHTML = studentCount-1;

    for (var i = 1; i < studentCount; i++) {
    var gradecol = document.createElement("div");
    gradecol.className = "gradecol-" +i +" empty";
    gradecol.className +=" " + "grade2nd";
    gradecol.setAttribute("style", "display:flex;border:1px solid black;")
    evalcol.appendChild(gradecol);
    }
  document.getElementsByClassName("column")[0].appendChild(evalcol);

//prompt window
var numbers = document.getElementsByClassName("grade2nd");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick =function enterGrades() {
    // enteredNumber.setAttribute('style',"text-aign:center;")
      var enteredNumber = prompt("Enter the grade", 0);
      if (enteredNumber!=null && enteredNumber<=100) {
        
        if(parseInt(enteredNumber)>5){
          enteredNumber = 5;
        }
        else if(parseInt(enteredNumber) <= 0){
          enteredNumber = 0;
        }
      
        this.innerHTML= enteredNumber;
      
      }

      if(this.innerHTML!=""){
      this.classList.remove("empty");
      this.classList.add("notempty");
   
     }

    }
}




//date inside h3 element
var date = new Date();
var monthNumber = date.getMonth();
var weekNumber = date.getDate();

function monthName(monthNumb) {
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
return monthNames[monthNumb];
}
var namedMonth = monthName(monthNumber);
var dates = document.getElementsByClassName("evalcolh3");
for (var i = 0; i < dates.length; i++) {
  dates[i].innerHTML =weekNumber +" "+ namedMonth;
  document.getElementById("numberOfDays").innerHTML = dates.length;
}
}

function remove1(){
  let element = document.getElementsByClassName('evalcol');
  element[0].parentNode.removeChild(element[0].parentNode.lastChild);

}

let ref = document.getElementsByClassName('refresh');
ref[0].addEventListener('click', function refresh(){
  let totalMissed = document.getElementById('missedLessons');
totalMissed.innerHTML = document.getElementsByClassName('empty').length;

//
let sum1 =0;
let median = document.getElementsByClassName('gradecol-1');
for(let i = 0; i <median.length; i++){
  sum1 +=Number(median[i].textContent);
}
Number(sum1);
let answer = sum1/median.length;
let JD1 = document.getElementById('JD1');
JD1.innerHTML = answer.toFixed(2);
})

// Function avarage







