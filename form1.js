var attempt="5";
function loadHomePage() {
	window.location.assign = "https://www.jobeaver.cat/index.html";
}

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "Beavie" && password == "8261819A*"){
	alert ("Login successfull!");
	return false;
	}

	else{

	attempt --;
	alert("You have "+attempt+" attempts;");
	if( attempt == 0){
		document.getElementById("user_name").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
}
}
}
