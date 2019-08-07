const request=require('request');

const geocode=(name,func)=>{
    
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(name)+'.json?access_token=pk.eyJ1IjoiYWhtZWRhbHpheWFkeSIsImEiOiJjanllZjV6eXQwMGp0M2lxaWVmczJkeHcxIn0.R1rX7zICiGCEEEI-dlHZiQ&limit=1';
    request({url,json:true},(error,{body}={})=>{
        
      
        const ret={};
        if(error){
            ret.error="404 Error can't access to server";
            return func(ret);
        }
        
        if(body.message){
            ret.error=body.message;
            return func(ret);
        }
         
        if(body.features.length==0){
            ret.error="Wrong address Please Try again ";
            return func(ret);
        }
        
      
            ret.ress=body;
            return func(ret);
       

    })
}

module.exports=geocode;