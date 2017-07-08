function myFunction() {
	var x = document.getElementsByName("fname")[0].value;
    document.getElementById("user").innerHTML = x;
	var y = document.getElementsByName("name")[1].value;
    document.getElementById("output").innerHTML = y;
}
