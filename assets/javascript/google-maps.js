function initialize() {
    initMap_route1();
    initMap_route2();
    initMap_route3();
    initMap_marker();
    }


function initMap_route1() {    
    const map = new google.maps.Map(document.getElementById("map_route1"), {
        zoom: 3,
        center: { lat: 0, lng: -180 },
        mapTypeId: "terrain",
        disableDefaultUI: true,
    });

fetch('../assets/gpx/powerscourt.gpx')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        //.then(data => console.log(data))
        .then(doc =>
        {
            var points = [];
            var bounds = new google.maps.LatLngBounds();
        
            const nodes = [...doc.getElementsByTagName('trkpt')];
            nodes.forEach(node =>
            {
                var lat = node.getAttribute("lat");
                var lon = node.getAttribute("lon");
                //console.log(lat);
                
                var p = new google.maps.LatLng(lat, lon);
                points.push(p);
                bounds.extend(p);
            })
            
            var poly = new google.maps.Polyline({
                     path: points,
                     strokeColor: "#863B1D",
                     strokeOpacity: 1,
                     strokeWeight: 4
                });
                poly.setMap(map);
                // fit bounds to track
                map.fitBounds(bounds);
        })
}


function initMap_route2() {    
    const map = new google.maps.Map(document.getElementById("map_route2"), {
        zoom: 3,
        center: { lat: 0, lng: -180 },
        mapTypeId: "terrain",
        disableDefaultUI: true,
    });

fetch('../assets/gpx/djouce.gpx')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        //.then(data => console.log(data))
        .then(doc =>
        {
            var points = [];
            var bounds = new google.maps.LatLngBounds();
        
            const nodes = [...doc.getElementsByTagName('trkpt')];
            nodes.forEach(node =>
            {
                var lat = node.getAttribute("lat");
                var lon = node.getAttribute("lon");
                //console.log(lat);
                
                var p = new google.maps.LatLng(lat, lon);
                points.push(p);
                bounds.extend(p);
            })
            
            var poly = new google.maps.Polyline({
                     path: points,
                     strokeColor: "#863B1D",
                     strokeOpacity: 1,
                     strokeWeight: 4
                });
                poly.setMap(map);
                // fit bounds to track
                map.fitBounds(bounds);
        })
}

function initMap_route3() {    
    const map = new google.maps.Map(document.getElementById("map_route3"), {
        zoom: 3,
        center: { lat: 0, lng: -180 },
        mapTypeId: "terrain",
        disableDefaultUI: true,
    });

fetch('../assets/gpx/spinc.gpx')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        //.then(data => console.log(data))
        .then(doc =>
        {
            var points = [];
            var bounds = new google.maps.LatLngBounds();
        
            const nodes = [...doc.getElementsByTagName('trkpt')];
            nodes.forEach(node =>
            {
                var lat = node.getAttribute("lat");
                var lon = node.getAttribute("lon");
                //console.log(lat);
                
                var p = new google.maps.LatLng(lat, lon);
                points.push(p);
                bounds.extend(p);
            })
            
            var poly = new google.maps.Polyline({
                     path: points,
                     strokeColor: "#863B1D",
                     strokeOpacity: 1,
                     strokeWeight: 4
                });
                poly.setMap(map);
                // fit bounds to track
                map.fitBounds(bounds);
        })
}

 

function initMap_marker() {
const myLatLng = { lat: 53.17480482460448, lng: -6.292426127590039 };
const map = new google.maps.Map(document.getElementById("map_marker"), {
    zoom: 16,
    center: myLatLng,
    disableDefaultUI: true,
});

new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Wicklow Walking Tours",
});
}
