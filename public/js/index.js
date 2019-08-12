const lat= document.querySelector('.lat').textContent;
const long =document.querySelector('.long').textContent;
var zoom=10;
const plus=document.querySelector('.plus');
const min=document.querySelector('.min');
plus.addEventListener('click',()=>{
        var child = document.getElementById('mapContainer').lastElementChild;
    document.getElementById('mapContainer').removeChild(child);
    if(zoom<20){

    
        zoom++;
        map(zoom);
    }
})
min.addEventListener('click',()=>{
        var child = document.getElementById('mapContainer').lastElementChild;
    document.getElementById('mapContainer').removeChild(child);
    if(zoom>0){
        zoom--;
        map(zoom);
    }
    
})
var platform = new H.service.Platform({
    'apikey': 'j7938oxIpzgYUY4wRYARUVuKOd7fzUt3HqeU5I802ns'
    });
    

    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    const map=(zoom)=>{
        var map = new H.Map(
            document.getElementById('mapContainer'),
            maptypes.vector.normal.map,
            {
               zoom,
              center: { lng: lat, lat: long}
            });
                
    }
    map(zoom);
 
    