import Leaflet from "leaflet";

export const defaultIcon = Leaflet.icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // size of the shadow
  popupAnchor: [1, -34], // point of the icon which will correspond to marker's location
  tooltipAnchor: [16, -28], // the same for the shadow
  shadowSize: [41, 41] // point from which the popup should open relative to the iconAnchor
});

export const singaporeCenterCoords = [1.300270, 103.851959];

// const maxNorthWest = Leaflet.latLng(1.4574119, 103.9598659);
// const maxSouthWest = Leaflet.latLng(1.2962063, 103.788705);
// const singaporeBounds = Leaflet.bounds(maxNorthWest, maxSouthWest);
