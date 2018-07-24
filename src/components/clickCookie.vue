<template>
    <div id="scoreBoard">
        <h2>{{ scoreNumber }}</h2>
        <button @click="incrementScoreNumber">Click</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'

    export default {
        name: "clickCookie",
        computed: {
            ...mapGetters([
                'scoreNumber'
            ])
        },
        methods: {
            ...mapMutations([
                'incrementScoreNumber',
                'getCookieStatement',
                'autoIncrementScoreNumber'
            ])
        },
        mounted(){
            this.autoIncrementScoreNumber();
        }
    }
</script>

<style scoped>

</style>