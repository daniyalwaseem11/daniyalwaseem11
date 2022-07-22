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
            <div>
              <div>
                <p class="ForgetPassword_h1">Forgotten password</p>
              </div>
              <div>
                <p class="ForgetPassword_span_one">
                  Enter your e-mail to recover your forgotten password
                </p>
              </div>
              <div class="mt-8">
                <v-text-field
                  label="E-mail address"
                  single-line
                  hide-details
                  class="my-6"
                  variant="underlined"
                ></v-text-field>

                <v-dialog v-model="EmailConfrimdialog" persistent>
                  <template v-slot:activator="{ props }">
                    <v-btn block color="#1884CD" v-bind="props"
                      ><span class="text-white">Recover password</span></v-btn
                    >
                  </template>
                  <v-card>
                    <ConfirmEmailDialogComponent
                      :Dialog="EmailConfrimdialog"
                      @CloseModel="CloseModel"
                    ></ConfirmEmailDialogComponent>
                  </v-card>
                </v-dialog>
              </div>
            </div>
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
import ConfirmEmailDialogComponent from "../../components/accounts/ConfirmEmailDialog.component.vue";
export default defineComponent({
  components: {
    ConfirmEmailDialogComponent,
  },
  data() {
    return {
      EmailConfrimdialog: false,
    };
  },
  methods: {
    CloseModel() {
      this.EmailConfrimdialog = false;
    },
  },
});
</script>
