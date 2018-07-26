<template>
  <div id="app">

    <!-- TODO: component clickCookie (no children) -->
    <click-cookie/>
    <!---->

    <!--TODO: component itemCookie (no children)-->
    <item-cookie/>
    <!---->

    <!-- TODO: component atoutCookie (cursor, grandma) -->
    <atout-cookie/>
    <!---->

  </div>
</template>

<script>
import ClickCookie from "./components/clickCookie";
import AtoutCookie from "./components/atoutCookie";
import { atout } from './store'
import { mapGetters } from 'vuex'
import ItemCookie from "./components/itemCookie";

export default {
    name: 'app',
    components: {
        ItemCookie,
        AtoutCookie,
        ClickCookie,
    },
    computed: {
        ...mapGetters([
            'scoreNumber'
        ]),
    },
}
</script>

<style lang="scss">

  @import "assets/scss/reset.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100vw; height: 100vh;

    background: url("assets/images/retina_wood.png") repeat, rgba(255, 255, 242, 0.7);
    background-blend-mode: overlay;
    background-size: auto;

    display: grid;
    grid-template-columns: 20% 1fr;
    grid-template-rows: 65% 1fr;
    grid-template-areas: "score item"
                         "score atout";
  }
</style>
