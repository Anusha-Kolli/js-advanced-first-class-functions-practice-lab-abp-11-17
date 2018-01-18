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

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice()
  return newDrivers.sort(function(driverA, driverB){
    return driverA.revenue - driverB.revenue
  })
}

function driversByName(drivers) {
  const newDrivers = drivers.slice()
  return newDrivers.sort(function(driverA, driverB){
   return driverA.name.localeCompare(driverB.name)
  })
}

function totalRevenue(){
  
}
