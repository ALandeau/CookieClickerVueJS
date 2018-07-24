<template>
    <div class="atout">

        <!-- TODO: component atout/cursor -->
        <atout-cursor/>
        <!---->

        <!--TODO: component atout/grandma-->
        <atout-grandma/>
        <!---->

    </div>
</template>

<script>
    import AtoutCursor from "./atout/cursor";
    import AtoutGrandma from "./atout/grandma";

    export default {
        name: "atoutCookie",
        components: {AtoutGrandma, AtoutCursor}
    }
</script>

<style scoped>

</style>