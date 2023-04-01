// Our labels along the x-axis
var date = [22, 23, 24, 25, 26];
// For drawing the lines
var past = [5,5,5,3,1];
var present = [8,6,2,9,2];
var future = [10,10,10,1,1];
var customized = [10,10,10,10,10];

var myChart = new Chart("myChart", {
    type: 'line',
    data: {
      labels: date,
      datasets: [
        { 
          data: past,
          label: "past",
          borderColor: "#3e95cd",
          fill: false
        },
        { 
          data: present,
          label: "present",
          borderColor: "#8e5ea2",
          fill: false
        },
        { 
          data: future,
          label: "future",
          borderColor: "#3cba9f",
          fill: false
        },
        { 
          data: customized,
          label: "customized",
          borderColor: "#e8c3b9",
          fill: false
        }
      ]
    }
  });

  var now = new Date().toDateString();
  console.log(now);

  document.getElementById("time").textContent = now;