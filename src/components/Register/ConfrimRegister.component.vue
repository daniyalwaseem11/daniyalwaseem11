<template>
  <div>
    <v-dialog v-model="dialogBox" persistent>
      <v-card color="#E5E5E5" class="px-9 py-7 ConfrimRegisterDialoag">
        <div class="d-flex justify-center align-center">
          <img class="register_logo" src="img/AuthImages/logo_resgister.png" />
        </div>
        <v-card class="mt-4" flat="">
          <v-card flat="">
            <img src="img/AuthImages/auth-register-email.png" alt="" />
          </v-card>
          <div class="px-3">
            <div class="d-flex justify-center mt-4">
              <div class="confrim_dialog_h1">
                <span
                  >A big hug to welcome you, <br />
                  you are now part of our <br />
                  <span class="p"> BODYTALK family! </span></span
                >
              </div>
            </div>
            <div class="d-flex justify-center mt-4">
              <div class="confrim_dialog_span">
                <span
                  >Lorem ipsum dolor sit amet consectetur adropising Lorem ipsum
                  dolor sit amet consectetur adropising Lorem ipsum dolor sit
                  amet consectetur adropising</span
                >
              </div>
            </div>
            <div class="my-9 mx-3">
              <v-btn color="#0071BD" block flat class="py-4">
                <span class="text-white" @click="GotoHome()"
                  >VISIT HOMEPAGE</span
                >
              </v-btn>
            </div>
            <v-divider class="mx-3"></v-divider>
            <div class="mx-3 mt-6">
              <span class="confrim_dialog_h1">
                <span class="_h2"> Any concern? </span></span
              >
            </div>
            <div class="mx-3 mt-3 mb-4">
              <span class="confrim_dialog_span2"> Contact our support</span>
            </div>
          </div>
        </v-card>
        <div class="mt-9">
          <span class="confrim_dialog_span d-flex justify-center">
            This email was sent to axel@agencycoda.com <br />
            BodyTalk | contact@bodytalk.com | [location?] <br />
            Copyright © 2021 BodyTalk. All rights reserved.
          </span>
        </div>
        <div class="mt-9">
          <span class="confrim_dialog_end d-flex justify-center">
            Poweredy by Agencycoda
          </span>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ConfrimRegisterComponent",
  props: ["Dialog"],
  data: () => {
    return {
      dialogbox: false,
    };
  },
  mounted() {
    this.dialogbox = this.Dialog;
  },
  methods: {
    GotoHome() {
      this.$emit("CloseModel");
      this.$router.push("/");
    },
  },
};
</script>
