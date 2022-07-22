<template>
  <v-dialog v-model="isDialog" persistent>
    <v-card class="Login_Dialog">
      <div class="login-modal">
        <v-icon style="position: absolute; right: 6%" @click="CloseModel"
          >mdi-close</v-icon
        >
        <div class="logo">
          <img src="img/logos/bodytalk-logo.svg" alt="companyName" />
        </div>
        <v-text-field
          label="Email address"
          variant="underlined"
          placeholder="youremail@company.com"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          variant="plain"
          hide-details
          label="Password"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-divider class="ma-0 mt-n2"></v-divider>

        <div class="btn-forgot-pass mt-4">
          <!-- <router-link to="/forgetpassword">
        <p class="text-black">Forgot password?</p>
        </router-link> -->

          <a class="link mb-4" @click="GoToForgetPassword()"
            >Forgot password?</a
          >
        </div>

        <!-- <div *ngIf="messageError!= ''" class="alert alert-error">{{ messageError}}</div> -->
        <v-card>
          <button
            color="#0071BD"
            class="btn-primary mt-0"
            @click="onClickLogin()"
          >
            LOGIN
          </button>
        </v-card>

        <div class="link-register">
          <p class="body-2">
            Dont have an account?
            <!-- <router-link to="/register">
        <a style="color: #1884cd"> Register </a>
        </router-link> -->
            <a class="link" @click="GotoRegister()"> Register </a>
          </p>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["Dialog"],
  data() {
    return {
      show1: false as boolean,
      password: "" as string,
    };
  },
  computed: {
    isDialog(): boolean {
      return this.Dialog;
    },
  },
  methods: {
    GoToForgetPassword() {
      this.$emit("CloseModel");
      this.$router.push("/forgetpassword");
    },
    onClickLogin() {
      this.$emit("CloseModel");
      this.$router.push("/");
    },
    CloseModel() {
      this.$emit("CloseModel");
    },
    GotoRegister() {
      this.$emit("CloseModel");
      this.$router.push("/register");
    },
  },
});
</script>

<style></style>
