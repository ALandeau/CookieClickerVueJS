<template>
    <div id="item">
        <div class="show-number-atout"></div>
        <bluecursor/>
    </div>
</template>

<script>
import Bluecursor from "./item/bluecursor";
export default {
  name: "itemCookie",
  components: { Bluecursor }
};
</script>

<style lang="scss">
#item {
  grid-area: item;
  display: flex;
  flex-flow: row nowrap;

  .show-number-atout {
    flex: 1;
  }

  .item-element {
    width: 80px;
    background-color: rgba(255, 255, 242, 0.5);
    border-left: solid #ce6d39 5px;

    padding: 40px 0 0;

    .add-element {
      margin: 0 0 10px;
      .element-image {
        img {
          max-width: 30px;
          max-height: 30px;
        }
      }

      .element-wrapper {
        grid-area: att-wrapper;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
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

      &.enable {
        cursor: pointer;
      }
    }
  }
}
</style>
