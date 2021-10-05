let randomNumber=new Array();
for(let i=0;i<10;i++){
    randomNumber.push(Math.floor(Math.random()*(999-100+1)+100));
}
randomNumber.sort()
console.log(randomNumber);
console.log(randomNumber.slice(1,2));
console.log(randomNumber.slice(9,10));