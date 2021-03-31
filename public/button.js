var count=0;

function changetostore(){

	var divmain=document.getElementById("real1");

	

	 var date=new Date();
///////////Temperature//////////
	 var div=document.getElementById("real1");

	 var main=document.createElement("fieldset");
	 div.appendChild(main);


	 var attributediv=document.createAttribute("id");
	 attributediv.value="divstorebox";
	 main.setAttributeNode(attributediv);


	 	 var leg=document.createElement("legend");
	 main.appendChild(leg);

	  var datehead= document.createElement("h1");
	  leg.appendChild(datehead);
	  datehead.innerHTML=date;

	    var attributedate=document.createAttribute("id");
	 attributedate.value="datebox";
	 datehead.setAttributeNode(attributedate);


	   var attributemain=document.createAttribute("id");
	 attributemain.value="mainstorebox";
	 main.setAttributeNode(attributemain);

	 var element= document.createElement("p");
	 main.appendChild(element);

	 var text=document.createTextNode("Temperature is = ");
	 element.appendChild(text);

	 var element1=document.createElement("span");
	 element.appendChild(element1);

	 var text1=document.createTextNode("Value here");
	 element1.appendChild(text1);

	 element.appendChild(document.createTextNode("°C."));

	 var pattribute=document.createAttribute("class");
	 pattribute.value="newnode1";
	 element1.setAttributeNode(pattribute);

	  var pattribute1=document.createAttribute("id");
	 pattribute1.value="tempbox";
	 element1.setAttributeNode(pattribute1);

////////////Humidity//////////

	 var element2= document.createElement("p");
	 main.appendChild(element2);

	 var text2=document.createTextNode("Humidity is = ");
	 element2.appendChild(text2);

	 var element3=document.createElement("span");
	 element2.appendChild(element3);

	 var text3=document.createTextNode("Value");
	 element3.appendChild(text3);

	 element2.appendChild(document.createTextNode("%."));

	 var pattribute2=document.createAttribute("class");
	 pattribute2.value="newnode2";
	 element3.setAttributeNode(pattribute2);

	  var pattribute3=document.createAttribute("id");
	 pattribute3.value="tempbox";
	 element3.setAttributeNode(pattribute3);

	 var attributephone=document.createAttribute("class");
	 attributephone.value="reduce";
	 element.setAttributeNode(attributephone);

	 var attributephone=document.createAttribute("class");
	 attributephone.value="reduce";
	 element2.setAttributeNode(attributephone);



	 



//////////Firebase///////////
	 var database=firebase.database();
 	var tempChangeRef= firebase.database().ref('Temperature/');
	var humidChangeRef= firebase.database().ref('Humidity/');
	var tempChange=document.getElementsByClassName("newnode1");
	var humidChange=document.getElementsByClassName("newnode2");

tempChangeRef.once('value', function(snapshot){
	var consoleval=snapshot.val();
	console.log(consoleval);

	tempChange[count].innerHTML=snapshot.val();

});

humidChangeRef.once('value', function(snapshot){
	var consoleval=snapshot.val();
	console.log(consoleval);

	humidChange[count].innerHTML = snapshot.val();

});

count++;
}



function changetoreal(){

	var divmain=document.getElementById("real1");

	var pattributenone=document.createAttribute("style");
	 pattributenone.value="display:none;";
	 divmain.setAttributeNode(pattributenone);




}



function changetoprev(){
	var divmain=document.getElementById("real1");

	var pattributenone=document.createAttribute("style");
	 pattributenone.value="display:block;";
	 divmain.setAttributeNode(pattributenone);
}


// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}