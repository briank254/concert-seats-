// Determine whether each seat can "see" the front stage
function checkSeats() {
  var inputs = [];
  for (var i = 1; i <= 36; i++) {
    if (document.getElementById(i).value == "") {
      inputs.push(0);
    } else {
      inputs.push(document.getElementById(i).value);
    }
  }
  seeFrontStage(inputs);
}
function seeFrontStage(arr) {
  var returnvalue = "true";
//the first six seats on the front row can automatically see the stage hence this ..
  for (var i = 0; i < 6; i++) {
    var front = [];
    front.push(arr[i]);
    for (var y = i + 6; y < arr.length; y++) {
      if (parseInt(arr[y]) > parseInt(front[front.length - 1])) {
        front.push(parseInt(arr[y]));
        document.getElementById(y + 1).style.backgroundColor = "green";
      } else {
        returnvalue = "false";
        document.getElementById(y + 1).style.backgroundColor = "red";
      }
      y += 5;
    }
  }
  document.getElementById("result").innerHTML = returnvalue;
  console.log(returnvalue);
}
