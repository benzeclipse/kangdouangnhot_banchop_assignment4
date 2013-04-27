//alert("JavaScript works!");

// String telephone number and String e-mail boolean

var myString = function ( ) {


// telephone variables
var teleNumber    = "407-695-0100";

var endArea       = teleNumber.indexOf( "-" );

var startTele     = teleNumber.indexOf( "-" )+1;
var endMiddle     = teleNumber.lastIndexOf( "-" );

var sLast     = teleNumber.lastIndexOf( "-" )+1;
var endsTele      = teleNumber.length;


// email variables
var email         = "ben@fullsail.com";

var endMail       = email.indexOf( "@" );

var startMail     = email.indexOf( "@" )+1;
var endMails      = email.indexOf( "." );

var startLast     = email.indexOf( "." )+1;
var endsMail      = email.length;

	

// telephone boolean  
	if ( teleNumber === "407-695-0100" ) {
	
		var a = teleNumber.substring (0, endArea );
		var b = teleNumber.substring ( startTele, endMiddle );
		var c = teleNumber.substring ( sLast , endsTele );

			console.log( a , b , c );
		
		} else {

			console.log("Does Not pass!!!");
		
	}

// email boolean
		if ( email === "ben@fullsail.com" ) {
			var d = email.substring(0, endMail );
		    var e = email.substring( startMail, endMails );
		    var f = email.substring( startLast, endsMail);
		    
				console.log( d, e, f );
		
		} else {

			console.log("Does Not pass!!!");
		
	}

};

myString();


