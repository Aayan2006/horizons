function onLoad() { // popup for beggining
            alert("Signup Now,to get our latest facts.");
            document.getElementById("timestamp").innerHTML = Date();
            getAPIBadge();
            
}
function checkNumber() {
    var theNumber, theMessage;
        
       // Get the value of the input field with id="numb"
    //theNumber = document.getElementById("smallnumber").val();
    theNumber = $("#smallnumber").val();

    // If x is Not a Number or less than one or greater than 10
    if (theNumber < 1 || theNumber > 10) {
        theMessage = "Number was expected to be between 1 and 10";
    } else if (isNaN(theNumber)) {   // this check seems to be redundant, it only reads numbers. why?? - find out, we found out that it is in the my first website 
        theMessage = "Hey! This is not a number!";
    } else {
        theMessage = "Number is Good";
    }
    $('#numberMessage').text(theMessage);
    
    document.getElementById("numberMessage").innerHTML = theMessage;

}

function getAPIBadge() {
    var ctcAPI = "http://ChooseToCodeAPI.azurewebsites.net/api/values/";
    $.post( ctcAPI, { 
        SchoolName:"Shiloh Point", 
        ZipCode: "30041", 
        Level:"Beginner"
    }).done(function( data ) {
        $("#badge").html(data);
    });
}
