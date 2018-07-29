<template>
    <div id="atout-cursor" class="atout-element">
        <div v-if="$store.state.scoreNumber >= cursorPrice" @click="cursorInteract" class="add-element enable">
            <div class="element-image"><img src="../../assets/images/cursor.png" alt=""></div>
            <div class="element-wrapper">
                <h3 class="element-label">Curseur</h3>
                <div class="element-price">
                    <p class="image-center"><img src="../../assets/images/perfectCookie.png"></p>
                    <p class="price-enable">{{ cursorPrice }}</p>
                </div>
            </div>
            <div class="element-count"><p>{{ cursorNumber }}</p></div>
        </div>
        <div v-else class="add-element disable">
            <div class="element-image"><img src="../../assets/images/cursor.png" alt=""></div>
            <div class="element-wrapper">
                <h3 class="element-label">Curseur</h3>
                <div class="element-price">
                    <p class="image-center"><img src="../../assets/images/perfectCookie.png"></p>
                    <p class="price-disable">{{ cursorPrice }}</p>
                </div>
            </div>
            <div class="element-count"><p>{{ cursorNumber }}</p></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "atoutCursor",
  computed: {
    ...mapGetters("atoutStore", ["cursorNumber", "cursorPrice"])
  },
  methods: {
    ...mapMutations(["cursorInteract"])
  }
};
</script>

<style lang="scss" scoped>
</style>
