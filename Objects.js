//Deleting on object.....

var obj = {
    name:'Udhay',
    age:24
}

delete obj.age;

console.log(obj.name);


//Iteration for object....
var obj = {
    name:'udhay',
    age:24
  };
  
  for (var i in obj){
    console.log(i);
    console.log(obj[i]); //This line indicates the first iteration obj.name and obj.age is the second iteration....
    };


// How to see the Object length.....
    var details = {
        name:"udhay",
        age:24
    };
    
    console.log(Object.keys(details).length);


// Copy by reference using object.....

    var obj1 = {
        name:'Udhay',
        age:24
        };
        
        var obj2=obj1;
        obj2.name='Kumar'
        
        console.log(obj1);
        console.log(obj2);


     //   Copy by reference using array.....

var arr1 = [1,2,3,4];
var arr2;
arr2=arr1;
arr2.push(8);

console.log(arr1);
console.log(arr2);



// Copy by value.....
var a = 1;
var b = a;
b=2;

console.log(a);
console.log(b);


// JSON FROMAT...

var data = {
    "name":"udhay",
    "age":"24"
};
console.log(data.name);