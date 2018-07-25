<template>
    <div id="atoutGrandma">
        <p>Nombre de grand-mère: {{ grandmaNumber }}</p>
        <button v-if="$store.state.scoreNumber >= grandmaPrice" @click="grandmaInteract">Grand-Mère +1 ({{ grandmaPrice }})</button>
        <button v-else disabled>Grand-Mère +1 ({{ grandmaPrice }})</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'

    export default {
        name: "atoutGrandma",
        computed: {
            ...mapGetters('atoutStore', [
                'grandmaNumber',
                'grandmaPrice'
            ])
        },
        methods: {
            ...mapMutations([
                'grandmaInteract',
            ])
        }
    }
</script>

<style scoped>

</style>