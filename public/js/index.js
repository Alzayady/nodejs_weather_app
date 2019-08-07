const lat= document.querySelector('.lat').textContent;
const long =document.querySelector('.long').textContent;


var platform = new H.service.Platform({
    'apikey': 'j7938oxIpzgYUY4wRYARUVuKOd7fzUt3HqeU5I802ns'
    });

    // Obtain the default map types from the platform object
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
    map(11);
    