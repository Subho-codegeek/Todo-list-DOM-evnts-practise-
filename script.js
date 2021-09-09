var button = document.getElementById("button");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var li = document.getElementsByTagName('li');


function listadd(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	var button1 = document.createElement("button");
	button1.innerHTML="Delete";
	li.appendChild(button1);
	input.value="";
	liEvent();
	buttonListElement();
}



button.addEventListener("click" , function(){
	
	if (input.value.length>0){
		listadd();
	}
})

input.addEventListener("keypress" , function(event){

	if (input.value.length>0 && event.which==13){
		listadd();
	}	
})


function liEvent(){
	for(var i=0; i<li.length; i++){
	li[i].addEventListener('click', changeClass)
	}
}

function changeClass(){
	this.classList.toggle('done');
}

function buttonListElement(){
	var button = document.querySelectorAll('li button');
	for(var i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}
