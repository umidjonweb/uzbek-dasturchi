<template>
  <div class="home">
    <HelloWorld @handleClose="componentFunc" />
    <MainPage v-if="isbool" />
    <Footer v-if="isbool" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MainPage from "@/components/MainPage.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    MainPage,
    Footer,
  },
  data() {
    return {
      isbool: true,
    };
  },
  methods: {
    componentFunc() {
      this.isbool = !this.isbool;
      console.log(this.isClose);
    },
  },
};
</script>
