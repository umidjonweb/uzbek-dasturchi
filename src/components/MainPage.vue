<template>
  <div>
    <div class="main">
      <div class="container">
        <div class="main_gallery">
          <img src="@/assets/main.png" alt="" />
        </div>
        <div class="main_content">
          <h1>Ваш способ связи с клиентами</h1>
          <div class="icons">
            <img src="@/assets/main.svg" alt="" />
            <img src="@/assets/main2.svg" alt="" />
            <img src="@/assets/main3.svg" alt="" />
            <img src="@/assets/main4.svg" alt="" />
          </div>
          <p>Cпециализируемся на займовом трафике.</p>
          <router-link :to="{ name: 'InputForm' }"> Подключиться </router-link>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="container">
        <div class="about_left">
          <p>
            Мы предлагаем инструменты, которые
            <strong>
              надежно работают, обладают разнообразным функционалом и просты в
              обращении.
            </strong>
          </p>
          <div class="content">
            <div class="content_item">
              <h2>Наша цель:</h2>
              <h3>
                Предоставить сервис качественной и эффективной коммуникации с
                вашими клиентами.
              </h3>
            </div>
            <TarifBtn />
            <!-- <div class="content_btn">
              <p>Узнать тарифы</p>
              <img src="@/assets/next.svg" alt="" />
            </div> -->
          </div>
        </div>
        <div class="about_right">
          <img src="@/assets/bg.png" alt="" />
        </div>
      </div>
    </div>
    <div id="statistik" class="statistik">
      <div class="container">
        <h1>Вы получаете:</h1>
        <div class="statistik_inner">
          <div class="statistik_left">
            <div class="statistik_box">
              <div class="statistik_info">
                <img src="@/assets/st1.svg" alt="" />
                <p>Статистика</p>
              </div>
              <div class="statistik_main">
                <p>
                  Детальная статистика в реальном времени. Для отслеживания
                  данных по вашим цепочкам.
                </p>
              </div>
            </div>
            <div class="statistik_box">
              <div class="statistik_info">
                <img src="@/assets/st2.svg" alt="" />
                <p>Удобная интеграция</p>
              </div>
              <div class="statistik_main">
                <p>SMPP и API и загрузка файлов.</p>
              </div>
            </div>
            <div class="statistik_box">
              <div class="statistik_info">
                <img src="@/assets/st3.svg" alt="" />
                <p>Фиксированные цены</p>
              </div>
              <div class="statistik_main">
                <p>
                  Наше преимущество — фиксированные низкие цены, не зависящие от
                  количества СМС или от суммы пополнения.
                </p>
              </div>
            </div>
            <div class="statistik_box">
              <div class="statistik_info">
                <img src="@/assets/st4.svg" alt="" />
                <p>Безопасность</p>
              </div>
              <div class="statistik_main">
                <p>
                  Мы являемся оператором персональных данных. Данные ваших
                  клиентов надёжно защищены.
                </p>
              </div>
            </div>
            <div class="statistik_box active">
              <div class="statistik_info">
                <img src="@/assets/st5.svg" alt="" />
                <p>Нейтральные имена отправителей</p>
              </div>
              <div class="statistik_main">
                <p>Cразу можно начинать рассылку.</p>
              </div>
            </div>
            <TarifBtn />
          </div>
          <div class="statistik_right">
            <img src="@/assets/mains.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="communication">
      <div class="container">
        <h1>
          Используйте <span>все возможности</span> быстрой коммуникации с
          пользователями:
        </h1>
        <div class="communication_top">
          <div class="sms_left">
            <img src="@/assets/main.svg" alt="" />
            <p>SMS</p>
          </div>
          <div class="sms">Имя отправителя</div>
          <div class="sms_right">Как это работает</div>
        </div>
        <div class="communication_bottom">
          <div class="sms1_left">ABCabc</div>
          <div class="sms1">Буквенное</div>
          <div class="sms1_right">
            Использование нейтральных имен отправителей с быстрой доставкой до
            абонентов. Без ожидания регистрации!
          </div>
        </div>
        <div class="communication_bottom">
          <div class="sms1_left">123-456</div>
          <div class="sms1">Цифровое</div>
          <div class="sms1_right">
            Канал для массовых рассылок по низкой цене с уровнем доставки до 90%
            от активной базы. Отправка осуществляется с цифровых номеров РФ.
          </div>
        </div>
      </div>
    </div>
    <div class="company">
      <div class="container">
        <h1>Распределение по мобильным операторам в нашей системе</h1>
        <div class="company_inner">
          <div class="comp_box1">
            <div class="box1">
              <p>База данных клиента</p>
            </div>
            <img src="@/assets/strelka.svg" alt="" />
          </div>
          <div class="comp_box2">
            <div class="box_inner">
              <img src="@/assets/beeline.svg" alt="" />
              <img src="@/assets/megafon.svg" alt="" />
              <img src="@/assets/tele.svg" alt="" />
              <img src="@/assets/mts.svg" alt="" />
            </div>
            <div class="box_btn">
              <div class="inner">
                <p>ABCabc</p>
              </div>
              <div class="inner">
                <p>123-456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="container">
        <div class="contact_sms">
          <p>
            <span
              >Выгодная, удобная и стабильная схема отправки смс-сообщений</span
            >
            уже настроена.
          </p>
        </div>
        <div class="contact_in">
          <h2>
            Благодаря нашему опыту вы подключаетесь к каналам с самым лучшим
            соотношением доставляемости и цены за смс
          </h2>
        </div>
        <div class="contact_text">
          <router-link style="display: contents" :to="{ name: 'InputForm' }">
            <button>Подключиться</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="telephone">
      <div class="telephone_left">
        <div class="telephone_box1">
          <div class="img">
            <img src="@/assets/main3.svg" alt="" />
            <p>Whats App</p>
          </div>
          <h3>
            Универсальный канал рассылки через самый используемый в мире
            мессенджер.
          </h3>
          <h3>До 1000 символов + фото + кнопка в сообщении.</h3>
          <h3>Единая цена на весь мир.</h3>
          <TarifBtn />
        </div>
        <div class="telephone_right">
          <img src="@/assets/tel1.png" alt="" />
        </div>
      </div>
      <div class="telephone_left">
        <div class="telephone_box1">
          <div class="img">
            <img src="@/assets/main2.svg" alt="" />
            <p>Viber</p>
          </div>
          <h3>Официальный канал мессенджера для вашей рассылки.</h3>
          <h3>До 1000 символов + фото + кнопка в сообщении.</h3>
          <h3>Единая цена на весь мир.</h3>
          <TarifBtn />
        </div>
        <div class="telephone_right">
          <img src="@/assets/tel2.png" alt="" />
        </div>
      </div>
      <div class="telephone_left">
        <div class="telephone_box1">
          <div class="img">
            <img src="@/assets/main4.svg" alt="" />
            <p>IVR</p>
          </div>
          <h4>Голосовые сообщения</h4>
          <h3>
            Благодаря глубокой интеграции с смс-цепочками можно выстроить
            эффективную стратегию касаний с пользователями.
          </h3>
          <h3>Дешевле и эффективнее call-центра.</h3>
          <h3>
            Определяет ответ пользователя голосом и нажатием на кнопку. В
            большинстве случаев определяет автоответчик.
          </h3>
          <TarifBtn />
        </div>
        <div class="telephone_right">
          <img src="@/assets/tel3.png" alt="" />
        </div>
      </div>
    </div>
    <div id="generation" class="generation">
      <div class="container">
        <div class="generation_left">
          <img src="@/assets/generation_bg.svg" alt="" />
        </div>
        <div class="generation_right">
          <h1>Лидогенерация</h1>
          <p class="p">Привлечение новых клиентов в ваш бизнес</p>
          <div class="generation_content">
            <div class="generation_content_left">
              <h4>Отправка вашей рекламы по нашим клиентам:</h4>
              <div class="generation_content_title">
                <img src="@/assets/l6.svg" alt="" />
                <div class="img">
                  <div class="icons">
                    <img src="@/assets/l1.svg" alt="" />
                    <p>Вы предлагаете креатив</p>
                  </div>
                  <div class="icons">
                    <img src="@/assets/l2.svg" alt="" />
                    <p>Согласовываем креатив</p>
                  </div>
                  <div class="icons">
                    <img src="@/assets/l3.svg" alt="" />
                    <p>Выбираете размер базы</p>
                  </div>
                  <div class="icons">
                    <img src="@/assets/l4.svg" alt="" />
                    <p>Мы отправляем рассылку</p>
                  </div>
                  <div class="icons">
                    <img src="@/assets/l5.svg" alt="" />
                    <p>Вы предлагаете креатив</p>
                  </div>
                </div>
              </div>
              <TarifBtn />
            </div>
            <div class="generation_content_right">
              <img src="@/assets/generation1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="trafik" class="trafik">
      <div class="container">
        <div class="trafik_left">
          <h1>Монетизация трафика</h1>
          <div class="trafik_title">
            <p>
              Профессионалы по интернет-маркетингу с опытом работы более 10 лет
              составят для вас цепочки касаний и реализуют их по вашим клиентам.
            </p>
            <div class="text">
              <img src="@/assets/t1.svg" alt="" />
              <h5>
                Наше вознаграждение будет зависеть от результатов проделанной
                работы (Revshare).
              </h5>
            </div>
          </div>
          <TarifBtn />
        </div>
        <div class="trafik_rigth">
          <img src="@/assets/money.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="sistem">
      <div class="container">
        <h1>Для подключения к системе оставьте заявку:</h1>
        <div class="sistem_item">
          <div class="contact_text">
            <router-link style="display: contents" :to="{ name: 'InputForm' }">
              <button>Подключиться</button>
            </router-link>
          </div>
          <img src="@/assets/tr_bg.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TarifBtn from "./TarifBtn.vue";
