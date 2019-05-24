<template>
  <div>
    <h1>Series Calculator</h1>
    <b-form inline>
      <label
        class="sr-only"
        for="inline-form-input-username"
      >No. of result (eg. fill 2 to get 2 numbers)</label>
      <b-input
        id="inline-form-input-name"
        v-model="num"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="1"
      ></b-input>

      <b-button variant="primary" @click="calculate()">Calculate</b-button>
    </b-form>
    <div v-if="searchResult.length>0" class="result">{{searchResult}}</div>
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
      num: 1
    };
  },
  methods: {
    calculate() {
      // console.log(value);
      this.searchRestaurant();
    },
    searchRestaurant() {
      this.loading = true;
      // http://localhost/public/search?location=bangsue
      if (getData("count_" + this.num)) {
        this.searchResult = getData("count_" + this.num);
        return;
      }
      // http://localhost:8081/localhost/public/search?location=
      axios
        .get("http://localhost/public/polynomial", {
          params: {
            count: this.num
          }
        })
        .then(response => {
          this.searchResult = response.data;
          setData("count_" + this.num, response.data, 5, "d");
          // console.log(response.data);
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
</style>
