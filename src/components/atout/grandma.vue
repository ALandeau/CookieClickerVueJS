<template>
    <div id="atout-grandma" class="atout-element">
        <div v-if="$store.state.scoreNumber >= grandmaPrice" @click="grandmaInteract" class="add-element enable">
            <div class="element-image"><img src="../../assets/images/grandma.png" alt=""></div>
            <div class="element-wrapper">
                <h3 class="element-label">Grand-mère</h3>
                <div class="element-price">
                    <p class="image-center"><img src="../../assets/images/perfectCookie.png"></p>
                    <p class="price-enable">{{ grandmaPrice }}</p>
                </div>
            </div>
            <div class="element-count"><p>{{ grandmaNumber }}</p></div>
        </div>
        <div v-else class="add-element disable">
            <div class="element-image"><img src="../../assets/images/grandma.png" alt=""></div>
            <div class="element-wrapper">
                <h3 class="element-label">Grand-mère</h3>
                <div class="element-price">
                    <p class="image-center"><img src="../../assets/images/perfectCookie.png"></p>
                    <p class="price-disable">{{ grandmaPrice }}</p>
                </div>
            </div>
            <div class="element-count"><p>{{ grandmaNumber }}</p></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "atoutGrandma",
  computed: {
    ...mapGetters("atoutStore", ["grandmaNumber", "grandmaPrice"])
  },
  methods: {
    ...mapMutations(["grandmaInteract"])
  }
};
</script>

<style lang="scss" scoped>
</style>
