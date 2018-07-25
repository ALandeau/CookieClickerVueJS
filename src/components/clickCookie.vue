<template>
    <div id="scoreBoard">
        <h2>{{ scoreNumber | round }}</h2>
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
        },
        filters: {
            round: function (value) {
                value = parseFloat(value);
                return value.toFixed(0);
            }
        }
    }
</script>

<style scoped>

</style>