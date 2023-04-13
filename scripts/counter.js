// Request permission to access the device's accelerometer data
if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission().then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener('devicemotion', deviceMotionHandler);
      }
    }).catch(console.error);
  } else {
    window.addEventListener('devicemotion', deviceMotionHandler);
  }
  
  // Listen to the device's accelerometer data
  let accelerationX = 0;
  let accelerationY = 0;
  let accelerationZ = 0;
  
  function deviceMotionHandler(event) {
    accelerationX = event.accelerationIncludingGravity.x;
    accelerationY = event.accelerationIncludingGravity.y;
    accelerationZ = event.accelerationIncludingGravity.z;
  
    // Process the accelerometer data
    const motion = Math.sqrt(
      accelerationX * accelerationX +
      accelerationY * accelerationY +
      accelerationZ * accelerationZ
    );
    
    const threshold = 10; // Adjust this value to fit your walking style
    let stepCount = 0;
    
    if (motion > threshold) {
      stepCount++;
    }
    
    // Display the step count
    document.getElementById('step-count').innerHTML = stepCount;
  }