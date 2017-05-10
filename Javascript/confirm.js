/** this is what makes the login work **/
function login(){
	/** these are the variables **/
	var userarray = ["user1", "user2", "user3", "AntonioB", "Sacha"]
	var passarray = ["pass1", "pass2", "pass3", "antonio918", "Mancuso"]

	var user = prompt("please enter your username!");
	var pass = prompt("please enter your password!");
	
	for (a = 0; a <= userarray.length; a++){
		/* the for loop searches the userarray and passarray, and if they match, 
it goes on with the code*/
		if (user === userarray[a] && pass === passarray[a]){
			alert("Welcome "+ userarray[a]);
		/** this just says if the username and password match the variable, it tells 
the user welcome and displays your username at the top of the page **/
			document.getElementById("userarray").innerHTML = "Welcome "+ userarray[a];  
			console.log("Username: " + userarray[a])
			console.log("Password: " + passarray[a])
		}
	}
}
