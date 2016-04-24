var map;
function initMap() {
  // Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        { visibility: "on" },
        { color: "#303168" }
      ]
    },{
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
            {visibility: "on" },
            {color: "#3E3F76" },
            {lightness: 50 }
      ]
    }
    ,{
      featureType: "administrative.neighborhood",
      elementType: "geometry.fill",
      stylers: [
        { visibility: "on" }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { visibility: "simplified" },
        { color: "#E94B87" },
        { lightness: 50 }
      ]
    },{
      featureType: "poi",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "road",
      elementType: "labels.text",
      stylers: [
        { color: "#3E3F76" },
        { visibility: "on" },
        { weight: 0.7 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels.text",
      stylers: [
          { visibility: "simplified" },
          { color: "#ffffff" },
          { weight: 0.1 }
      ]
    },{
      featureType: "administrative.neighborhood",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        { color: "#303168" },
        { visibility: "on" }
      ]
    },{
      featureType: "poi.business",
      stylers: [
        { visibility: "on" }
      ]
    },{
      featureType: "transit.station",
      elementType: "labels.text",
      stylers: [
        { visibility: "simplified" },
        {weight: 0.1 },
        { lightness: 11 },
        { color: "#ffffff" }
      ]
    },{
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
            {visibility: "on" },
            {saturation: 2 },
            {color: "#E94B87" },
            {lightness: 50 }
      ]
    }
    ,{
      featureType: "transit.line",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "landscape.natural",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "landscape.natural.landcover",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "landscape.natural.terrain",
      stylers: [
        { visibility: "off" }
      ]
  },{
      featureType: "transit.station.airport",
      stylers: [
        {visibility: "off" }
      ]
    },{
      featureType: "administrative.land_parcel",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.6464218, lng: -79.3958105},
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 17
  });
    
map.setOptions({
    scrollwheel:false
})

  var marker = new google.maps.Marker({
      position: {lat: 43.6464218, lng: -79.3958105},
      map: map,
      title: 'Rediscover'
  });
    
    
}
