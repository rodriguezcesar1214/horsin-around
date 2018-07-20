
// The Globals *some cleanup and rescoping is in order eventually....*
    var inputName = "0";
	var inputAddress = "0";
	var nameList = ["0", "Dummy", "Dummy1", "Dummy2"];
	var addressList = ["0","123 Street", "456 Lane", "789 Drive"];
	
// submitHandle decides if case insensitive name and address matches value in given array 
function submitHandle() {
	inputName = document.getElementById("clntname").value;
	inputAddress = document.getElementById("address").value;
	var lwrName = inputName.toLowerCase();
	var lwrNameList = nameList.map(function(ele) { return ele.toLowerCase(); });
	var lwrAddress = inputAddress.toLowerCase();
	var lwrAddressList = addressList.map(function(ele) { return ele.toLowerCase(); });
// if case insensitive name and address match value in array, switch statement provides output based on array values
	if($.inArray(lwrName, lwrNameList) && 
	$.inArray(lwrAddress, lwrAddressList)=== -1)
	{
		alert('Not in array');
}
else {
		switch (true) {
			case (lwrName == "0" && lwrAddress == "0"):
				$('#landingpage').hide();
				loadPage();
				
				break;
			case (lwrName == "dummy" && lwrAddress == "123 street"):
				alert('hello Dummy from 123 Street'); //do something placeholder
				break;
			default:
				alert('Not in array');
				break;
		}
}}

// shows submit button if all 3 checkboxes are checked
function checkPass_0() {
	if($('#checkSSN').is(':checked') && $('#checkacc').is(':checked') 
		&& $('#checkdog').is(':checked'))
	{
		$('#finalsubmit').show();
}
else {
	$('#finalsubmit').hide();
}}

var loadtime;
function loadPage() {
	$('#mainform').removeClass('form');
	$('#loader').show();
	 loadtime = setTimeout(showPage, 3000);

}

function showPage() {
	$('#loader').hide();
		 $('#mainform').addClass('form');
		 $('#checksec_0').show(600);
}