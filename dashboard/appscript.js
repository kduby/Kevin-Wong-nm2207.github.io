//Arrays to store data to be displayed by Chart.js
var date = []
var past = []
var present = []
var future = []

var now = new Date().toDateString();

//Iterate through local storage to push data to respective array
for(var i=0;i<localStorage.length; i++) {
    var key = localStorage.key( i );
    var items = JSON.parse( localStorage.getItem( key ) );
    if (key === "past") {
      for (item in items) {
        console.log(items[item])
        past.push(items[item]);
      }
    } 
    else if (key === "present") {
      for (item in items) {
        present.push(items[item]);
      }
    } 
    else if (key === "future") {
      for (item in items) {
        future.push(items[item]);
      }
    }
    else {
      for (item in items) {
        date.push(items[item]);
      }
    }
}

document.getElementById("time").textContent = now;

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
        }
      ]
    },
    options: { 
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    // OR //
                    // beginAtZero: true   // minimum value will be 0.
                    suggestedMax: 10
                }
            }]
        }
    }
  });
