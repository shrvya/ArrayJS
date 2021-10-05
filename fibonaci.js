
function fibonacci(num)
{
    var num1=0,num2=1,sum;
    for(let index =0;index<num;index++)
    {
        console.log(num1);
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }

}
fibonacci(6);
