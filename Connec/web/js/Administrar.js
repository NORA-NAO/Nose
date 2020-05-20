/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function  ValidarDatos(){
 
 var correo=document.getElementById("correo2").value;
 var contrasena = document.getElementById("contrasena2").value;
var correo2= document.getElementById("correo2").value;
var contrasena2=document.getElementById("contrasena2").value;


 
if (correo === "eda.ynora@gmail.com" && contrasena == "petunea01") {
	alert("Bienvenido")
	window.location.href= 'Principal.html';
}else if(correo == "anyax.27@gmail.com" && contrasena2=="123456"){
	 alert("Bienvenido")
	 window.location.href= 'Principal.html';
}else{

	alert("Mal :C")
}

}

