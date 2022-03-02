
   //handle permisiion

// Start everything off

function handlePermission() {
  navigator.permissions.query({name:'accelerometer'}).then(function(result) {
    if (result.state == 'granted') {
      report(result.state);
      //geoBtn.style.display = 'none';
    } else if (result.state == 'prompt') {
      report(result.state);
      navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
    } else if (result.state == 'denied') {
      report(result.state);
      //geoBtn.style.display = 'inline';
    }
    result.onchange = function() {
      report(result.state);
    }
  });
}

function revokePermission() {
  navigator.permissions.revoke({name:'accelerometer'}).then(function(result) {
    report(result.state);
  });
}

function report(state) {
  console.log('Permission: ' + state);
}

handlePermission();
   //End of permisiion
   function updateFieldIfNotNull(fieldName, value, precision=10){
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
	}
	
   let acl = new Accelerometer({frequency: 10});
acl.addEventListener('reading', () => {
  console.log("Acceleration along the X-axis " + acl.x);
  console.log("Acceleration along the Y-axis " + acl.y);
  console.log("Acceleration along the Z-axis " + acl.z);
  updateFieldIfNotNull('accx', acl.x);
  updateFieldIfNotNull('accy', acl.y);
  updateFieldIfNotNull('accz', acl.z);

});

acl.start();

/*
   
    function updateFieldIfNotNull(fieldName, value, precision=10){
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
	}
	
   navigator.permissions.query({ name: 'accelerometer' })
.then(result => {
  if (result.state === 'denied') {
    console.log('Permission to use accelerometer sensor is denied.');
	updateFieldIfNotNull('error', 'Permission to use accelerometer sensor is denied.');
    return;
  }
  // Use the sensor.
});
  

function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    // Do something awesome.
updateFieldIfNotNull('accel', event.accelerationIncludingGravity.x);
}
/*
function print(newV)
{
 = newV;
}*/
//window.addEventListener("devicemotion", handleMotionEvent, true);


