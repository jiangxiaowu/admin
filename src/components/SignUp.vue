<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8"> </b-col>
        <b-col cols="4" class="signupfromgroup">
          <b-card bg-variant="light">
            <h2 style="text-align: center">Signup</h2>

            <b-form
              @submit.prevent="onSignup"
              v-if="show"
              class="fromgroupsubmit"
            >
              <b-form-group label="User Name:">
                <b-form-input
                  id="input-1"
                  type="text"
                  v-model="form.name"
                  placeholder="Enter name"
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
                <span href="" disabled>Already have account?</span>
                <b-link href="" class="ml-4" style="font-weight:bold;"
                  >Login</b-link
                >
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
      show: true,
    };
  },
  methods: {
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
        return
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
};
</script>

<style></style>
