let distance = 0; // initial distance value
let steps = 0; // initial step count

// Add an event listener for device motion, and calculate distance and step count with each change
window.addEventListener('devicemotion', e => {
  const { x, y, z } = e.accelerationIncludingGravity; // get acceleration values

  // calculate acceleration magnitude
  const acceleration = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

  // set threshold for step detection
  const threshold = 10;

  // detect peaks in acceleration data
  const peakDetected = acceleration > threshold;

  if (peakDetected) {
    // increment step count
    steps++;

    // calculate distance based on average stride length of 0.75 meters
    distance += 0.75;

    // update the step count and distance elements on the HTML page
    const stepsElement = document.getElementById('steps');
    stepsElement.textContent = steps;

    const distanceElement = document.getElementById('distance');
    distanceElement.textContent = `${distance.toFixed(2)} km`;
  }
});