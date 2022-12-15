
const year = document.getElementById("year");
const month = document.getElementById("month");
const days = document.getElementById("days");


const your_name = document.getElementById("name")


function show(){
  let errorDays = document.getElementById("errorDays");
  let errorMonth = document.getElementById("errorMonth");
  const result = document.getElementById("result");
  let errorYear = document.getElementById("errorYear");
  
}


function errorHandlingDays(){  // show error function for Days
  
  
    if(days.value < 0 || days.value > 31){
       errorDays.innerText = "date is not valid " 
    }else{
        errorDays.innerText = ""
    }
    show();
   
}

function  errorHandlingYear(){  // show error function for Years
 
  const today = new Date();
  let yearDiff = today.getFullYear() - Number(year.value);
    if(Number.isNaN(yearDiff) ){
       errorYear.innerText = "invalid Year"
    }
    show();
} 

function getDaysForMonth(month) { // declare month days
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      throw new Error("Month does not exist");
  }
}



// Calculating Age function
function calculate(){  

    const today = new Date();
    let yearDiff = today.getFullYear() - Number(year.value);
    let monthDiff = today.getMonth() + 1  - month.value;
    let dateDiff = today.getDate() - days.value;

   if(dateDiff < 0 ){
    dateDiff = getDaysForMonth(today.getMonth() + 1)   + dateDiff;
    monthDiff-- ;
   }
   if(monthDiff < 0 ){
    monthDiff = 12 + monthDiff;
    yearDiff--
   }


    result.innerText  = `Hey ${your_name.value}  your age is ${yearDiff} year , ${monthDiff} month and ${dateDiff} days. ` ;

    year.value = "";
    month.value = "";
    days.value = "";
    your_name.value = "";
    errorDays.innerText = "";
    errorYear.innerText = ""

   show()

}

document.getElementById('submit').addEventListener('click' , calculate);


// for Reloading input function
document.getElementById('reload').addEventListener('click', reloading )

function reloading(){
 year.value = ""
 month.value = ""
 days.value = ""
 your_name.value = ""
 errorDays.innerText = ""
 errorYear.innerText = ""
 result.innerText = ""
 show();
}

