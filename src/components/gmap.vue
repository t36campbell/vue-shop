<template>
  <div class="site-section">
    <b-container fluid>
      <div class="row mb-5">
        <div class="col-12">
          <h3 class="section-sub-title text-center">Store Locater</h3>
          <h2 class="section-title text-center mb-3">Find Nearest Location</h2>
        </div>
      </div>
      <div class="card rounded-0 border-dark">
        <div class="row no-gutters align-items-start my-0 py-0">
          <div class="col-12 my-0 py-0">
            <gmap-map
              :center="center"
              :zoom="zoom"
              class="card-img rounded-0"
              style="width:100%;  height: 600px"
            >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :icon="m.icon"
                @click="center=m.position, zoom=9"
              ></gmap-marker>
            </gmap-map>
          </div>
        </div>
        <br />
        <div class="row no-gutters align-items-start my-0 py-0">
          <div class="col-12 text-center mb-3">
            <div class="mx-auto row form-group justify-content-center">
              <gmap-autocomplete
                class="col-md-6 text-black form-control rounded-0"
                @place_changed="[setPlace($event), addMarker($event)]"
              ></gmap-autocomplete>
            </div>
            <div class="mx-auto row form-group justify-content-center">
              <b-button
                class="col-md-3 btn btn-dark mx-1 rounded-0"
                @click="addMarker"
              >Add Location</b-button>
              <br />
              <b-button
                class="col-md-3 btn btn-dark mx-1 rounded-0"
                @click="geolocate"
              >Search Using My Location</b-button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <b-card-group deck v-if="currentPlace">
        <b-card no-body class="border-dark">
          <b-row no-gutters>
            <b-col>
              <b-card-body
                title="Los Angeles, CA"
                class="card-title text-black mb-4 text-center"
              >
                <b-row no-gutters>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Address:</u></b-card-text>
                    <b-card-text>1234 Hollywood Boulevard</b-card-text>
                    <b-card-text>Los Angeles, CA 90028</b-card-text>
                  </b-col>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Hours:</u></b-card-text>
                    <b-card-text>Monday - Saturday: 8am – 8pm</b-card-text>
                    <b-card-text>Sunday: 9am – 6pm</b-card-text>
                  </b-col>
                </b-row>
                <b-button
                  class="col-md-12 btn btn-dark mt-8 rounded-0"
                  @click="center={ lat: 34.1015088, lng: -118.333556 },
                  currentPlace={ lat: 34.1015088, lng: -118.333556 }"
                >Show on Map</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="border-dark">
          <b-row no-gutters>
            <b-col>
              <b-card-body
                title="Maimi, FL"
                class="card-title text-black mb-4 text-center"
              >
                <b-row no-gutters>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Address:</u></b-card-text>
                    <b-card-text>1234 S.Miami Avenue</b-card-text>
                      <b-card-text>Maimi, FL 33130</b-card-text>
                  </b-col>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Hours:</u></b-card-text>
                    <b-card-text>Monday - Saturday: 8am – 8pm</b-card-text>
                    <b-card-text>Sunday: 9am – 6pm</b-card-text>
                  </b-col>
                </b-row>
                <b-button
                  class="col-md-12 btn btn-dark mt-8 rounded-0"
                  @click="center={ lat: 25.7620955, lng: -80.1932258 },
                  currentPlace={ lat: 25.7620955, lng: -80.1932258 }"
                >Show on Map</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
      <br />
      <b-card-group deck v-if="currentPlace">
        <b-card no-body class="border-dark">
          <b-row no-gutters>
            <b-col>
              <b-card-body
                title="Minneapolis, MN"
                class="card-title text-black mb-4 text-center"
              >
                <b-row no-gutters>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Address:</u></b-card-text>
                    <b-card-text>1234 S Washington Avenue</b-card-text>
                      <b-card-text>Minneapolis, MN 55454</b-card-text>
                  </b-col>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Hours:</u></b-card-text>
                    <b-card-text>Monday - Saturday: 8am – 8pm</b-card-text>
                    <b-card-text>Sunday: 9am – 6pm</b-card-text>
                  </b-col>
                </b-row>
                <b-button
                  class="col-md-12 btn btn-dark mt-8 rounded-0"
                  @click="center={ lat: 44.9750472, lng: -93.2503777 },
                  currentPlace={ lat: 44.9750472, lng: -93.2503777 }"
                >Show on Map</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="border-dark">
          <b-row no-gutters>
            <b-col>
              <b-card-body
                title="New York, NY"
                class="card-title text-black mb-4 text-center"
              >
                <b-row no-gutters>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Address:</u></b-card-text>
                    <b-card-text>1234 Wall Street</b-card-text>
                      <b-card-text>New York, NY 10038</b-card-text>
                  </b-col>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Hours:</u></b-card-text>
                    <b-card-text>Monday - Saturday: 8am – 8pm</b-card-text>
                    <b-card-text>Sunday: 9am – 6pm</b-card-text>
                  </b-col>
                </b-row>
                <b-button
                  class="col-md-12 btn btn-dark mt-8 rounded-0"
                  @click="center={ lat: 40.7060361, lng: -74.0088256 },
                  currentPlace={ lat: 40.7060361, lng: -74.0088256 }"
                >Show on Map</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
      <br />
      <b-card-group deck v-if="currentPlace">
        <b-card no-body class="border-dark">
          <b-row no-gutters>
            <b-col>
              <b-card-body
                title="Dallas, TX"
                class="card-title text-black mb-4 text-center"
              >
                <b-row no-gutters>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Address:</u></b-card-text>
                    <b-card-text>1234 Commerce Street</b-card-text>
                      <b-card-text>Dallas, TX 75202</b-card-text>
                  </b-col>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Hours:</u></b-card-text>
                    <b-card-text>Monday - Saturday: 8am – 8pm</b-card-text>
                    <b-card-text>Sunday: 9am – 6pm</b-card-text>
                  </b-col>
                </b-row>
                <b-button
                  class="col-md-12 btn btn-dark mt-8 rounded-0"
                  @click="center={ lat: 32.7793704, lng: -96.8008565 },
                  currentPlace={ lat: 32.7793704, lng: -96.8008565 }"
                >Show on Map</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="border-dark">
          <b-row no-gutters>
            <b-col>
              <b-card-body
                title="Seattle, WA"
                class="card-title text-black mb-4 text-center"
              >
                <b-row no-gutters>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Address:</u></b-card-text>
                    <b-card-text>1234 Broad Street</b-card-text>
                      <b-card-text>Seattle, WA 98121</b-card-text>
                  </b-col>
                  <b-col lg="6" class="text-left  mb-4">
                    <b-card-text><u>Hours:</u></b-card-text>
                    <b-card-text>Monday - Saturday: 8am – 8pm</b-card-text>
                    <b-card-text>Sunday: 9am – 6pm</b-card-text>
                  </b-col>
                </b-row>
                <b-button
                  class="col-md-12 btn btn-dark mt-8 rounded-0"
                  @click="center={ lat: 47.6172481, lng: -122.3520857 },
                  currentPlace={ lat: 47.6172481, lng: -122.3520857 }"
                >Show on Map</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'gmap',
  data() {
    return {
      isBig: true,
      zoom: 3,
      currentPlace: null,
      center: { lat: 39.8283, lng: -98.5795 },
      markers: [
        {
          position: { lat: 40.7060361, lng: -74.0088256 },
        },
        {
          position: { lat: 25.7620955, lng: -80.1932258 },
        },
        {
          position: { lat: 44.9750472, lng: -93.2503777 },
        },
        {
          position: { lat: 32.7793704, lng: -96.8008565 },
        },
        {
          position: { lat: 47.6172481, lng: -122.3520857 },
        },
        {
          position: { lat: 34.1015088, lng: -118.333556 },
        },
      ],
      places: [],
    };
  },
  mounted() {
    if (localStorage.isBig) this.isBig = JSON.parse(localStorage.isBig);
    if (localStorage.zoom) this.zoom = Number(localStorage.zoom);
    if (localStorage.getItem('currentPlace')) {
      try {
        this.currentPlace = JSON.parse(localStorage.getItem('currentPlace'));
      } catch (e) {
        localStorage.removeItem('currentPlace');
      }
    }
    if (localStorage.getItem('center')) {
      try {
        this.center = JSON.parse(localStorage.getItem('center'));
      } catch (e) {
        localStorage.removeItem('center');
      }
    }
    if (localStorage.getItem('places')) {
      try {
        const recents = JSON.parse(localStorage.getItem('places'));
        this.places = recents;
        this.markers.push(...recents);
      } catch (e) {
        localStorage.removeItem('places');
      }
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
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.currentPlace = marker;
        this.markers.push({ position: marker });
        this.places.push({ position: this.currentPlace });
        this.center = marker;
        this.zoom = 12;
        this.isBig = false;
        this.saveMap();
      }
    },
    geolocate() {
      const options = {
        maximumAge: 60000,
        timeout: 5000,
        enableHighAccuracy: true,
      };
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const marker = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.currentPlace = marker;
          this.markers.push({ position: marker });
          this.places.push({ position: this.currentPlace });
          this.center = marker;
          this.zoom = 12;
          this.isBig = false;
          this.saveMap();
        },
        (err) => {
          console.log(err);
        },
        options,
      );
    },
    saveMap() {
      localStorage.isBig = this.isBig;
      localStorage.zoom = this.zoom;
      localStorage.setItem('currentPlace', JSON.stringify(this.currentPlace));
      localStorage.setItem('center', JSON.stringify(this.center));
      const recentPlaces = JSON.stringify(
        this.places.slice(Math.max(this.places.length - 5, 0)),
      );
      localStorage.setItem('places', recentPlaces);
    },
  },
};
</script>
