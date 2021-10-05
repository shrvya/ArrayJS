dict={}
var month=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
var year=['1992','1993']
for(let people=0;people<50;people++)
{
      var ranmonth=Math.floor(Math.random()*12)
      var ranyear=Math.floor(Math.random()*2)
      dict["Person"+people]=month[ranmonth]+" "+year[ranyear];

}
var months=process.argv[2];
function perso(months){
     //console.log((mon));
        for(key in dict)
        {
            //console.log("========");
            var dictmon=dict[key].split(" ")
            //console.log(dictmon[0])
            if(dictmon[0]==months)
            {
                console.log(key+" born on "+dict[key]);
            }
        }
    }
   
perso(months)
//console.log(dict);