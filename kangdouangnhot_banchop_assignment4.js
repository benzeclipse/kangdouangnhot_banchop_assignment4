//alert("JavaScript works!");
// SDI 
// Term 1304
// Banchop Ben Kangdouangnhot







// String telephone 

var myTelePhone = function ( ) {

	// telephone variables
	var teleNumber    = "407-695-0100";
	var endArea       = teleNumber.indexOf( "-" );
	var startTele     = teleNumber.indexOf( "-" )+1;
	var endMiddle     = teleNumber.lastIndexOf( "-" );
	var sLast         = teleNumber.lastIndexOf( "-" )+1;
	var endsTele      = teleNumber.length;
	
// telephone boolean  

if ( teleNumber === "407-695-0100" ) {	
		var a = teleNumber.substring (0, endArea );
		var b = teleNumber.substring ( startTele, endMiddle );
		var c = teleNumber.substring ( sLast , endsTele );

		console.log( a , b , c );
		
	} else {

		console.log("Does Not pass!!!");
		
	}

};














// e-mail String

var eMail = function () {

// email variables

	var email         = "ben@fullsail.com";
	var endMail       = email.indexOf( "@" );
	var startMail     = email.indexOf( "@" )+1;
	var endMails      = email.indexOf( "." );
	var startLast     = email.indexOf( "." )+1;
	var endsMail      = email.length;

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













// Checking URL string

var urlString = function ( ) {
	var urlA = "http://";
	var urlB = "https://";
	
	if ( urlA === "http://" ) {
	
			console.log("You may pass");
	
		}else {
		
			console.log("can't pass");
	
};
	
	if ( urlB = "https://" ) {
	
			console.log("You may pass");
	
		} else {
	
			console.log("can't pass");
	
	}

};











// Number Functions passing in two parameters

var numberString = function( first, finalNum ){

	finalNum = ".09323";

	console.log( first + finalNum );

};












// Title case string
// passing in arguments and changing the beginning of each word to Capital letters

var capitalString = function ( h, w ) {
	console.log(h.replace ( "h", "H" ) );
	console.log(w.replace ( "w", "W" ) );

};











// String number to actual number data type

var dataType = function  ( thritySeven ) {

	thritySeven = 37;

if ( thritySeven === 37 ) {

		console.log( "You passed in a number of " , thritySeven );

	} else {

		console.log( "You passed in a string!" );

	}

};







// calling all functions

myTelePhone();

eMail();

urlString();

numberString ( 5.0, 5 );

capitalString("hello", "world");

dataType("37");

//arraySum();