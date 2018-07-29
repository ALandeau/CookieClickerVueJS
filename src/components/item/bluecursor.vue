<template>
    <div id="item-bluecursor" class="item-element">
        <div v-if="$store.state.scoreNumber >= bluePrice && blueNumber < 2" @click="bluecursorInteract" class="add-element enable">
            <div class="element-image"><img src="../../assets/images/bluecursor.png" alt="blue cursor"></div>
            <div class="element-wrapper">
                <div class="element-price">
                    <p class="image-center"><img src="../../assets/images/perfectCookie.png"></p>
                    <p class="price-enable">{{ bluePrice }}</p>
                </div>
            </div>
        </div>
        <div v-else-if="blueNumber === 2" class="add-element disable">
            <div class="element-image"><img src="../../assets/images/bluecursor.png" alt="blue cursor"></div>
        </div>
        <div v-else-if="$store.state.scoreNumber < bluePrice && blueNumber < 2" class="add-element disable">
            <div class="element-image"><img src="../../assets/images/bluecursor_disable.png" alt="blue cursor disable"></div>
            <div class="element-wrapper">
                <div class="element-price">
                    <p class="image-center"><img src="../../assets/images/perfectCookie.png"></p>
                    <p class="price-disable">{{ bluePrice }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "bluecursor",
  computed: {
    ...mapGetters("itemStore", ["blueNumber", "bluePrice"])
  },
  methods: {
    ...mapMutations(["bluecursorInteract"])
  }
};
</script>

<style lang="scss" scoped>
</style>
