function sendEmail() {
	var formName = document.getElementById("varName").value;
	var formEmail = document.getElementById("varEmail").value;
	var formSubject = document.getElementById("varSubject").value;

	if(formName.length == 0 || formEmail.length == 0 || formSubject.length == 0)
	{	
		if (formName.length == 0) {
	
			document.getElementById("nameErr").innerHTML = "*required field";
		}
		else {
			document.getElementById("nameErr").innerHTML = "";
		}
	
	
		if (formEmail.length == 0) {
	
			document.getElementById("emailErr").innerHTML = "*required field";
		}
		else {
			document.getElementById("emailErr").innerHTML = "";
		}
	
		if (formSubject.length == 0) {
	
			document.getElementById("subjectErr").innerHTML = "*required field";
		}
		else {
			document.getElementById("subjectErr").innerHTML = "";
		}
		
		return false; 	//form not submitted
	}
	else
	{
		document.getElementById("nameErr").innerHTML = "";
		document.getElementById("emailErr").innerHTML = "";
		document.getElementById("subjectErr").innerHTML = "";
		
		//everything is filled out - send the email
		 document.getElementById("modalContact").modal('hide');

		alert("email sent");
	}
	

};