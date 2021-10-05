let randomNumber=new Array();
for(let i=0;i<10;i++){
    randomNumber.push(Math.floor(Math.random()*(999-100+1)+100));
}
console.log(randomNumber);
let max=Math.max.apply(null,randomNumber);
randomNumber.splice(randomNumber.indexOf(max),1)
console.log(Math.max.apply(null,randomNumber));

let min=Math.min.apply(null,randomNumber);
randomNumber.splice(randomNumber.indexOf(min),1)
console.log(Math.min.apply(null,randomNumber));

console.log(randomNumber);
