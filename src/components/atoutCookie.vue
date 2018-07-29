<template>
    <div id="atout">
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
  components: { AtoutGrandma, AtoutCursor }
};
</script>

<style lang="scss">
#atout {
  grid-area: atout;
  padding: 40px 0;
  background-color: #383a3f;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  .atout-element {
    display: flex;
    flex-flow: row nowrap;
    width: 300px;
    margin: 10px 10px;

    .add-element {
      display: grid;
      grid-template-areas: "att-image att-wrapper att-count";
      grid-template-columns: auto auto 1fr;
      width: 100%;

      .element-image {
        grid-area: att-image;
        img {
          height: 100%;
          object-fit: cover;
        }
      }

      .element-wrapper {
        grid-area: att-wrapper;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        padding-left: 5px;

        .element-label {
          font: {
            size: 18pt;
            weight: 900;
          }
          text: {
            transform: capitalize;
          }
          margin: 0 0 5px;
        }

        .element-price {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;

          p {
            font: {
              size: 10pt;
              weight: 900;
            }
          }

          .image-center {
            position: relative;
            padding-right: 20px;
            img {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              max-height: 15px;
              max-width: 15px;
            }
          }
          .price-enable {
            color: #27ae60;
          }
          .price-disable {
            color: #fab1a0;
          }
        }
      }

      .element-count {
        grid-area: att-count;
        position: relative;
        p {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 20px;
          font: {
            weight: 900;
            size: 15pt;
          }
          color: #ce6d39;
        }
      }

      &.enable {
        background-color: rgba(248, 242, 227, 1);
        cursor: pointer;
      }
      &.disable {
        background-color: rgba(248, 242, 227, 0.5);
      }
    }
  }
}
</style>
