<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="ma-0 pa-0">
        <div class="d-flex justify-center align-center mt-9">
          <div>
            <div class="d-flex justify-center align-center">
              <img
                class="register_logo"
                src="img/AuthImages/logo_resgister.png"
              />
            </div>
            <p class="register_logo_span mt-3">
              Create your account to <br />
              join BodyTalk
            </p>
          </div>
        </div>
        <div class="register_form_style">
          <div class="my-9">
            <v-text-field
              label="First name"
              single-line
              hide-details
              class="my-6"
              variant="underlined"
            ></v-text-field>
            <v-text-field
              label="Last name"
              single-line
              hide-details
              class="my-6"
              variant="underlined"
            ></v-text-field>
            <v-text-field
              label="Email Address"
              single-line
              hide-details
              class="my-6"
              variant="underlined"
            ></v-text-field>
            <v-text-field
              label="Phone"
              single-line
              hide-details
              class="my-6"
              variant="underlined"
            ></v-text-field>
            <v-select
              v-model="select"
              label="Location"
              single-line
              hide-details
              class="my-6"
              :items="location"
              variant="underlined"
            ></v-select>
            <v-text-field
              label="Password"
              single-line
              hide-details
              class="my-6"
              variant="underlined"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              single-line
              hide-details
              class="my-6"
              variant="underlined"
            ></v-text-field>
            <div class="d-flex mb-4 mt-9">
              <div>
                <!-- <v-checkbox v-model="checkbox1" color="#00AAD3"></v-checkbox> -->
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">
                    <span>Subscribe to Newsletter</span>
                  </label>
                </div>
              </div>
              <div>
                <span class="link hover-linear">
                  <select class="form-select language_select link hover-linear">
                    <option value="1" selected>English</option>
                    <option value="2">Spanish</option>
                  </select>
                </span>
              </div>
            </div>

            <div class="d-flex my-4">
              <div>
                <!-- <v-checkbox v-model="checkbox1" color="#00AAD3"></v-checkbox> -->
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label">
                    <span
                      >Creating an account means you agree with our
                      <span class="link"> Terms of Service</span> and our
                      default
                      <span class="link"> Notification Settings.</span></span
                    >
                  </label>
                </div>
              </div>
            </div>
          </div>
          <v-dialog v-model="ConfrimRegisterdialog" persistent>
            <template v-slot:activator="{ props }">
              <v-btn color="#0071BD" block class="mb-8" v-bind="props">
                <span class="text-white"> Create account </span>
              </v-btn>
            </template>
            <v-card>
              <ConfrimRegisterComponent
                :Dialog="ConfrimRegisterdialog"
                @CloseModel="CloseModel"
              ></ConfrimRegisterComponent>
            </v-card>
          </v-dialog>
          <div class="mb-9 d-flex justify-center">
            <span
              >Already a member?
              <span class="link" @click="loginDialoag = true">
                Sign in
              </span></span
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="ma-0 pa-0">
        <!-- <v-img cover src="img/AuthImages/registerImage.png"></v-img> -->
        <div class="Register_backgroung_img">
          <v-card class="content_container">
            <div class="d-flex align-end content">
              Discover the world’s <br />
              top Lorem ipsum <br />
              dolor sit amet.
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <LoginModel :Dialog="loginDialoag" @CloseModel="CloseModel"></LoginModel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfrimRegisterComponent from "../../components/Register/ConfrimRegister.component.vue";
import LoginModel from "../../components/accounts/LoginModel.vue";
// import Footer from "../Footer/Footer.vue";
export default defineComponent({
  name: "RegisterComponent",
  components: {
    ConfrimRegisterComponent,
    LoginModel,
  },
  data() {
    return {
      ConfrimRegisterdialog: false,
      checkbox1: false,
      select: null,
      loginDialoag: false,
      location: ["Location 1", "Location 2", "Location 3", "Location 4"],
    };
  },
  methods: {
    CloseModel() {
      this.loginDialoag = false;
      this.ConfrimRegisterdialog = false;
    },
  },
});
</script>
