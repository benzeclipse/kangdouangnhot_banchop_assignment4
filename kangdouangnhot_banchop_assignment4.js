//alert("JavaScript works!");
// SDI 
// Term 1304
// Banchop Ben Kangdouangnhot





var myLib = function ( ) {

	// String telephone 
	var myTelePhone = function ( teleNumber ) { 

		if ( isNaN( teleNumber ) ) {
				return true;	
	
			} else {
			
				return false;
			
	}

}

	// e-mail String
	var eMail = function ( email ) {

		if ( isNaN ( email) ) {
			 
				 return true;
			 
			} else {
	
				 return false;
		
	}

}


	// Checking URL string
	var urlString = function ( urlA, urlB ) {
	
	
		if ( isNaN ( urlA ) ) {
	
				return true;
	
			}else {
		
				return false;
	
}
	
		if ( isNaN ( urlB ) ) {
	
				return true;
	
			} else {
	
				return false;
	
		}

}


	// Number Functions passing in two parameters
	var numberString = function( first, second ){
	
  		var m = Math.floor ( first * second ) /1000 + first
  		
  		

		return  m
	
}

	// Title case string
	// passing in arguments and changing the beginning of each word to Capital letters
	var capitalString = function ( h) {
		  
	       return h
	       
	}



	// String number to actual number data type

	var dataType = function  ( number ) {
 
 	var xNum = Math.floor(number);
 
 	return xNum;
 	
 }
 
 
	return {
	
			"myTelePhone" 	: myTelePhone,
			"eMail" 		: eMail,
			"urlString" 	: urlString,
			"numberString"  : numberString,
			"capitalString" : capitalString,
			"dataType" 		: dataType 
	
	}

}


var newLib = new myLib();
	
	
	// telephone variables
	var teleNumber    = "407-695-0100";
	var endArea       = teleNumber.indexOf( "-" );
	var startTele     = teleNumber.indexOf( "-" )+1;
	var endMiddle     = teleNumber.lastIndexOf( "-" );
	var sLast         = teleNumber.lastIndexOf( "-" )+1;
	var endsTele      = teleNumber.length;			
	var a = teleNumber.substring (0, endArea );
	var b = teleNumber.substring ( startTele, endMiddle );
	var c = teleNumber.substring ( sLast , endsTele );
	console.log( a , b , c );
	

	// email variables
	var email         = "ben@fullsail.com";
	var endMail       = email.indexOf( "@" );
	var startMail     = email.indexOf( "@" )+1;
	var endMails      = email.indexOf( "." );
	var startLast     = email.indexOf( "." )+1;
	var endsMail      = email.length;	
	var d = email.substring(0, endMail );
    var e = email.substring( startMail, endMails );
	var f = email.substring( startLast, endsMail);
	console.log( d, e, f );
	
	// url variables
	var urlA = "http://";
	var urlB = "https://";
    
    var total = 5;
    var second = 1.000;
    
    
    // Capital Strings variable
    var h = "hello";
   
    
	
// calling all functions
console.log("Is this a phone number... " + newLib.myTelePhone( teleNumber ));

console.log("Is this a e-mail... " + newLib.eMail( email ));

console.log("Checking http:// and https:// is " + newLib.urlString( urlA , urlB ));

console.log(newLib.numberString ( 5, 2 ));

console.log(newLib.capitalString( h.replace ("h", "H") )); 

console.log( newLib.dataType( "37" ));

