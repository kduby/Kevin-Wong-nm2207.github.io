var now = new Date()
var string_now = now.toDateString();
var month = (now.getMonth()+1).toString();

//Retrieve data from local storage
var month_data = JSON.parse(localStorage.getItem(month)) ?? []

document.getElementById("time").textContent = string_now;
// document.getElementById("quote").textContent = window.value ?? "Sometimes you need to take a step backwards to sprint forwards";

var ratings_data = ["past","present","future"]

//Function called upon user clicking save for the ratings of the day
function saveData(){
  
  //Mainly for one-time user trial: customize date as needed
  var day = document.getElementById("custom_date").value.split('-')[2] ?? now.getDate().toString();
  //Prevent replicate ratings for same day
  if (month_data.includes(day)) {
    alert("You have already rated for this day!");
    return;
  }
  
  //Query the ratings and push to arrays to be used as data for Chart.js
  var ratings = document.querySelectorAll("scale-slider")
  for(let i = 0; i < ratings.length; i++){
    var rate = ratings[i].shadowRoot.querySelector("span > input[type=range]").value;
    var saved_data = JSON.parse(localStorage.getItem(ratings_data[i])) ?? [];
    saved_data.push(rate);
    localStorage.setItem(ratings_data[i],JSON.stringify(saved_data));
  }; 
   
  /**
   * Data Structure for localstorage is as follows: 
   * {month,array of dates}
   * {past,array of scales}
   * {present,array of scales}
   * {future,array of scales}
  **/ 

  var data_string = JSON.stringify(ratings_data)

  month_data.push(day);
  console.log(month_data)
  localStorage.setItem(month,JSON.stringify(month_data));
  console.log(day)
  location.href = "./dashboard/dashboard.html"
}

function fade() {
  // console.log(document.getElementById('Fade').style.opacity)
  document.getElementById('Fade').style.opacity='0';
  document.getElementById('Appear').style.opacity='1';
  console.log("fade")
  console.log(document.getElementById('Appear').style.opacity)
}


  