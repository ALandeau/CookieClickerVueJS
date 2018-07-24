<template>
  <div id="app">
    <button @click="reset">Reset Value</button>

    <!-- TODO: component clickCookie (no children) -->
    <click-cookie/>
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

export default {
    name: 'app',
    components: {
        AtoutCookie,
        ClickCookie,
    },
    methods: {
        reset: function () {
            this.$cookie.set('score', 0);
            this.$cookie.set('grandma', 0);
            this.$cookie.set('cursor', 0);
        }
    },
    computed: {
        ...mapGetters([
            'scoreNumber'
        ]),
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
