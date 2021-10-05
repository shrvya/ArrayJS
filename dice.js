const dictionary=new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]])
let check=1
while(check!=0)
{
    var random=Math.floor((Math.random()*6)+1);
    let val=dictionary.get(random)
    val++;
    dictionary.set(random,val)
   dictionary.forEach((value,key)=>
   {
       if(value==10)
       {
           console.log("dice rolled most is "+key);
           check=0;
       }
   })
    }

   
    var arr=new Array()
    dictionary.forEach((value,key)=>
    {
        arr.push(value)
    })
    var min = Math.min.apply( null, arr );
    console.log(min);
console.log(dictionary);