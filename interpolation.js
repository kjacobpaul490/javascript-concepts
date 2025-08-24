function showDeviceDetails(){
let deviceName=document.getElementById("txtDeviceName").value;
let deviceCost=document.getElementById("txtDeviceCost").value;
let deviceManufactureAt=document.getElementById("txtDeviceManufactureAt").value;
var result =`${deviceName} is manfed in the year ${deviceManufactureAt} at the cost of ${deviceCost}`;
document.getElementById("pResult").innerHTML=result;
}