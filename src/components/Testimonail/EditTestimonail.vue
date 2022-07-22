<template>
  <div>
    <v-form>
      <v-container class="pl-0">
        <div>
          <v-row>
            <v-col cols="12" md="6" sm="7">
              <v-select
                :items="items"
                class="v-input__control span"
                single-line
                variant="outlined"
                label="Language"
                hide-details=""
              >
              </v-select>
            </v-col>
            <v-col cols="12" md="6" sm="7">
              <v-select
                :items="itemss"
                class="v-input__control span"
                single-line
                variant="outlined"
                label="Modality"
                hide-details=""
              >
              </v-select>
            </v-col>
          </v-row>
        </div>
        <div class="mt-4">
          <h5 class="mt-2">Review</h5>
          <v-container>
            <v-textarea
              background-color="light-blue"
              color="black"
              label="Label"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
          </v-container>

          <!-- <v-textarea
          auto-grow
          outlined
          rows="3"
          row-height="25"
          shaped
         single-line
            background-color="#F6F8FC"
            variant="outlined"
            hide-details=""
        >  {{text}}</v-textarea> -->
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["value"],
  components: {},
  data: () => ({
    items: ["English", "Spanish"],
    itemss: [
      " Maravilloso",
      " Search & Rescue Canine ",
      "Fear/Phobia-Afraid to Drive",
    ],

    text: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet...",
  }),
});
</script>

<style scoped>
.feild {
  background-color: #f6f8fc;
  border: 1px solid #dee3ef;
  border-radius: 6px;
  height: 50px;
}
</style>
