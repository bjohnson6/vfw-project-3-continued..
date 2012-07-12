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
   "Note A Special Moment"
]




//Set Link and Submit click events
var displayLink = $("displayLink");
displayLink.addEventListener("click",getData);
var clearLink=$("clear");
clearLink.addEventListener("click",clearLocal);
var save = $("submit");
save.addEventListener("click",storeData);


});
