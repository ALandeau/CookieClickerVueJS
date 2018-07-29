<template>
  <div id="app">
    <div class="wrapper">
      <!-- TODO: component clickCookie (no children) -->
      <click-cookie/>
      <!---->

      <!--TODO: component itemCookie (bluecursor)-->
      <item-cookie/>
      <!---->

      <!-- TODO: component atoutCookie (cursor, grandma) -->
      <atout-cookie/>
      <!---->
    </div>

  </div>
</template>

<script>
import ClickCookie from "./components/clickCookie";
import AtoutCookie from "./components/atoutCookie";
import { mapGetters } from "vuex";
import ItemCookie from "./components/itemCookie";

export default {
  name: "app",
  components: {
    ItemCookie,
    AtoutCookie,
    ClickCookie
  },
  computed: {
    ...mapGetters(["scoreNumber"])
  },
  mounted() {
    if (!this.$cookie.get("bluecursor")) this.$cookie.set("bluecursor", 1);
    if (!this.$cookie.get("grandma")) this.$cookie.set("grandma", 0);
    if (!this.$cookie.get("cursor")) this.$cookie.set("cursor", 0);
  }
};
</script>

<style lang="scss">
@import "assets/scss/reset.scss";

#app {
  position: relative;

  width: 100vw;
  height: 100vh;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-template-rows: 65% 1fr;
    grid-template-areas:
      "score item"
      "score atout";

    background: url("assets/images/retina_wood.png") repeat,
      rgba(255, 255, 242, 0.7);
    background-blend-mode: overlay;
    background-size: auto;
  }
}
</style>
