<template>
  <router-link :to="{ name: 'InputForm' }">
    <div class="content_btn">
      <p>Узнать тарифы</p>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 15C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17L4 15ZM28.7071 16.7071C29.0976 16.3166 29.0976 15.6834 28.7071 15.2929L22.3431 8.92893C21.9526 8.53841 21.3195 8.53841 20.9289 8.92893C20.5384 9.31946 20.5384 9.95262 20.9289 10.3431L26.5858 16L20.9289 21.6569C20.5384 22.0474 20.5384 22.6805 20.9289 23.0711C21.3195 23.4616 21.9526 23.4616 22.3431 23.0711L28.7071 16.7071ZM4 17L28 17V15L4 15L4 17Z"
          fill="#0F2756"
        />
      </svg>
    </div>
  </router-link>
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
a {
  width: 100%;
}
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
  &:hover {
    background: #0f2756;
    color: white;
    transition: all 0.3s;
    p {
      color: white;
    }
    svg {
      path {
        fill: #fff;
      }
    }
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