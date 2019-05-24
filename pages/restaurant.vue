<template>
  <div>
    <div v-if="markers.length>0" class="result">
      <div class="bv-example-row">
        <b-row>
          <b-col>
            <h1>Restaurant Search</h1>
            <b-form inline>
              <label class="sr-only" for="inline-form-input-username">Location</label>
              <b-input
                id="inline-form-input-name"
                v-model="location"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Bangsue"
              ></b-input>

              <b-button variant="primary" @click="calculate()">Search</b-button>
            </b-form>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card
              v-for="(item,index) in result"
              :title="item.name"
              :img-src="item.photos && item.photos[0]?'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCQWpAtVowR7C1BRlml8_LeRMWSpKUZ1HQ&maxwidth=300&maxheight=200&photoreference='+item.photos[0].photo_reference:''"
              :img-alt="item.name"
              img-top
              tag="article"
              class="mb-2"
              :key="index"
            >
              <b-card-text>
                <img class="icon" :src="item.icon">
                Rating {{item.rating}}
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="8">
            <GmapMap
              :center="center"
              :zoom="16"
              map-type-id="terrain"
              style="width: 100%; height: 100vh"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              />
            </GmapMap>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { getData, setData } from "nuxt-storage/local-storage";

export default {
  data: function() {
    return {
      searchResult: [],
      loading: false,
      markers: [
        { position: { lng: 10.2, lat: 10 } },
        { position: { lng: 10.1, lat: 10 } }
      ],
      location: "Bangsue",
      center: { lng: 10.2, lat: 10 },
      result: []
    };
  },
  methods: {
    calculate() {
      // console.log(value);
      this.searchRestaurant();
    },
    searchRestaurant() {
      if (this.location.length <= 0) return;
      this.loading = true;

      if (getData("location_" + this.location)) {
        this.markers = getData("location_" + this.location);
        return;
      }

      axios
        .get("http://localhost/public/search", {
          params: {
            location: this.location
          }
        })
        .then(response => {
          //   console.log(response.data);
          this.result = response.data;
          this.markers = response.data.map(value => {
            return {
              position: {
                lng: value.geometry.location.lng,
                lat: value.geometry.location.lat
              }
            };
          });
          setData("location_" + this.location, this.markers, 5, "d");
          this.center = this.markers[0].position;
          console.log(this.markers);
        })
        .then(() => {
          // always executed
          this.loading = false;
        });
    }
  }
};
</script>
<style scoped>
.result {
  padding: 15px 0px;
  margin-top: 30px;
}
h4.card-title {
  font-size: 1rem;
  font-weight: bold;
}
.icon {
  width: 18px;
}
</style>
