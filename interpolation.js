
window.addEventListener('DOMContentLoaded', function () {
    debugger;
    var params = new URLSearchParams(window.location.search);
    if (params.toString().length === 0) {
        return;
    }

    var movie = {
        movieName: params.get('MovieName') || '',
        movieDescription: params.get('MovieDescription') || '',
        releaseDate: params.get('ReleaseDate') || '',
        genre: params.get('Genre') || '',
        director: params.get('Director') || '',
        actor: params.get('Actor') || '',
        language: params.get('Language') || '',
        country: params.get('Country') || '',
        budget: params.get('Budget') || ''
    };
});
function showDeviceDetails() {
    let deviceName = document.getElementById("txtDeviceName").value;
    let deviceCost = document.getElementById("txtDeviceCost").value;
    let deviceManufactureAt = document.getElementById("txtDeviceManufactureAt").value;
    var result = `${deviceName} is manfed in the year ${deviceManufactureAt} at the cost of ${deviceCost}`;
    document.getElementById("pResult").innerHTML = result;
}