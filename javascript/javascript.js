function submit_button()
{
	alert("Thank you for signing up!");
	return true;
}

function text()
{
		var first_name= document.getElementById("first_name");
	first_name.value = first_name.value.toUpperCase();

	var last_name= document.getElementById("last_name");
	last_name.value = last_name.value.toUpperCase();

}
