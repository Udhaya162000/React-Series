/*console.log("Welcome to Node.js");


//Datatypes//

var a = 1; // Number Datatype//

var str = "String"; // String Datatype//

var bool = true; // boolean Datatype//

var arr=['1','2']; // object Datatype //

var obj={Name:'Udhay',age:24}; // object Datatype//

var empty = null; // object Datatype//

var nan = NaN; // Number Datatype//

var notDefined = undefined; // Undefined Datatype//

console.log(typeof(typeof(arr))); //---> typeof(typeof) The output of the inner function  will get input of outer function;//


/*Types of Datatype

1.In-Build Datatypes (Numbers, String, Boolean)
2.User-Definied Datatypes (Array, Object)
3.Trivial Datatypes (null, nan, undefined)*/


/*Week Datatype is JavaScript
Strong Datatype is Java*/




/* for loop

var arr = [1,2,"string",true,{name:'Udhay'},['Mon','Tues']];
	
	for (var i=0; i<arr.length; i++){
	  console.log(arr[i]);
	}



/*object

In JavaScript, an object is a standalone entity, with properties and type,
Access Value using Dot Operator,
Object is a Key Value pair
*/

/*var obj = {
    name:'Udhay',
    age:24,
    attendance:["Mon","Tues"],
    address:{
        street:'Kaveripattinam',
        area:'Jeeva Nagar',
        landmark:{
            house:'green',
            gate:'Brown'
        }
    },
    sum:(a,b) =>{
        return a+b;
    }

}
/*console.log(obj);
console.log(obj.age);
console.log(obj.address.landmark.house); //getting output for object in object
console.log(obj.attendance[1]); //getting output for array 2nd value


Loop Array inside the object
for(var i=0; i<obj.attendance.length;i++){
    console.log(obj.attendance[i]);
}*/



/*ARRAY OF OBJECTS

var arr = [
    {name:'Udhay', age:24},
    {name:'resh', age:73},
    {name:'selvam', age:29},
    {name:'ajith', age:94},
]
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
    console.log("Name is " + arr[i].name + " Age is " + arr[i].age);   
}
*/


//Splice;

var arr=[1,2,3,4,5];
arr.splice(3,2,'Uday','ran');
console.log(arr);



//Objects simple looping method

var obj = {
    name:'Udhay',
    age:24
  }
  
  for(var i in obj){
    console.log(obj[i]);
  }