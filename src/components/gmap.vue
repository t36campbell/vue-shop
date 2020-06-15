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
              :clickable="true"
              @click="center=m.position, zoom=9"
            ></gmap-marker>
        </gmap-map>
      </div>
      <br>
      <div v-if="currentPlace" class="col-md-6 col-sm-12 text-justify">
          <br>
          <h4>Nearest Location</h4>
          <div role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.la variant="outline-dark">Los Angeles, CA</b-button>
              </b-card-header>
              <b-collapse id="la" visible accordion="locations" role="tabpanel">
                <b-card-body>
                  <b-card-text>1234 Hollywood Boulevard</b-card-text>
                  <b-card-text>Los Angeles, CA</b-card-text>
                  <b-link 
                    @click="center={ lat: 34.1015088, lng: -118.333556 }, 
                    currentPlace={ lat: 34.1015088, lng: -118.333556 }"
                  >Show on Map
                  </b-link>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.miami variant="outline-dark">Miami, FL</b-button>
              </b-card-header>
              <b-collapse id="miami" accordion="locations" role="tabpanel">
                <b-card-body>
                  <b-card-text>1234 S.Miami Avenue</b-card-text>
                  <b-card-text>Maimi, FL</b-card-text>
                  <b-link 
                    @click="center={ lat: 25.7620955, lng: -80.1932258 }, 
                    currentPlace={ lat: 25.7620955, lng: -80.1932258 }"
                  >Show on Map
                  </b-link>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.min variant="outline-dark"> Minneapolis, MN</b-button>
              </b-card-header>
              <b-collapse id="min" accordion="locations" role="tabpanel">
                <b-card-body>
                  <b-card-text>1234 S Washington Ave, Minneapolis, MN</b-card-text>
                  <b-card-text> Minneapolis, MN</b-card-text>
                  <b-link 
                    @click="center={ lat: 44.9750472, lng: -93.2503777 }, 
                    currentPlace={ lat: 44.9750472, lng: -93.2503777 }"
                  >Show on Map
                  </b-link>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.ny variant="outline-dark">New York, NY</b-button>
              </b-card-header>
              <b-collapse id="ny" accordion="locations" role="tabpanel">
                <b-card-body>
                  <b-card-text>1234 Wall Street</b-card-text>
                  <b-card-text>New York, NY</b-card-text>
                  <b-link 
                    @click="center={ lat: 40.7060361, lng: -74.0088256 }, 
                    currentPlace={ lat: 40.7060361, lng: -74.0088256 }"
                  >Show on Map
                  </b-link>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.dal variant="outline-dark">Dallas, TX</b-button>
              </b-card-header>
              <b-collapse id="dal" accordion="locations" role="tabpanel">
                <b-card-body>
                  <b-card-text>1234 Commerce Street</b-card-text>
                  <b-card-text>Dallas, TX</b-card-text>
                  <b-link 
                    @click="center={ lat: 32.7793704, lng: -96.8008565 }, 
                    currentPlace={ lat: 32.7793704, lng: -96.8008565 }"
                  >Show on Map
                  </b-link>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.seattle variant="outline-dark">Seattle, WA</b-button>
              </b-card-header>
              <b-collapse id="seattle" accordion="locations" role="tabpanel">
                <b-card-body>
                  <b-card-text>1234 Broad Street</b-card-text>
                  <b-card-text>Seattle, WA</b-card-text>
                  <b-link 
                    @click="center={ lat: 47.6172481, lng: -122.3520857 }, 
                    currentPlace={ lat: 47.6172481, lng: -122.3520857 }"
                  >Show on Map
                  </b-link>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
      </div>
    </div>
    <br>
    <div class="col-12 text-center mb3">
        <label>
            <gmap-autocomplete
              class="col-md-12 text-black"
              @place_changed="[setPlace($event), addMarker($event)]">
            </gmap-autocomplete>
        </label>  
        <b-button variant="dark" @click="addMarker">Add Location</b-button>
        <b-button variant="dark" @click="geolocate">Search Using My Location</b-button>
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
        { position: { lat: 40.7060361, lng: -74.0088256 } },
        { position: { lat: 25.7620955, lng: -80.1932258 } },
        { position: { lat: 44.9750472, lng: -93.2503777 } },
        { position: { lat: 32.7793704, lng: -96.8008565 } },
        { position: { lat: 47.6172481, lng: -122.3520857 } },
        { position: { lat: 34.1015088, lng: -118.333556 } },
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