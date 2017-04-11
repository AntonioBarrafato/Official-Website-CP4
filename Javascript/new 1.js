if (user === usernamee){
		if (pass === passwordd){
			alert("Welcome "+ usernamee +" ")
			document.getElementById("Usernamee").innerHTML = "Welcome" + " " + usernamee; 
		}
			else{
		/** if the password id wrong it says wrong password **/
			alert("WRONG PASSWORD");
		}
		}	else{
		/** if the username is wrong, it says wrong username **/
			alert("WRONG USERNAME");
		}
}