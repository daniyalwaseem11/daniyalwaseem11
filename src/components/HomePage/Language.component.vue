<template>
  <v-card flat>
    <div>
      <div class="d-flex justify-space-between">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          slider-color="#EAA413"
          right
        >
          <v-tab value="one" class="style_text_h">Language</v-tab>
          <v-tab value="two" class="style_text_h">Currancy</v-tab>
        </v-tabs>

        <v-btn
          variant="text"
          icon="mdi-close"
          size="small"
          class="mr-2 pa-1"
          @click="close"
        ></v-btn>
      </div>
      <v-divider class="pa-0 ma-0"></v-divider>
    </div>
    <v-card-text class="mt-3 mb-3">
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-row class="d-flex justify-space-around">
            <v-col cols="12" md="3">
              <div>
                <span class="style_text_h">Español</span> <br /><span
                  class="text_heading_ttb"
                >
                  (Latinoamérica)</span
                >
              </div>
            </v-col>

            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="mx-3" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  English
                </span>
              </v-btn>
            </v-col>
            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="mx-3" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  Portuguese</span
                >
              </v-btn>
            </v-col>
            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="mx-3" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  Deutsch
                </span>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-space-around">
            <v-col cols="12" md="3">
              <div>
                <span class="style_text_h">Español</span> <br /><span
                  class="text_heading_ttb"
                >
                  (Latinoamérica)</span
                >
              </div>
            </v-col>

            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="mx-3" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  English
                </span>
              </v-btn>
            </v-col>
            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="mx-3" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  Portuguese</span
                >
              </v-btn>
            </v-col>
            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="mx-3" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  Deutsch
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="two">
          <v-row class="d-flex justify-space-around">
            <v-col cols="12" md="3"
              ><v-btn
                color="transparent"
                variant="flat"
                class="pl-0 pr-0"
                x-large
              >
                <span class="px-1 py-3" style="text-transform: none"
                  >USD - $
                </span>
              </v-btn>
            </v-col>

            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  ARS - ARS$
                </span>
              </v-btn>
            </v-col>
            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  AUD - A$</span
                >
              </v-btn>
            </v-col>
            <v-col cols="12" md="3"
              ><v-btn
                color="transparent"
                variant="flat"
                class="pl-0 pr-0"
                x-large
              >
                <span class="px-1 py-3" style="text-transform: none">
                  MXN - Mex$</span
                >
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-space-around">
            <v-col cols="12" md="3"
              ><v-btn
                color="transparent"
                variant="flat"
                class="pl-0 pr-0"
                x-large
              >
                <span class="px-1 py-3" style="text-transform: none"
                  >USD - $
                </span>
              </v-btn>
            </v-col>

            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  ARS - ARS$
                </span>
              </v-btn>
            </v-col>
            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  AUD - A$</span
                >
              </v-btn>
            </v-col>
            <v-col cols="12" md="3"
              ><v-btn color="transparent" variant="flat" class="" x-large>
                <span class="px-1 py-3" style="text-transform: none">
                  MXN - Mex$</span
                >
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LanguageComponent",
  props: ["languagecomponent"],
  data: () => ({
    tab: null,
  }),
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style scoped>
.v-btn.v-btn--density-default {
  height: auto;
}
.style_text_h {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-transform: none;

  /* Color/General/Black High Emphasis */

  color: #222222;
}
.tabs_slider {
  color: #eaa413;

  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  border-bottom: 2px solid #e1e4e7;
}
.feild {
  background-color: #f6f8fc;
  border: 1px solid #f2f3f9;
  border-radius: 6px;
  height: 50px;
}
.text_heading_ttb {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: none;
  color: rgba(8, 8, 22, 0.38);
}
.btn_space {
  white-space: normal;
  width: 100px;
}
</style>
