<template>
  <div class="page-not-found intro-component-animation">
    <div class="container">
      <div class="header d-flex">
        <div class="texts">
          <span class="text_style"> Whoops! Lost in Space! </span>
          <p class="mt-4">
            The page you're looking for isn't found :( <br />
            We suggest you back to home
          </p>
          <br />
          <router-link to="/Homepage" style="text-decoration: none">
            <v-btn variant="flat" dark color="#0071BD"
              ><v-icon color="white" class="ma-2">mdi-home</v-icon>
              <span style="color: white">Back to Home </span>
            </v-btn>
          </router-link>
        </div>

        <div class="image">
          <img src="img/page-not-found-oldman.png" />
        </div>
      </div>

      <div class="boxes">
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="pa-5">
              <h5 class="style_etx mt-0">
                <v-icon> mdi-message-reply-text</v-icon
                ><span> Get in touch </span>
              </h5>
              <p class="body-2 style_text_p">
                Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
                adrpoiding
              </p>
              <a href="" class="link"
                ><span>Leave a message</span>
                <v-icon>mdi-arrow-right-thick </v-icon></a
              >
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="pa-5">
              <h5 class="style_etx mt-0">
                <v-icon> mdi-emoticon-outline</v-icon
                ><span> Help & Support</span>
              </h5>
              <p class="body-2 style_text_p">
                2750 Stickney Point Rd. Suite #203 Sarasota, Florida 34231 USA
              </p>
              <a href="" class="link"
                ><span>Request a meet</span>
                <v-icon color="blue">mdi-arrow-right-thick</v-icon></a
              >
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="pa-5">
              <h5 class="style_etx mt-0">
                <v-icon>mdi-bug</v-icon><span> Media & Press </span>
              </h5>
              <p class="body-2 style_text_p">
                If you find bugs or problems, be a hero and help us improve the
                experience for everyone!
              </p>
              <a href="" class="link"
                ><span>Email us to press@bodytalk.com</span>
                <v-icon color="blue">mdi-arrow-right-thick</v-icon></a
              >
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.text_style
{
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 42px;

display: flex;
align-items: center;


color: #222222;
}
</style>