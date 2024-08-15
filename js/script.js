/*Example:1*/
function showText(){
	document.getElementById('s_text').innerHTML="Welcome to JavaScript World";
}


/*Example:2*/
function showContent(){
	document.getElementById('demo').innerHTML="Hello JavaScript!";
}


/*Example:3*/
function showDate(){
	document.getElementById('s_date').innerHTML=Date();
}


/*Example:4*/
function bulbOn(){
	document.getElementById('img').src="images/on.gif";	
}
function bulbOff(){
	document.getElementById('img').src="images/off.gif";	
}


/*Example:5*/
function showContent(){
	document.getElementById('con').style.display="block";
}
function hideContent(){
	document.getElementById('con').style.display="none";
}


/*Example:6*/
var number1 = 5;
var number2 = 4;
var result = number1 + number2;
function showResult(){
	document.getElementById('result').innerHTML = "11";
}

/*Example:7*/
let x, y, z;  
x = 5;        
y = 6;        
z = x + y;   
document.getElementById('demo2').innerHTML="The value of z is " + z + ".";


/*Example:8*/
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById('demo3').innerHTML= c;

/*Example:9*/
let e, f, g;
e = 5; f = 6; g = e + f;
document.getElementById('demo4').innerHTML= g;


/*Example:10*/
document.getElementById("demo5").innerHTML =
"Hello Dolly!";


/*Example:11*/
function seeBlocks() {
  document.getElementById("demo6").innerHTML = "Hello Dolly!";
  document.getElementById("demo7").innerHTML = "How are you?";
}


/*Example:12*/
document.getElementById("demo8").innerHTML = 10.50;



/*Example:13*/
document.getElementById("demo9").innerHTML = 'John Doe';


/*Example:14*/
let r;
r = 6;
document.getElementById("demo10").innerHTML = r;


/*Example:15*/
document.getElementById("demo11").innerHTML = (5 + 6) * 10;


/*Example:16*/
let h, i;
h = 5;
i = 6;
document.getElementById("demo12").innerHTML = h + i;


/*Example:17*/
document.getElementById("demo13").innerHTML = 5 * 10;


/*Example:18*/
var j;
j = 5;
document.getElementById("demo14").innerHTML = j * 10;


/*Example:19*/
document.getElementById("demo15").innerHTML = "John" + " "  + "Doe";



/*Example:20*/
let k, l;
k = 5 + 6;
l = k * 10;
document.getElementById("demo16").innerHTML = l;

/*Example:21*/
let lastname, lastName;
lastName = "Rabeya";
lastname = "Khatun";
document.getElementById("demo17").innerHTML = lastName;

/*Example:22*/
document.getElementById("myH").innerHTML = "JavaScript Comments";
document.getElementById("myP").innerHTML = "My first paragraph.";


/*Example:23*/
let o = 5;      
let p = o + 2;  
document.getElementById("demo18").innerHTML = y;


/*Example:24*/
x1 = 5;
y1 = 6;
z1 = x1 + y1;
document.getElementById("demo19").innerHTML =
"The value of z1 is: " + z1;


/*Example:25*/
const x2 = 5;
const y2 = 6;
const z2 = x2 + y2;
document.getElementById("demo20").innerHTML =
"The value of z2 is: " + z2;


/*Example:26*/
var  x3 = 10;
{  
var x3 = 2;
}
document.getElementById("demo21").innerHTML = x3;


/*Example:27*/
try {
  const PI = 3.141592653589793;
  PI = 3.14;
}
catch (err) {
  document.getElementById("demo22").innerHTML = err;
}


/*Example:28*/
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");
document.getElementById("demo23").innerHTML = cars; 




/*Example:29*/
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";
document.getElementById("demo24").innerHTML = "Car owner is " + car.owner; 


/*Example:30*/
const  x4 = 10;
{  
const x5 = 2;
}

document.getElementById("demo25").innerHTML = "x5 is " + x4;









