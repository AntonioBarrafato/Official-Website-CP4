function Alert(){
	confirm("Create Your Account?")
	
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function login(){
	var usernamee = "AntonioB"
	var passwordd = "antonio918"
	var user = prompt("please enter your username!");
	var pass = prompt("please enter your password!");
	
	if (user === usernamee){
		if (pass === passwordd){
			alert("Welcome "+ usernamee +" ")
			document.getElementById("Usernamee").innerHTML = "Welcome" + " " + usernamee; 
		}else{
			alert("WRONG PASSWORD");
		}
	}else{
		alert("WRONG USERNAME");
		}
}
