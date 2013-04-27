//alert("JavaScript works!");

// String telephone number and String e-mail boolean

var phone = function ( ) {


// telephone variables
var teleNumber = "407-695-0100";
var end 	   =   teleNumber.indexOf( "-" );
var start      = teleNumber.indexOf( "-" );
var ends       = teleNumber.lastIndexOf("-");


// email variables
var email      = "ben@fullsail.com";
var endMail        = email.indexOf( "@" );
var startMail     = email.indexOf( "." );
var stopMail       = email.lastIndexOf(".");


// telephone boolean  
	if ( teleNumber === "407-695-0100" ) {
		console.log(teleNumber.substring(0, end + start + ends));
		console.log("String passes");
		
		} else {

			console.log("Does Not pass!!!");
		
	}

// email boolean
		if ( email === "ben@fullsail.com" ) {
		console.log(email.substring( 0, endMail + startMail + stopMail ));
		console.log("String passes");
		
		} else {

			console.log("Does Not pass!!!");
		
	}

};

phone();


