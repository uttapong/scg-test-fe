<template>
  <div class="text-center">
    <h1>Automatic Plant Watering System</h1>
    <img src="../assets/scg_line.png" class="diagram">
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
  }
};
</script>
<style scoped>
.result {
  padding: 15px 0px;
  margin-top: 30px;
}
.diagram {
  width: 564px;
  margin: 40px auto 20px auto;
}
.text-center {
  text-align: center;
}
</style>
