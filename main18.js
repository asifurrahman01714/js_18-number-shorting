



var numbers=[45,20,30,36,1,5];
document.write("Number  : "+numbers +"<br/>");
var numbersShorted=numbers.sort(function(a,b){
    return a-b;
 });
 document.write("Number shorting : "+numbersShorted+"<br/>");
 var numbersShorted=numbers.sort(function(a,b){
    return b-a;
 });
 document.write("Number reversing : "+numbers);