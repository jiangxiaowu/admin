<template>
  <div class="login-layout">
    <b-container>
      <b-row>
        <b-col cols="8"> </b-col>

        <!-- login -->
        <b-col cols="4" class="loginfromgroup" v-if="isShow">
          <b-card bg-variant="light">
            <h2>Login</h2>
            <b-form @submit.prevent="onSubmit">
              <b-form-group
                label="User Name:"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  placeholder="Enter Name"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Your Password:">
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  placeholder="Enter Password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <span disabled>Don't have account?</span>
                <b-link @click="toggle" class="ml-4">Create account</b-link>
              </b-form-group>
              <b-button type="submit" variant="primary" class="submitButton"
                >Submit</b-button
              >
            </b-form>
          </b-card>
        </b-col>

        <!-- signup -->
        <b-col cols="4" class="signupfromgroup" v-else>
          <b-card bg-variant="light">
            <h2 style="text-align: center">Signup</h2>
            <b-form @submit.prevent="onSignup" class="fromgroupsubmit">
              <b-form-group label="User Name:">
                <b-form-input
                  id="input-1"
                  type="text"
                  v-model="form.name"
                  placeholder="Enter Name"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Password:">
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  placeholder="Enter Password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Password again:">
                <b-form-input
                  id="input-3"
                  type="password"
                  v-model="form.passwordagain"
                  placeholder="Enter Password Again"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <span disabled>Already have account?</span>
                <b-link @click="toggle" class="ml-4">Login</b-link>
              </b-form-group>
              <b-button type="submit" variant="primary" class="registerButton"
                >Register</b-button
              >
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        passwordagain: "",
      },
      isShow: true,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    onSubmit() {
      this.$AV.User.logIn(this.form.name, this.form.password).then(
        () => {
          // 登录成功
          // console.log(user._sessionToken);
          // sessionStorage.setItem(this.$KEY_SESSION_TOKEN, user._sessionToken);
          this.$router.push("/");
        },
        (error) => {
          // 登录失败（可能是密码错误）
          console.log(error);
        }
      );
    },
    onSignup() {
      // 创建实例
      const user = new this.$AV.User();

      user.setUsername(this.form.name);
      //   user.setEmail(this.form.email);
      user.setPassword(this.form.password);

      // 设置其他属性的方法跟 AV.Object 一样
      user.set("gender", "secret");

      if (this.form.password !== this.form.passwordagain) {
        alert("Different passwords，please try again.");
        return;
      } else {
        user.signUp().then(
          () => {
            // 注册成功
            this.$router.push("/");
          },
          (error) => {
            // 注册失败（通常是因为用户名已被使用）
            console.log(error);
          }
        );
      }
    },
  },
  // mounted() {
  //   const TestObject = this.$AV.Object.extend("TestObject");
  //   const testObject = new TestObject();
  //   testObject.set("words", "Hello world!");
  //   testObject.save().then((testObject) => {
  //     console.log("保存成功。");
  //     console.log(testObject);
  //   });
  // },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.login-layout {
  height: 100vh;
  background-image: url(../assets/background.jpg);
  background-size: 100% 100%;
}

.loginfromgroup,
.signupfromgroup {
  top: 200px;
  padding: 20px;
  opacity: 0.8;
}

.submitButton,
.registerButton {
  width: 298px;
  height: 45px;
}

.ml-4 {
  font-weight: bold;
}
</style>
