function hideError(){
	document.getElementById('name_error_message').innerHTML="";
	document.getElementById('email_error_message').innerHTML="";
	document.getElementById('phone_error_message').innerHTML="";
	document.getElementById('visit_error_message').innerHTML="";
	document.getElementById('days_error_message').innerHTML="";
	document.getElementById('thanks_message').innerHTML="";
}

function getData(){
	let x = 0;
	let userName = document.getElementById("name").value;
	let userPhone = document.getElementById("phone").value;
	let userEmail = document.getElementById("email").value;
	let contactReason = document.getElementById("reasonSelect").value;
	let additionalInfo = document.getElementById("info").value;
	let visit = choice1.checked ? "yes" : "no";
	let getMonday = document.getElementById('mondayBox').checked;	
	let getTuesday = document.getElementById('tuesdayBox').checked;	
	let getWednesday = document.getElementById('wednesdayBox').checked;	
	let getThursday = document.getElementById('thursdayBox').checked;	
	let getFriday = document.getElementById('fridayBox').checked;		
	
	if (userName.length <= 0){
		document.getElementById('name_error_message').innerHTML="Please Enter A Valid Name";
	} else{
		document.getElementById('name_error_message').innerHTML="";
		x += 1;
	}
	
	if (userPhone.length !== 10){
		document.getElementById('phone_error_message').innerHTML="Please Enter A Valid Phone Number";
	} else {
		document.getElementById('phone_error_message').innerHTML="";
		x += 1;
	}
	
	 if (userEmail.indexOf("@")== -1 || userEmail.length < 6){
    	document.getElementById('email_error_message').innerHTML="Please Enter A Valid Email Address";
  } else{
		document.getElementById('email_error_message').innerHTML="";
		x += 1;
  }
  
	if (choice1.checked == false){
		document.getElementById('visit_error_message').innerHTML="Please Let Us Know If You Have Visited Our Restaurant";
	} else{
		document.getElementById('visit_error_message').innerHTML="";
		x += 1;
	}
	
	if (getMonday == false && getTuesday == false && getWednesday == false && getThursday == false && getFriday == false){
		document.getElementById('days_error_message').innerHTML="Please Select A Preferred Day For Contact";
	} else{
		document.getElementById('days_error_message').innerHTML="";
		x += 1;
	}
	
	if (x === 5){
		document.getElementById('thanks_message').innerHTML="Thank You For The Message, We Will Be In Touch As Soon As Possible";
	} else{
		document.getElementById('thanks_message').innerHTML="";
	}
	
  
  
  
  
  
  
  
  
  
}

	




