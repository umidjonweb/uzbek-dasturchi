<template>
  <div class="content_btn">
    <p>Узнать тарифы</p>
    <img src="@/assets/next.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "UzbDasturchiTarifBtn",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.content_btn {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  width: 219px;
  height: 72px;
  border: 1px solid #b2bed2;
  border-radius: 39px;
  p {
    display: contents;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #0f2756;
  }
  @media (max-width: 576px) {
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 20px;
    max-width: 345px;
    width: 100%;
  }
}
</style>