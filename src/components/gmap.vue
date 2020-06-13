<template>
  <div class="col-12">  
    <div class="row justify-content-center">
      <div :class="[ isBig ? 'col-12' : 'col-md-6 col-sm-12' ]">
        <br>
        <gmap-map :center="center" :zoom=zoom style="width:100%;  height: 500px">
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center=m.position"
            ></gmap-marker>
        </gmap-map>
      </div>
      <br>
      <div v-if="currentPlace" class="col-md-6 col-sm-12 text-justify">
          <br>
          <h4 class="text-black">Your location is:</h4>
          <p>{{ currentPlace.lat }}, {{ currentPlace.lng }}</p>
          <h4>Nearest Location</h4>
          <h6 class="text-black">Address</h6>
          <p>1234 Main St.</p>
          <p>Small-Town OH 45701</p>
          <h6 class="text-black">Hours</h6>
          <p>Monday - Friday</p>
          <p>9:00 AM - 5:30 PM</p>
          <h6 class="text-black">Phone</h6>
          <p>555.123.4567</p>
      </div>
    </div>
    <br>
    <div class="col-12 text-center mb3">
        <label>
            <gmap-autocomplete
              class="col-md-12 text-black"
              @place_changed="setPlace">
            </gmap-autocomplete>
        </label>  
        <b-button variant="dark" @click="addMarker">Add Location </b-button>
        <b-button variant="dark" @click="geolocate">Get Location</b-button>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'gmap',
  data() {
    return {
      isBig: true,
      center: { lat: 39.8283, lng: -98.5795 },
      markers: [
        { position: { lat: 40.7128, lng: -74.006 } },
        { position: { lat: 25.7617, lng: -80.1918 } },
        { position: { lat: 34.0522, lng: -118.2437 } },
        { position: { lat: 47.6062, lng: -122.3321 } }
      ],
      places: [],
      currentPlace: null,
      zoom: 3,
    }
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.currentPlace = marker
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.zoom = 12
        this.isBig = false
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        const marker = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.currentPlace = marker
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.zoom = 12
        this.isBig = false
      })
    }
  }
}
</script>