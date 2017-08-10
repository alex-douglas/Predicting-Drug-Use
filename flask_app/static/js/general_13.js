function checkIfDivorced() {
    if (document.getElementById('divorcedCheck').checked) {
        document.getElementById('ifDivorced').style.display = 'block';
    }
    else document.getElementById('ifDivorced').style.display = 'none';
}

function checkIfLive() {
    if (document.getElementById('yes_live_check').checked) {
        document.getElementById('ifLive').style.display = 'block';
    }
    else document.getElementById('ifLive').style.display = 'none';

}

function getFocus(elem_id) {
	window.setTimeout(function ()
    {
        document.getElementById(elem_id).focus();
    }, 0);
}

function change_pic(source) {
	if(source == 'sex') {
		document.getElementById('graph_img').src = '../static/img/sex_3.png';
	}
	else if(source == 'drug_type') {
		document.getElementById('graph_img').src = '../static/img/drug_type.png';	
	}
}

function change_name(elem_id) {
	var nameValue = document.getElementById('nom').value;
	var str2 = 'Thank you for your Application, ';
	var str3 = 'Applicant: ';
	console.log(str2.concat(nameValue));
	document.getElementById('thanks').innerHTML = str2.concat(nameValue);
	document.getElementById('name_result').innerHTML = str3.concat(nameValue);

	window.setTimeout(function ()
    {
        document.getElementById(elem_id).focus();
    }, 0);
}