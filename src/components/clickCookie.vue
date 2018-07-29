<template>
    <div id="score">
        <h2>{{ scoreNumber | round }}</h2>
        <div @click="incrementScoreNumber" class="input-block">
            <img src="../assets/images/perfectCookie.png" alt="perfect cookie">
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "clickCookie",
  computed: {
    ...mapGetters(["scoreNumber"])
  },
  methods: {
    ...mapMutations([
      "incrementScoreNumber",
      "getCookieStatement",
      "autoIncrementScoreNumber"
    ])
  },
  mounted() {
    this.autoIncrementScoreNumber();
  },
  filters: {
    round: function(value) {
      return parseFloat(value).toFixed(0);
    }
  }
};
</script>

<style lang="scss" scoped>
#score {
  grid-area: score;
  background: url("../assets/images/bg_cookie.png") repeat;
  background-size: auto auto;
  border-right: solid #ce6d39 10px;

  h2 {
    font: {
      size: 35pt;
      weight: 600;
    }
    background-color: #383a3f;
    color: #fff;
    padding: 10px 0;
    margin: 40px 0;
  }

  .input-block {
    cursor: pointer;
    img {
      transition: max-width ease-in 0.1s;
      max-height: 70%;
      max-width: 70%;
      &:active {
        max-height: 54%;
        max-width: 54%;
      }
    }
  }
}
</style>