export default {
  name: "UzbDasturchiMainPage",
  components: { TarifBtn },
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
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
  .container {
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main_content {
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 120%;
      width: 60%;
      color: #0f2756;
      margin-bottom: 25px;
    }
    .icons {
      display: flex;
      gap: 16px;
    }
    p {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      margin-top: 22px;
      margin-bottom: 64px;
      color: #0f2756;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 196px;
      height: 72px;
      background: linear-gradient(90deg, #ff842b 0%, #fe6915 100%);
      border-radius: 65px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;
      transition: all 0.3s;
      &:hover {
        background: linear-gradient(90deg, #ff9d0a 0%, #ff792d 100%);
      }
    }
  }
  @media (max-width: 1200px) {
    .main_content {
      padding-left: 15px;
    }
    .main_content h1 {
      width: 100%;
    }
  }
  @media (max-width: 991px) {
    padding-top: 5px;
    .main_gallery {
      width: 47%;
      img {
        width: 100%;
      }
    }
    .main_content {
      width: 48%;
    }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column-reverse;
    }
    .main_gallery {
      width: 80%;
      margin: 0px auto;
      img {
        width: 100%;
      }
    }
    .main_content {
      padding-top: 48px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        text-align: center;
        font-weight: 500;
        font-size: 34px;
        line-height: 120%;
      }
      a {
        max-width: 325px;
        height: 72px;
        width: 100%;
      }
    }
  }
  @media (max-width: 485px) {
    .main_content {
      padding-left: 0;
      h1 {
        font-size: 30px;
      }
      a {
        margin-bottom: 40px;
      }
    }
    .main_gallery {
      width: 90%;
    }
  }
}
.about {
  margin-top: 100px;
  .container {
    background: linear-gradient(91.26deg, #f9fbff 0%, #f4f8ff 100%);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px auto;
    padding-right: 0;
    .about_left {
      padding: 35px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 140%;
        color: #0f2756;
        width: 90%;
        strong {
          font-weight: 500;
        }
      }
      .content {
        margin-top: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 100px;
        border-left: 2px solid #fb6b1a;

        .content_item {
          width: 70%;
          padding: 0px 20px;
          h2 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
            color: #0f2756;
          }
          h3 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 160%;
            color: #0f2756;
          }
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
        }
      }
    }
    //  .about_right {
    //  }
  }
  @media (max-width: 1200px) {
    .about_right {
      display: none;
    }
    .container .about_left p {
      width: 100%;
    }
    .container .about_left .content {
      padding-right: 0;
    }
  }
  @media (max-width: 576px) {
    .container .about_left .content {
      border: none;
    }
    .container .about_left .content .content_item {
      width: 100%;
      padding: 0;
    }
    .container .about_left .content .content_btn {
      margin-top: 25px;
      max-width: 345px;
      width: 100%;
    }
    .container .about_left {
      padding: 20px;
    }
    .container .about_left .content {
      flex-direction: column;
    }
    .container .about_left p {
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
    }
  }
}
.statistik {
  padding-top: 100px;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: #0f2756;
    margin-bottom: 35px;
  }
  .statistik_inner {
    display: flex;
    justify-content: space-between;
    .statistik_left {
      width: 70%;
      display: flex;

      flex-direction: column;
      .statistik_box {
        padding: 20px 0px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #cfd7e7;
        .statistik_info {
          width: 33%;
          display: flex;
          align-items: center;
          gap: 24px;
          img {
            width: 44px;
            height: 44px;
          }
          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
            color: #0f2756;
          }
        }
        .statistik_main {
          padding-left: 10%;
          width: 67%;
          p {
            font-family: "Noto Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 140%;
            color: #484e65;
          }
        }
        &.active {
          margin-bottom: 30px;
          border: none;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .statistik_inner .statistik_left .statistik_box {
      flex-direction: column;
    }
    .statistik_inner .statistik_left .statistik_box {
      align-items: flex-start;
    }
    .statistik_inner .statistik_left .statistik_box .statistik_main {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .statistik_inner {
      flex-direction: column;
      .statistik_right {
        display: flex;
        justify-content: center;
        img {
          margin: 20px auto !important;
        }
      }
    }
    .statistik_inner .statistik_left .statistik_box .statistik_info {
      width: 100%;
    }
    .statistik_inner .statistik_left .statistik_box .statistik_main {
      padding-left: 0;
    }
    .statistik_inner .statistik_left {
      width: 100%;
    }
  }
}
.communication {
  margin-top: 140px;
  .container {
  }
  h1 {
    width: 55%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: #0f2756;
    span {
      color: rgba(251, 107, 26, 1);
    }
  }
  .communication_top {
    margin-top: 77px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cfd7e7;
    padding-bottom: 20px;
    .sms_left {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 25%;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 120%;
        color: #0f2756;
      }
    }
    .sms {
      width: 25%;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;

      color: #484e65;
    }
    .sms_right {
      width: 50%;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;

      color: #484e65;
    }
  }
  .communication_bottom {
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sms1_left {
      width: 25%;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 38px;
      line-height: 46px;
      letter-spacing: 0.04em;
      color: #0f2756;
    }
    .sms1 {
      width: 25%;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 150%;
    }
    .sms1_right {
      width: 50%;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;

      color: #484e65;
    }
  }
  @media (max-width: 991px) {
    margin-top: 80px;
    .communication_top {
      flex-direction: column;
      align-items: flex-start;
    }
    h1 {
      width: 100%;
      font-weight: 500;
      font-size: 28px;
      line-height: 140%;
    }
    .communication_top .sms {
      display: none;
    }
    .communication_top .sms_right {
      display: none;
    }
    .communication_bottom {
      margin-top: 40px;
      flex-direction: column;
      align-items: flex-start;
    }
    .communication_bottom .sms1_left {
      width: 100%;
    }
    .communication_bottom .sms1_right {
      width: 100%;
      margin-top: 8px;
    }
  }
}
.company {
  margin-top: 130px;
  //   .container {
  //   }
  h1 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #8b8e97;
    padding-left: 20%;
  }
  .company_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .comp_box1 {
      width: 20%;
      display: flex;
      align-items: center;
      .box1 {
        width: 168px;
        height: 92px;
        background: linear-gradient(91.26deg, #f9fbff 0%, #f4f8ff 100%);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 140%;
          text-align: center;
          color: #484e65;
        }
      }
    }
    .comp_box2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      .box_inner {
        display: flex;
        align-items: center;
        gap: 42px;
        padding: 29px;
        background: linear-gradient(91.26deg, #f9fbff 0%, #f4f8ff 100%);
        border-radius: 5px;
      }
      .box_btn {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 67px;
        .inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 170px;
          height: 70px;
          background: #ffffff;
          border: 1px solid #cfd7e7;
          border-radius: 5px;
          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
            text-align: center;
            letter-spacing: 0.04em;
            color: #484e65;
          }
        }
      }
    }
  }
  @media (max-width: 1250px) {
    .company_inner .comp_box2 .box_inner {
      flex-wrap: wrap;
      img {
        width: 35%;
      }
    }
  }
  @media (max-width: 768px) {
    .company_inner .comp_box2 .box_btn .inner {
      max-width: 160px;
      width: 100%;
    }
    .company_inner .comp_box2 .box_btn {
      gap: 40px;
    }
    .company_inner .comp_box1 {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .company_inner .comp_box1 .box1 {
      margin-top: 20px;
      width: 50%;
    }
    .company_inner {
      flex-direction: column;
    }
    .company_inner .comp_box2 {
      flex-direction: column;
      width: 100%;
    }
    .company_inner .comp_box2 .box_inner {
      margin-top: 20px;
      margin-bottom: 30px;
    }
    .company_inner .comp_box2 .box_btn {
      justify-content: space-between;
      flex-direction: row;
    }
  }
  @media (max-width: 576px) {
    .company_inner .comp_box2 .box_inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .company_inner .comp_box2 .box_inner img {
      width: 50%;
    }
  }
}
.contact {
  margin-top: 130px;
  .container {
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #ff842b 0%, #fe6915 100%);
    border-radius: 30px;
    padding: 34px 40px;
    .contact_sms {
      width: 30%;
      padding-right: 40px;
      border-right: 1px solid #ffffff;
      p {
        transition: all 0.3s;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        /* or 28px */

        text-transform: uppercase;

        color: rgba(255, 255, 255, 1);
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 140%;
          /* or 28px */

          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
    .contact_in {
      width: 35%;
      h2 {
        transition: all 0.3s;
        width: 90%;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        /* or 22px */
        padding: 0px 40px;
        color: #ffffff;
      }
    }
    .contact_text {
      width: 35%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      button {
        transition: all 0.3s;
        border: none;
        outline: none;

        padding: 20px 40px;
        gap: 16px;
        max-width: 376px;
        width: 100%;
        height: 72px;
        background: #ffffff;
        border-radius: 65px;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #fb6b1a;
      }
    }
    transition: all 0.3s;
    &:hover {
      background: white;
      border: 1px solid rgba(254, 105, 21, 1);
      .contact_in {
        h2 {
          color: #fb6b1a;
        }
      }
      .contact_text {
        button {
          background: linear-gradient(90deg, #ff9d0a 0%, #ff792d 100%);
          border-radius: 65px;
          color: white;
        }
      }
      .contact_sms {
        p {
          color: #fb6b1a;
          span {
            color: #fb6b1a;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .container {
      flex-direction: column;
      padding: 36px 20px;
      .contact_sms {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #ffffff;
        padding-right: 0;
        padding-bottom: 15px;
        P {
          font-weight: 500;
          font-size: 18px;
          line-height: 140%;
          span {
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
          }
        }
      }
      .contact_in {
        width: 100%;
        h2 {
          padding: 20px 0;
        }
      }
      .contact_text {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
.telephone {
  margin-top: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .telephone_left {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .telephone_box1 {
      width: 50%;
      padding: 0px 5%;
      padding-left: 11%;
      .img {
        display: flex;
        align-items: center;
        gap: 25px;
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 120%;
          color: #0f2756;
        }
      }
      h4 {
        padding: 11px 0;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: #b2bed2;
      }
      h3 {
        margin-top: 8px;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #484e65;
      }
      .content_btn {
        margin-top: 55px;
      }
    }
  }
  .telephone_right {
    display: flex;
    justify-content: center;
    padding: 70px 0px 50px 50px;

    width: 50%;
    background: linear-gradient(91.26deg, #f9fbff 0%, #f4f8ff 100%);
    border-radius: 30px 0px 0px 30px;
  }
  @media (max-width: 991px) {
    .telephone_left .telephone_box1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .telephone_left {
      flex-direction: column;
      .telephone_box1 {
        width: 100%;
        padding: 20px;
      }
    }
    .telephone_right {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
.generation {
  margin-top: 100px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .generation_left {
    }
    .generation_right {
      padding-left: 80px;
      h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: #0f2756;
      }

      .p {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        margin-top: 4px;
        margin-bottom: 48px;
        color: #b2bed2;
      }
      .generation_content {
        display: flex;
        justify-content: space-between;
        .generation_content_left {
          padding-right: 20px;
          h4 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 140%;
            margin-bottom: 10px;
            color: #0f2756;
          }
          .generation_content_title {
            display: flex;
            align-items: center;
            gap: 11px;
            margin-left: -30px;
            margin-bottom: 60px;
            .icons {
              padding: 6px 0px;
              display: flex;
              align-items: center;
              gap: 16px;

              p {
                font-family: "Inter";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 140%;

                color: #0f2756;
              }
            }
          }
        }
        .generation_content_right {
        }
      }
    }
  }
  @media (max-width: 1220px) {
    .container {
      flex-direction: column-reverse;
      .generation_right {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    .container .generation_right .generation_content {
      flex-direction: column;
    }
    .generation_left {
      margin-top: 30px;
      img {
        width: 100%;
      }
    }
    .container .generation_right {
      padding-left: 30px;
      margin-top: 30px;
    }
  }
  @media (max-width: 556px) {
    .generation_content_right {
      img {
        width: 100%;
      }
    }
  }
}
.trafik {
  margin-top: 120px;
  .container {
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .trafik_left {
      h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: #0f2756;
      }
      .trafik_title {
        padding: 0px 24px;
        margin: 36px 0;
        border-left: 2px solid #fb6b1a;
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 140%;
          color: #0f2756;
        }
        .text {
          margin-top: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          h5 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 140%;
            color: #8b8e97;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .container {
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
    }
    .trafik_rigth {
      margin-top: 30px;
      img {
        width: 100%;
      }
    }
    .container .trafik_left h1 {
      font-size: 26px;
    }
  }
}
.sistem {
  margin-top: 100px;
  .container {
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
      padding-left: 9%;
      color: #0f2756;
      margin-bottom: 52px;
      width: 50%;
    }
    .sistem_item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fb6b1a;
      transition: all 0.3s;
      border-radius: 30px;
      border: 2px solid #fb6b1a;
      .contact_text {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-left: -1%;
        align-items: center;
        button {
          transition: all 0.3s;
          border: none;
          outline: none;

          padding: 20px 40px;
          gap: 16px;
          max-width: 376px;
          width: 100%;
          height: 72px;
          background: #ffffff;
          border-radius: 65px;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 140%;
          color: #fb6b1a;
        }
      }
      &:hover {
        background: white;
        border: 2px solid #fb6b1a;
        button {
          background: linear-gradient(90deg, #ff9d0a 0%, #ff792d 100%);
          color: white;
        }
      }
    }
  }
  @media (max-width: 980px) {
    .container {
      h1 {
        width: 100%;
        font-weight: 500;
        font-size: 28px;
        line-height: 140%;
      }
      .sistem_item .contact_text {
        width: 80%;
      }
      .sistem_item {
        flex-direction: column;
        gap: 40px;
        .contact_text {
          margin-top: 50px;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>