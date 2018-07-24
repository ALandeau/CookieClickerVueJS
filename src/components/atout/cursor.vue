<template>
    <div id="atoutCursor">
        <p>Nombre de curseur: {{ cursorNumber }}</p>
        <button @click="incrementCursorNumber">Ajout d'un curseur</button>
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
            ])
        },
        methods: {
            ...mapMutations('atoutStore', [
                'incrementCursorNumber',
            ])
        }
    }
</script>

<style scoped>

</style>