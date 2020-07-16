/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

  function validaCedula() { 
  var expreg = /^[0-9]{9}$/;
  var m = document.getElementById("cedula").value;
  var n = document.getElementById("cedula");
  
  if(expreg.test(m)){
	alert("La cédula está bien digitada"); 
        $(n).css("borderColor", "green");
    }else {
    alert("La cédula está mal digitada"); 
    $(n).css("borderColor", "red");
    }
    
  }