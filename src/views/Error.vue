<template>
  <div class="error">
    <HelloWorld />
    <div class="erors">
      <img src="@/assets/error.svg" alt="" />
      <h3>Эта страница была удалена или не существует.</h3>
      <router-link :to="{ name: 'home' }">Вернуться на главную</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "UzbDasturchiError",
  components: {
    HelloWorld,
    Footer,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" >
.error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .erors {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 40px;
    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      margin-top: 16px;
      margin-bottom: 66px;
      color: #484e65;
    }
    a {
      max-width: 306px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;
      width: 100%;
      background: linear-gradient(90deg, #ff842b 0%, #fe6915 100%);
      border-radius: 65px;
    }
  }
  .contact {
    display: none;
  }
  .email {
    display: none;
  }
}
</style>