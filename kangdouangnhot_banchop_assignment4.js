//alert("JavaScript works!");


var teleNumber = "407-695-0100";
var end =   teleNumber.indexOf( "-" );

var start = teleNumber.indexOf( "-" );
var stop = teleNumber.lastIndexOf("-");

console.log(teleNumber.substring(  0, end + start + stop ));
  
   
if ( teleNumber === "407-695-0100" ) {
		console.log("String passes");
} else {
		console.log("Does Not pass!!!");

};