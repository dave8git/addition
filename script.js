function calculate() 
{
    var field1=parseFloat(document.getElementById("num1").value);
    var field2=parseFloat(document.getElementById("num2").value);
    console.log(num1);
    console.log(field1);
    var result=field1+field2;
    console.log(result);

    if(!isNaN(result)) {
        document.getElementById("answer").innerHTML="The answer is "+result;
    }
}