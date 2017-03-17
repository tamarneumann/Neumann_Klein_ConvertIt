var sendEmail = function() {

	var formName = document.getElementById("formName").value;
	var formEmail = document.getElementById("formEmail").value;
	var formSubject = document.getElementById("formSubject").value;

	if (formName == null) {

		document.getElementById("nameErr").innerHTML = "*required field";
	}

	if (formEmail == null) {

		document.getElementById("emailErr").innerHTML = "*required field";
	}

	if (formSubject == null) {

		document.getElementById("subjectErr").innerHTML = "*required field";
	}
	return formName;

};
