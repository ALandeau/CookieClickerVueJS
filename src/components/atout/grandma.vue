<template>
    <div id="atoutGrandma">
        <p>Nombre de grand-mère: {{ grandmaNumber }}</p>
        <button @click="incrementGrandmaNumber">Ajout d'une mamie</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'

    export default {
        name: "atoutGrandma",
        computed: {
            ...mapGetters('atoutStore', [
                'grandmaNumber'
            ])
        },
        methods: {
            ...mapMutations('atoutStore', [
                'incrementGrandmaNumber',
            ])
        }
    }
</script>

<style scoped>

</style>