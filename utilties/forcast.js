const request=require('request');

const forcast=({lat,long}={},func)=>{
     const url='https://api.darksky.net/forecast/69d686dc89087b3f364c29111e8df650/'+long+','+lat + '?units=si';
     request({url,json:true},(error,{body}={})=>{
         const ret={};
         if(error){
             ret.error="404 Error can't access to server";
             return func(ret);
            // return res.send("Error");
         }
         if(body.error){
             ret.error=body.error;
            return  func(ret);
             //return res.send(body.error);
         }
        
           ret.ress=body;
           return  func(ret);
         
      
        })

}
module.exports=forcast; 