<template>
  <div class="login-layout">
    <b-container>
      <b-row>
        <b-col cols="8"> </b-col>
        <b-col cols="4" class="loginfromgroup">
          <h2 style="text-align: center">Login</h2>
          <b-form
            @submit.prevent="onSubmit"
            v-if="show"
            class="fromgroupsubmit"
          >
            <b-form-group
              label="Email address:"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
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

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary" class="submitButton"
              >Submit</b-button
            >
          </b-form>
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
        email: "",
        password: "",
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      this.$AV.User.loginWithEmail(this.form.email, this.form.password).then(
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
.login-layout {
  height: 100vh;
  background-image: url(../assets/background.jpg);
  background-size: 100% 100%;
}

.loginfromgroup {
  top: 200px;
  width: 500px;
  padding: 20px;
}
.fromgroupsubmit {
  width: 350px;
  margin: auto;
}
.submitButton {
  width: 350px;
  height: 50px;
}
</style>
