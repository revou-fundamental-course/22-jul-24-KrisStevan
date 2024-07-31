function validateForm(){
    const name = document.forms['main-content-form']['name'].value;
    const email = document.forms['main-content-form']['email'].value;

    if(name == "" || email == ""){
		alert("Nama dan email tidak boleh kosong");
		return false;
	}
}