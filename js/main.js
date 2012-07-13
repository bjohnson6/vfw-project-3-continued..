//Bernice Johnson
//Project 1
// Visual Frameworks 12/06


//wait until the dom is ready.
window.addEventListener("DOMContentLoaded", function(){	   



//getelementByID function
function $(x){
    var theElement = document.getElementById(x);
    return theElement;              
};


//Create Select field element and populate with options.
function makeOptions
    var formTag = document.getElementsByTagName("form"),//formTag is an arrray of all the form tags.
        selectLi = $("select"),
        makeSelect = document.createElement("select");
        makeSelect.setAttribute("id", "groups");
    for(var i=0, j=addAnEvent.length; i<j; i++) {
    	var makeOption = document.createElement("option");
    	var optText = addAnEvent[i];
    	makeOption.setAttribute("value", optText);
    	makeOption.innerHTML = optText;
    	makeSelect.appendChild(makeOption);

    }  
    selectLi.appendChild(makeSelect);

}

//Finc value of selected radio button
function getSelectedRadio(){
	var radio = document.forms[0].same;
	for(var i=0; i<radio.length; i++){
		if(radio[i].checked){
			zodiacValue = radio[i].value;

		}
		

	}

}
//function getCheckboxValue(){
//	if($("yes").checked){
//		yesValue=
 //   }else{
 //       yesValue="No"
 //   }
//	}


//}



function storeData(){
	var id           = Math.floor(Math.random()*100000001);
	//gather up all form field values and store in an object.
	//Object properties contain array with the form label and input value.
	getSelectedRadio();
	var item           ={};
	    item.addanevent     = ["Add An Event:", $("addanevent").value];
	    item.name      =["Name:", $("name").value];
	    item.when      =["When:",$("when").value];
	    item.what      =["What:",$("what").value];
	    iten.where     =["Where:",$("where").value];
	    item.startd    =["Start Date:",$("startd").value];
	    item.endd      =["End Date:", $("endd").value];
	    item.addnotes  =["Add Notes:",$("addnotes").value];
	    item.zodiac    =["Zodiac:", zodiacValue];
	    item.ratemylover     =["Rate My Lover:",$("range").value]; 
	 //save data ito local storage: Use stringify to convert object to a string.
	 localStorage.setItem(id. JSON.stringify(item));
	 alert("Memory is Saved!");



}




//Variable defaults
var addAnEvent =[
   "--Choose Your Moment--", 
   "First Met", 
   "First Date",
   "First Kiss",
   "First Said I Love You!", 
   "Our Song",
   "--Choose Something Else--",
   "Our Names",
   "Relationship Status",
   "Calculate Time Together",
   "Note A Special Moment",
]
   zodiacValue
;  
makeOptions();



//Set Link and Submit click events
var displayLink = $("displayLink");
displayLink.addEventListener("click",getData);
var clearLink=$("clear");
clearLink.addEventListener("click",clearLocal);
var save = $("submit");
save.addEventListener("click",storeData);


});
