<template>
    <div id="atoutCursor">
        <p>Nombre de curseur: {{ cursorNumber }}</p>
        <button v-if="$store.state.scoreNumber >= cursorPrice" @click="cursorInteract">Curseur +1 ({{ cursorPrice }})</button>
        <button v-else disabled>Curseur +1 ({{ cursorPrice }})</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'

    export default {
        name: "atoutCursor",
        computed: {
            ...mapGetters('atoutStore', [
                'cursorNumber',
                'cursorPrice'
            ])
        },
        methods: {
            ...mapMutations([
                'cursorInteract',
            ])
        }
    }
</script>

<style scoped>

</style>