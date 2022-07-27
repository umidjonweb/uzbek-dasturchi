<template>
  <div class="header__content">
    <div class="header">
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/logo.svg" alt="" />
        </router-link>
      </div>
      <div class="menu">
        <div class="nav">
          <a href="#statistik">Рассылки</a>
          <a href="#generation">Лидогенерация</a>
          <a href="#trafik">Монетизация трафика</a>
          <a href="#contact">Контакты</a>
        </div>
        <div class="head_btn">
          <CurrentColor />
          <div class="btn_right">
            <a href="#">Войти</a>
            <img src="@/assets/sign.svg" alt="" />
          </div>
          <div @click="isBurger" class="burger_menu">
            <img v-if="isClose" src="@/assets/burger.svg" alt="" />
            <img v-else src="@/assets/close.svg" alt="" />
          </div>
        </div>
      </div>
      <!-- <div class="exit"></div> -->
    </div>
    <div v-if="!isClose" class="header_bottom">
      <div class="header_bottom_title">
        <a href="#"> Рассылки </a>
        <a href="#"> Лидогенерация </a>
        <a href="#"> Монетизация трафика </a>
        <a href="#"> Контакты </a>
      </div>
      <div class="header_bottom_exit">
        <CurrentColor class="active" />
        <div class="btn_right">
          <a href="#">Войти</a>
          <img src="@/assets/sign.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentColor from "./CurrentSvg";
export default {
  name: "UzbDasturchiHelloWorld",
  components: {
    CurrentColor,
  },
  data() {
    return {
      isClose: true,
    };
  },

  mounted() {},

  methods: {
    isBurger() {
      this.isClose = !this.isClose;
      this.$emit("handleClose", this.isClose);
    },
  },
};
</script>

<style lang="scss" >
.header__content {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.07);
    .logo {
      cursor: pointer;
      padding-left: 20px;
    }
    .menu {
      display: flex;
    }
    .head_btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 58px;
      gap: 42px;
      .btn_left {
        cursor: pointer;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 197px;
        height: 44px;
        border: 1px solid #0f2756;
        border-radius: 65px;
        a {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 140%;
          color: #0f2756;
          transition: 0.3s;
        }
        &:hover {
          background: #0f2756;
          color: #ffffff;
          a {
            color: #ffffff;
          }
          svg {
            color: #ffffff;
          }
        }
      }
      .burger_menu {
        display: none;
      }
      .btn_right {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background: #b2bed2;
        border-radius: 60px 0px 0px 60px;
        height: 72px;
        width: 131px;
        img {
          cursor: pointer;
        }
        a {
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 140%;
          color: #ffffff;
          transition: 0.3s;
        }
        &:hover {
          background: #0f2756;
          color: #ffffff;
          a {
            color: #ffffff;
          }
        }
      }
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 44px;
      transition: 0.3s !important;
      a {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #0f2756;
        transition: 0.3s !important;
      }
    }
  }
  .header_bottom {
    display: none;
  }
  @media (max-width: 1225px) {
    .header {
      .head_btn {
        gap: 36px;
        padding-left: 41px;
      }
      .head_btn .btn_right {
        width: 111px;
      }
      .head_btn .btn_left {
        width: 180px;
        gap: 5px;
        a {
          font-size: 15px;
        }
      }
      .nav {
        gap: 33px;
        a {
          font-size: 15px;
        }
      }
      .logo img {
        width: 120px;
      }
    }
  }
  @media (max-width: 1060px) {
    .header {
      height: 65px;
      padding: 14px 0px;
      padding-right: 20px;

      .nav {
        display: none;
      }
      .head_btn .btn_right {
        display: none;
      }
      .head_btn .burger_menu {
        display: block;
      }
    }

    .header_bottom {
      display: flex;
      flex-direction: column;
      .header_bottom_title {
        padding-left: 35px;
        display: flex;
        flex-direction: column;
        height: 65vh;
        a {
          margin-top: 24px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 140%;
          color: #0f2756;
        }
      }
      .header_bottom_exit {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        align-items: center;
        .active {
          width: 345px;
          height: 72px;
          .btn_left {
            width: 100% !important;
            height: 100% !important;
          }
        }
        .btn_right {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          background: #b2bed2;
          border-radius: 60px;
          max-width: 345px;
          width: 100%;
          height: 72px;
          img {
            cursor: pointer;
          }
          a {
            font-family: "Noto Sans";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 140%;
            color: #ffffff;
            transition: 0.3s;
          }
          &:hover {
            background: #0f2756;
            color: #ffffff;
            a {
              color: #ffffff;
            }
          }
        }
      }
    }
  }
  @media (max-width: 485px) {
    .logo img {
      width: 103px !important;
    }
    .header_bottom {
      .header_bottom_title {
        a {
          font-weight: 500;
          font-size: 24px;
          line-height: 140%;
        }
      }
    }
    .header .head_btn {
      gap: 25px;
      padding-left: 25px;
    }
    .burger_menu {
      img {
        width: 30px;
      }
    }
  }
}
</style>