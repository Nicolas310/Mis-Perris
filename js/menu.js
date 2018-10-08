var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");

btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
})

/*--------------------------js formulario-----------------------*/

function modifyText() {
    var letters = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ".", ","
                ]
    var txtRut = document.getElementById("txtRut")
    txtRut.value = txtRut.value.toLowerCase()
    for(let i in letters){
        txtRut.value = txtRut.value.replace(letters[i], "")
    }
    if(txtRut.value.includes("-")) {
        txtRut.value = txtRut.value.replace(/-/g, "")
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }else
    {
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }
    if(txtRut.value.includes("k")) {
        txtRut.value = txtRut.value.replace(/k/g, "")
        txtRut.value += "k"
    }
}

function validate() {
	console.log("validando")
	var txtName = document.getElementById("txtName")
	var nameValidator = document.getElementById("nameValidator")
	console.log(txtName.value.split(' ').length)
	if(txtName.value.split(' ').length < 2){
		nameValidator.innerHTML = "Este campo debiese tener dos palabras al menos"
	} else {
		nameValidator.innerHTML = ""
	}
}