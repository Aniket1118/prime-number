//program to check whether the number is prime or not


var num = parseInt(prompt("Enter your number"));//enter a number from the user
for(i=2;i<num;i++) {
 if(num%i==0){
     
     alert("oops! this is not prime try next")
     break;
 }   
 else{
     alert("hurray!this is prime")
     break;
 }
}