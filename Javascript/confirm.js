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

/** this is what makes the login work **/
function login(){
	/** these are the variables **/
	var userarray = ["user1", "user2", "user3", "AntonioB"]
	var passarray = ["pass1", "pass2", "pass3", "antonio918"]
	var user = prompt("please enter your username!");
	var pass = prompt("please enter your password!");
	/** this just says if the username and password match the variable, it tells 
		the user welcome and displays your username at the top of the page **/
	
	for (i = 0; i <= userarray.length; i++){
		if (user === userarray[i] && pass === passarray[i]){
			alert("Welcome "+ userarray[i] +" ");
			document.getElementById("userarray").innerHTML = "Welcome "+ userarray[i];  
		}
	}
}
