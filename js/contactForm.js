var sendEmail = function() {

	var formName = document.getElementById("varName").value;
	var formEmail = document.getElementById("varEmail").value;
	var formSubject = document.getElementById("varSubject").value;

	if(formName.length == 0 || formEmail.length == 0 || formSubject.length == 0)
	{	
		if (formName.length == 0) {
	
			document.getElementById("nameErr").innerHTML = "*required field";
		}
	
		if (formEmail.length == 0) {
	
			document.getElementById("emailErr").innerHTML = "*required field";
		}
	
		if (formSubject.length == 0) {
	
			document.getElementById("subjectErr").innerHTML = "*required field";
		}
		return false; 	//form not submitted
	}
	else
	{
		//everything is filled out - send the email
		alert("email sent");
	}
	

};