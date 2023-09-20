function myCheck(){
	var pass1=document.getElementById('password');
	var pass2=document.getElementById('c_password');
	if(pass1.type=="password" || pass2.type=="password"){
		pass1.type="text";
		pass2.type="text";
	}else{
			pass1.type="password";
		pass2.type="password";
	}
	
}

var form=document.getElementById('form');
form.addEventListener('submit',Function(even){
	var username=even.target.username;
	var username=even.target.email;
	var username=even.target.mobile;
	var pass1=even.target.password;
	var pass2=even.target.c_password;
	document.write(pass1.value);
})
