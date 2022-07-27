<template>
  <div class="wrapper">
    <div id="contact" class="contact">
      <div class="container">
        <h1>Контакты</h1>
        <div class="contact_inner">
          <div class="inner">
            <img src="@/assets/tg.svg" alt="" />
            <div class="username">
              <a target="_blank" href="https://t.me/TatianaMichurina" class="h1"
                >@TatianaMichurina</a
              >
              <h3>Татьяна</h3>
            </div>
          </div>
          <div class="inner">
            <img src="@/assets/tg.svg" alt="" />
            <div class="username">
              <a target="_blank" class="h1" href="https://t.me/katesmsmads"
                >@@katesmsads</a
              >
              <h3>Екатерина</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="email">
      <div class="container">
        <h2>По вопросам сотрудничества</h2>
        <div class="email_content">
          <div class="email_content_box">
            <p>Стать нашим клиентом:</p>
            <div class="icon">
              <img src="@/assets/email.svg" alt="" />
              <a target="_blank" href="mailto:sales@smsads.ru"
                >sales@smsads.ru</a
              >
            </div>
          </div>
          <div class="email_content_box1">
            <p>По общим вопросам:</p>
            <div class="icon">
              <img src="@/assets/email.svg" alt="" />
              <a target="_blank" href="mailto:info@smsads.ru">info@smsads.ru</a>
            </div>
          </div>
          <div class="email_content_box2">
            <p>
              Предложить альтернативные каналы коммуникации нам и нашим
              клиентам:
            </p>
            <div class="icon">
              <img src="@/assets/email.svg" alt="" />
              <a target="_blank" href="mailto:partner@smsads.ru"
                >partner@smsads.ru</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="footer_icons">
          <router-link :to="{ name: 'home' }">
            <img src="@/assets/logo.svg" alt="" />
          </router-link>
          <router-link :to="{ name: 'Error' }">
            <img src="@/assets/logo2.svg" alt="" />
          </router-link>
          <a
            target="_black"
            href="https://devtek.io/
          "
          >
            <img src="@/assets/logo3.svg" alt="" />
          </a>
        </div>
        <div class="footer_link">
          <div class="footer_left">
            <router-link :to="{ name: 'Error' }"
              >Политика обработки персональных данных</router-link
            >
            <router-link :to="{ name: 'Error' }"
              >Партнерское соглашение</router-link
            >
          </div>
          <div class="footer_rigth">
            <img src="@/assets/f1.svg" alt="" />

            <div class="text">
              ИП Мичурина Т. Ю. является оператором персональных данных (приказ
              № 237 от 21.12.2020)
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <p>© 2022. ИП Мичурина Т. Ю. Все права на сайт защищены</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UzbDasturchiFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1300px;
  margin: 0px auto;
  width: 100%;
  padding: 0px 15px;
}
.wrapper {
  .contact {
    margin-top: 140px;
    .container {
      margin: 0 auto;
      // padding-left: 9%;
      h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: #0f2756;
        margin-bottom: 60px;
      }
      .contact_inner {
        display: flex;
        align-items: center;
        gap: 66px;
        .inner {
          display: flex;

          align-items: flex-start;
          gap: 16px;
          .username {
            transition: all 0.3s;
            .h1 {
              font-family: "Inter";
              font-style: normal;
              font-weight: 500;
              font-size: 28px;
              line-height: 140%;
              color: #484e65;
              margin-bottom: 0;
            }
            h3 {
              font-family: "Inter";
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 140%;
              color: #484e65;
              margin-top: 13px;
            }
            &:hover {
              a {
                color: #8b8e97;
              }
            }
          }
        }
      }
    }
    @media (max-width: 768px) {
      margin-top: 90px;
      .container h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 140%;
      }
      .container {
        padding-left: 3%;
      }
      .container .contact_inner {
        gap: 30px;
      }
      .container .contact_inner .inner .username .h1 {
        font-weight: 500;
        font-size: 22px;
        line-height: 140%;
      }
      .container .contact_inner {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  .email {
    margin-top: 130px;
    .container {
      // padding-left: 9%;
      h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: #0f2756;
        margin-bottom: 44px;
      }
      .email_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .email_content_box {
          padding-right: 40px;
          border-right: 1px solid #cfd7e7;
          p {
            font-family: "Noto Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #0f2756;
          }
          .icon {
            margin-top: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            a {
              font-family: "Noto Sans";
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 150%;

              color: #fb6b1a;
            }
            &:hover {
              a {
                background: linear-gradient(90deg, #ff9d0a 0%, #ff792d 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
            }
          }
        }
        .email_content_box1 {
          padding-right: 40px;
          border-right: 1px solid #cfd7e7;
          p {
            font-family: "Noto Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #0f2756;
          }
          .icon {
            margin-top: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            a {
              font-family: "Noto Sans";
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 150%;

              color: #fb6b1a;
            }
            &:hover {
              a {
                background: linear-gradient(90deg, #ff9d0a 0%, #ff792d 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
            }
          }
        }
        .email_content_box2 {
          p {
            font-family: "Noto Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #0f2756;
          }
          .icon {
            margin-top: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            a {
              font-family: "Noto Sans";
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 150%;

              color: #fb6b1a;
            }
            &:hover {
              a {
                background: linear-gradient(90deg, #ff9d0a 0%, #ff792d 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
            }
          }
        }
      }
    }
    @media (max-width: 768px) {
      .container {
        padding-left: 3%;
        h2 {
          font-style: normal;
          font-weight: 500;
          font-size: 28px;
          line-height: 140%;
          margin-bottom: 15px;
        }
        .email_content {
          flex-direction: column;
          //  .icon {
          //    margin-bottom: 11px;
          //  }
          .email_content_box {
            margin-bottom: 5px;
            padding-bottom: 11px;
            width: 100%;
            border-bottom: 1px solid #cfd7e7;
            border-right: none;
          }
          .email_content_box1 {
            margin-bottom: 5px;
            padding-bottom: 11px;
            width: 100%;
            border-bottom: 1px solid #cfd7e7;
            border-right: none;
          }
          .email_content_box2 {
            margin-bottom: 5px;
            padding-bottom: 11px;
            width: 100%;
            border-bottom: 1px solid #cfd7e7;
            border-right: none;
          }
        }
      }
    }
  }
  .footer {
    margin-top: 130px;
    padding: 56px 0;

    background: #fbfbfb;
    .container {
      // padding-left: 9%;
      .footer_icons {
        display: flex;
        align-items: center;
        gap: 34px;
      }
      .footer_link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 40px 0;

        .footer_left {
          display: flex;
          flex-direction: column; /* identical to box height, or 17px */
          a {
            font-family: "Inter";
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 140%;
            margin-top: 8px;
            text-decoration-line: underline;
            color: #484e65;
          }
        }
        .footer_rigth {
          display: flex;
          align-items: center;
          gap: 15px;
          width: 50%;
          .text {
            width: 80%;
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #0f2756;
          }
        }
      }
      .footer_bottom {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        color: #484e65;
      }
    }
    @media (max-width: 768px) {
      .container {
        padding-left: 3%;
      }
      .container .footer_link {
        flex-direction: column;
        align-items: flex-start;
        .footer_left {
          width: 100%;
        }
        .footer_rigth {
          margin-top: 20px;
          width: 100%;
        }
      }
    }
    @media (max-width: 500px) {
      .container .footer_icons {
        gap: 20px;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}
</style>