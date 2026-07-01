
function display() {
  var  honey = 'nayan mahato'
    console.log(honey);
    
}
display() 

const honey = 10
const sunny = "11"
console.log(sunny+(honey+15)); // here i should remeber to use its not concate we can use ()  for high preiority
//when one number and one string plus its create string and its not adition or plus its string co

//hey listen just remember if use - or any other math related symbol than actually concat will not work 


// console.log("5"/2);

// let age = Number(prompt("What is Your Age"))
// console.log(age)

/*hey listen just remember when we use like convert string to number number to string  or any data type to a diff type we use 
that called type casting or type conversion  rember that
ex- */

// console.log(Number("50"))

//lets do swap
let a = 10 
let b = 30
let c = a
a= b
b = c


 console.log(a);
 console.log(b)


 let m = 22;
 let n = 33;
 [m,n]=[n,m]
 console.log(m);
 console.log(n);



//  let i = 5
//  let j = 10
//  console.log(i-j); 

 console.log(2%7);
 console.log(Math.floor(2/7));


 let p = 4565
 console.log(p/10);

 //relational operators

 console.log(10 !== 110); // JavaScript does not have a strict relational operator like >==; use >= which performs automatic type coercion.
 
console.log(12=='12');
console.log(12==='12');


 // && and || operators just try to understand

 console.log(10>6 && 6>7);
 console.log(10>6 || 6>7);

 
 let i = 10
  console.log(i++);
  console.log(++i);
  
  
  let q =10
  let s =20
  let t  = q +s + q++ + s++ + ++q + ++s

  console.log(q);
  console.log(s);
  console.log(t);
  
  let voki = true
  console.log(++voki);
  
  let bunny = 10
   console.log(++bunny);

   let huggy = 10
   // console.log(++(huggy++)); // This causes: SyntaxError: Invalid left-hand side expression in prefix operation
   
   console.log(Math.round(10.49999999999999))
   
   console.log(Math.trunc(12.658484)) 
   console.log(Math.pow(10,5)) 
 
 console.log(Math.sqrt(25));

 console.log(Math.cbrt(8)); // Returns 2
 console.log(Math.cbrt(27)); // Returns 3
 console.log(Math.cbrt(-64)); // Returns -4 


 console.log(Math.abs(-45));
  // hey this actually used for negative number to positive number
 console.log(Math.max(2,3,4,5,6,7,8,9,10,20));
 console.log(Math.min(2,3,4,5,6,7,8,9,10,20));
 console.log(Math.floor(Math.random()*9000)+1000);
 console.log(Math.floor(Math.random()*(999999-100000+1)+100000))


//formula  * (max-min+1) + min

 
 let l = 8
 let w = 4
 console.log(8*4);
 console.log(2*(8+4));
 

 let u =10
 let r =8
 let h = 6
 //herons formula of trainagle
 let sm = (u+r+h)/2

 console.log(Math.sqrt(sm*(sm-u)*(sm-r)*(sm-h)));


 let rb = 4
 console.log(Number((2*Math.PI*rb).toFixed(2)));
  

 