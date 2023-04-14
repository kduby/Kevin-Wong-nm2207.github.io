var now = new Date()
var string_now = now.toDateString();
console.log(now);
var month = (now.getMonth()+1).toString();
console.log(month);
console.log(localStorage.getItem(month))
var month_data = JSON.parse(localStorage.getItem(month)) ?? []

console.log(month_data);


document.getElementById("time").textContent = string_now;
console.log(document.getElementById("custom_date"));
var ratings_data = ["past","present","future"]

function saveData(){
  console.log("saved");
  console.log(document.getElementById("custom_date").value.split('-')[2]);

  var ratings = document.querySelectorAll("scale-slider")
  console.log(ratings)
  for(let i = 0; i < ratings.length; i++){
    console.log(ratings[i])
    var rate = ratings[i].shadowRoot.querySelector("span > input[type=range]").value;
    var saved_data = JSON.parse(localStorage.getItem(ratings_data[i])) ?? [];
    saved_data.push(rate);
    localStorage.setItem(ratings_data[i],JSON.stringify(saved_data));
    // console.log(ele.shadowRoot.querySelector("span > input[type=range]").value);
  }; 
   
  //{month,array of dates}

  //{past,array of scales}
  //{present,array of scales}
  //{future,array of scales}

  console.log(ratings_data);
  var data_string = JSON.stringify(ratings_data)
  console.log(data_string)
  // var day = new Date().getDate().toString()

  var day = document.getElementById("custom_date").value.split('-')[2] ?? now.getDate().toString();
  month_data.push(day);
  console.log(month_data)
  localStorage.setItem(month,JSON.stringify(month_data));
  console.log(day)
  location.href = "./dashboard/dashboard.html"
}


  