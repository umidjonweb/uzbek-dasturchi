<template>
  <div>
    <HelloWorld />
    <div class="input">
      <div class="container">
        <h1>Для подключения к системе заполните данные:</h1>
        <div class="form">
          <div class="form_left">
            <el-form
              label-position="top"
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="ФИО" prop="name">
                <el-input placeholder="ФИО" v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="E-mail" prop="name">
                <el-input
                  type="email"
                  placeholder="E-mail"
                  v-model="ruleForm.name"
                ></el-input>
              </el-form-item>

              <el-form-item label="Компания/Сайт" prop="desc">
                <el-input
                  placeholder="text"
                  type="textarea"
                  v-model="ruleForm.desc"
                ></el-input>
              </el-form-item>
              <el-form-item prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox
                    label="OПодтверждаю,Партнёрским соглашением"
                    name="type"
                  ></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="Комментарий" prop="name">
                <el-input
                  v-model="ruleForm.comment"
                  placeholder="Есть пожелания? Напишите."
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="form_right">
            <el-form label-position="top" label-width="100px">
              <el-form-item type="tel" label="Телефон" prop="name">
                <el-input placeholder="ФИО" v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="Мессенджер для связи" prop="region">
                <el-select v-model="ruleForm.region" placeholder="Telegram">
                  <el-option label="Telegram" value="shanghai"></el-option>
                  <el-option label="Whatsapp" value="shangha"></el-option>
                  <el-option label="Viber" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                type="tel"
                label="Объем рассылок в месяц"
                prop="name"
              >
                <el-input
                  input="number"
                  placeholder="1000"
                  v-model="ruleForm.num"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <el-form>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >Create</el-button
            >
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "UzbDasturchiInputForm",
  components: {
    HelloWorld,
    Footer,
  },
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        comment: "",
        sayt: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" >
// .el-input__inner {
//   max-width: 440px;
// }
// .el-form-item {
//   margin-bottom: 22px;
//   display: flex;
//   flex-direction: column;
// }
// .el-form-item__content {
//   margin-left: 70px;
// }
.input {
  padding-top: 80px;
  h1 {
    margin-bottom: 40px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: #0f2756;
  }

  .el-input__inner {
    @media (max-width: 1200px) {
      width: auto !important;
    }
  }
  // .el-form-item {
  //   margin-bottom: 22px;
  //   max-width: 440px;
  //   width: 440px;
  // }
  .container {
    max-width: 1300px;
    margin: 0px auto;
    width: 100%;
    padding: 0px 15px;
  }
  .form {
    display: flex;
    justify-content: space-between;
    .form_left {
      width: 40%;
    }
    .form_right {
      width: 40%;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
    .el-input__inner {
      width: 100% !important;
    }
    .form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .form_left {
        width: 100%;
      }
      .form_right {
        width: 100%;
      }
    }
  }
}
</style>