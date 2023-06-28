/*eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic3VubnlqaGEiLCJhIjoiY2xqYjNkcXdnMGlsYzNrbnRhMWRtZ2syaCJ9.azaAG3oD5JGDVer9cdRQDg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sunnyjha/cljbc8xy1003h01o4dmn8hcpq',
    scrollZoom: false,
    zoom: 7
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 10,
      focusAfterOpen: false
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
  // };
};

// console.log('hello from backend');

// pk.eyJ1Ijoic3VubnlqaGEiLCJhIjoiY2xqYjNkcXdnMGlsYzNrbnRhMWRtZ2syaCJ9.azaAG3oD5JGDVer9cdRQDg
//mapbox://styles/sunnyjha/cljbc8xy1003h01o4dmn8hcpq
