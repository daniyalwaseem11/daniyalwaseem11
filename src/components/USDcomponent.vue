
<template>
  <div class="main-layout">
    <nav class="toolbar">
      <div class="container">
        <a class="logo">
          <img :src="logo" alt="Agengy Coda" />
        </a>
        <div class="rows">
          <div class="row d-flex justify-space-between align-center">
            <v-container class="justify-space-between px-0">
              <div class="my-3">
                <v-row class="pa-0 ma-0">
                  <v-col cols="12" md="5" sm="7" class="pa-0 ma-0">
                    <v-text-field
                      single-line
                      variant="outlined"
                      prepend-inner-icon="mdi-magnify"
                      label="Search"
                      hide-details=""
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" md="7 " class="pa-0 ma-0">
                    <div class="d-flex justify-end">
                      <!-----------------------language dilaog----------------------------->
                      <v-dialog v-model="LanguageDialog" persistent style="width:700px;">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            color="transparent"
                            variant="flat"
                            class="mx-3"
                            size="small"
                            v-bind="props"
                          >
                            <span class="LanguageDialog_span"> English </span>
                          </v-btn>
                        </template>
                        <v-card class="px-4"  >
                          <language-component
                            :languagecomponent="languagecomponent"
                            @close="close"
                          />
                  
                          <!-- <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="green darken-1"
                              text
                              @click="LanguageDialog = false"
                            >
                              Disagree
                            </v-btn>
                            <v-btn
                              color="green darken-1"
                              text
                              @click="LanguageDialog = false"
                            >
                              Agree
                            </v-btn>
                          </v-card-actions> -->
                        </v-card>
                      </v-dialog>
                      <!------------------------language dilaog---------------------->
                      <div class="vr"></div>
                      <!-----------------------language dilaog----------------------------->
                      <v-dialog v-model="LanguageDialog2" persistent>
                        <template v-slot:activator="{ props }">
                          <v-btn
                            color="transparent"
                            variant="flat"
                            class="mx-3"
                            size="small"
                            v-bind="props"
                          >
                            <span class="LanguageDialog_span"> USD </span>
                          </v-btn>
                        </template>
                       <v-card class="px-4"  >
                          <language-component
                            :languagecomponent="languagecomponent"
                            @close="close"
                          />
                        </v-card>
                      </v-dialog>
                      <!------------------------language dilaog---------------------->
                      <div class="vr"></div>
                      <v-dialog v-model="loginDialoag" >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            color="#0071BD"
                            variant="flat"
                            class="mx-3"
                            size="small"
                            v-bind="props"
                          >
                            <span class=""> Sign In </span>
                          </v-btn>
                        </template>
                        <v-card class="px-3 py-3">
                          <router-link :to="'/register'">Register</router-link>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </div>
          <v-row>
            <button class="btn">
              Practitioners <v-icon> mdi-menu-down</v-icon>
            </button>
            <button class="btn">Courses <v-icon> mdi-menu-down</v-icon></button>
            <button class="btn">Careers <v-icon> mdi-menu-down</v-icon></button>
            <button class="btn">
              Learn more <v-icon> mdi-menu-down</v-icon>
            </button>
            <button class="btn">Store <v-icon> mdi-menu-down</v-icon></button>
            <button class="btn">Forum <v-icon> mdi-menu-down</v-icon></button>
          </v-row>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LanguageComponent from "@/components/HomePage/Language.component.vue";

export default {
  components: { LanguageComponent },
  name: "Header",
  data() {
    return {
      logo: require("./bodytalk-logo.svg"),
      LanguageDialog: false,
      LanguageDialog2: false,
      loginDialoag: false,
    };
  },
  methods: {
    close() {
      this.LanguageDialog = false;
      this.LanguageDialog2 = false;
    },
  },
};
</script>

<style scoped>
.LanguageDialog_span
{
      color: rgba(34, 34, 34, 0.7);
    transition: all 0.3s ease;
    letter-spacing: -0.25px !important;
        font-family: "DM Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
}
</style>