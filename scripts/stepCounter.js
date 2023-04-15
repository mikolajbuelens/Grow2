let x = [];
let y = [];
let z = [];
let peaks = 0;
let threshold = 12;

let stepCount = 0;
let distanceInKm = 0;
let stepsPerKm = 1312;

window.addEventListener("devicemotion", (event) => {
  let acceleration = event.accelerationIncludingGravity;
  x = acceleration.x;
  y = acceleration.y;
  z = acceleration.z;

  let accelerationMagnitude = Math.sqrt(x * x + y * y + z * z);

  if (accelerationMagnitude > threshold) {
    peaks++;
    if (peaks > 1 && peaks % 2 == 0) {
      stepCount++;
      distanceInKm = stepCount / stepsPerKm;
      document.getElementById("distance").innerHTML = distanceInKm.toFixed(2) + " km";
      document.getElementById("steps").innerHTML = stepCount + " steps";
    }
  }
});