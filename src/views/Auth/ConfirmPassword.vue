<template>
  <div>
    <v-row>
      <v-col cols="12" md="7">
        <div>
          <div class="px-14 pt-14">
            <img
              class="register_logo"
              src="img/AuthImages/logo_resgister.png"
            />
          </div>
          <div class="d-flex justify-center" style="margin-top: 16vh">
            <v-card flat v-show="FirstStep">
              <div>
                <p class="ForgetPassword_h1">
                  Please, enter your <br />
                  new password
                </p>
              </div>
              <div class="mt-8">
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  variant="plain"
                  hide-details
                  label="New password"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-divider class="ma-0"></v-divider>
                <v-text-field
                  class="mt-12"
                  v-model="password2"
                  hide-details
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show2 ? 'text' : 'password'"
                  variant="plain"
                  label="Confirm new password"
                  @click:append="show2 = !show2"
                ></v-text-field>
                <v-divider class="ma-0"></v-divider>
              </div>
              <v-btn class="mt-5" @click="GotoLogin()" color="#1884CD" block
                ><p class="ma-0 text-white">CHANGE PASSWORD</p></v-btn
              >
            </v-card>
            <v-card flat v-show="LastStep">
              <div>
                <p class="confrimpassword_h1">
                  Your password has been <br />
                  successfully changed
                </p>
              </div>
              <div>
                <p class="confrimpassword_span">
                  You will be redirected in 5 seconds, if you are not redirected
                  click <br />
                  on the following button
                </p>
              </div>

              <div class="mt-11">
                <v-btn color="#1884CD" block @click="goToHome()"
                  ><p class="text-white ma-0">LOGIN</p></v-btn
                >
              </div>
            </v-card>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <div class="forgetpassword_backgroung_img">
          <v-card class="content_container"> </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      show1: false,
      show2: false,
      password: "",
      password2: "",
      LastStep: false,
      FirstStep: true,
    };
  },
  methods: {
    GotoLogin() {
      this.FirstStep = false;
      this.LastStep = true;
    },
    goToHome() {
      this.$router.push("/");
    },
  },
});
</script>
