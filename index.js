// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function(driver){
    return console.log(driver.name);
  })
}

function logDriversByHometown(drivers,location){
  return drivers.forEach(function(driver){
    if(driver.hometown === location){
        return console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers){
  const newArray = function (driver1,driver2){
    return driver1 - driver2 ;
  };
  drivers.revenue.sort(newArray);

}
