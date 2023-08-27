import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { relais } from 'src/assets/files/relai';

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent {

  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  customIconUrl = '../assets/images/frontend/marker-icon.png';
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],

    zoom: 10,
    center: { lat: -21.1151, lng: 55.5364 }
  }

  initMap() {
    this.map = Leaflet.map('map', this.options);
  }

  initMarkers() {
    const initialMarkers = [];
    for (let i = 0; i < relais.length; i++) {
      const element = relais[i];
      initialMarkers.push({
        name: element.name,
        position: { lat: element.latitude, lng: element.longitude },
        draggable: true
      })
    }
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<span>${data.name}</span><b>${data.position.lat},  ${data.position.lng}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }
}
