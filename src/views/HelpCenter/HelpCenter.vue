<template>
  <div class="main-layout">
    <nav class="toolbar">
      <div class="container pb-0">
        <a class="logoo">
          <img :src="logoo" alt="BodyTalk" />
        </a>


            <v-container class=" px-0 pb-0">
   
                <v-row class=" justify-strat">
                  <div class="pl-6 mt-2">
                     <div class="mt-2 line vr"></div>
                  </div>
                  <v-col cols="12" md="5 " >
                     <div class="d-flex justify-start">
                            <span class="pa-2"> Help Center</span>
                   </div>
                  </v-col>
                   <v-col cols="12" md="6 " >
                    <div class="d-flex justify-end">
                            <span class=" pa-2" style="color:#0071BD;"> English <v-icon>mdi-menu-down
                              </v-icon> </span>
                      <div class=" mt-2 line vr ml-2 mr-2"></div>
                            <span class="pa-2" style="color:#0071BD;"> Contact Us</span>
                      <div class=" mt-2 line vr ml-2 mr-2"></div>
                        <span class="pa-2" style="color:#0071BD;"> Back to Website </span>
                    </div>
                   </v-col>
                 
                </v-row></v-container></div>
          
 
     
    </nav>

      <div>
      <div  class="contain">
        <div class="bottom-left">Bottom Left
        <img
        src="/img/AuthImages/auth.png"
       />
        </div>
     
      </div>
      </div>
   
  <div class="container"  >
    <div>
   <p class="text_heading"><span style="font-family:DM Sans">Need help? We take care of you.</span></p>
   <h6 class="text-botum">From account settings to permissions, find help for everything related to IBA Talk
   If you're new to IBA TALK and looking for advice, check out our<span style="color: #0071BD;"> Beginner's Guide!</span>
   </h6>
    </div>
   <div>
<!-- <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card> -->
   </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logoo: require("./bodytalk-logoo.svg"),
    };
  },
};
</script>

<style scoped>
.box_style {
  padding-top: 10px;
 height: 8px;

  background: #c1dbeb;
  border-radius: 4px;
}
.line
{ height: 25px;
}
.center_Text{
      z-index: 3;
      position: relative;
      display: flex;
      align-items: flex-end;
      margin-bottom: 8em;
      padding-left: 10em;
}
.text_heading
{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 34px;
text-align: center;
color: #222222;
}
.text-botum
{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
text-align: center;
color: rgba(34, 34, 34, 0.54);
padding-left: 16em;
padding-right: 16em;
text-transform: none;
}
</style>
