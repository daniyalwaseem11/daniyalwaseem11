<template>
  <div>
    <div class="main-layout">
      <nav class="toolbar">
        <div class="container mb-2">
          <a class="logo">
            <img :src="logo" alt="BodyTalk" />
          </a>
          <div class="rows">
            <div class="row d-flex justify-space-between align-center">
              <v-container class="justify-space-between px-0 pb-0">
                <div class="my-3">
                  <v-row class="pa-0 ma-0 mb-3">
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
                        <v-dialog
                          v-model="LanguageDialog"
                          persistent
                          style="width: 700px"
                        >
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
                          <v-card class="px-4">
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
                          <v-card class="px-4">
                            <language-component
                              :languagecomponent="languagecomponent"
                              @close="close"
                            />
                          </v-card>
                        </v-dialog>
                        <!------------------------language dilaog---------------------->
                        <div class="vr"></div>
                        <!-- <v-dialog v-model="loginDialoag">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            color="#0071BD"
                            variant="flat"
                            class="mx-3"
                            size="small"
                            v-bind="props"
                          >
                            <span class="text--red"> Sign In </span>
                          </v-btn>
                        </template>
                        <v-card class="px-3 py-3">
                          <router-link :to="'/register'">Register</router-link>
                        </v-card>
                      </v-dialog> -->
                        <div>
                          <v-menu v-if="isLogged" location="start">
                            <template v-slot:activator="{ props }">
                              <button v-bind="props" @click="UserMenu = true">
                                <v-icon>mdi-account-circle</v-icon>
                              </button>
                            </template>
                            <v-card>
                              <v-card-text class="text-subtitle-1 my-2">
                                Hi,Axel!
                                <v-divider></v-divider>
                                <v-list>
                                  <v-list-tile
                                    v-for="navItem in userMenuItems"
                                    :key="navItem.name"
                                  >
                                    <v-list-tile-title
                                      style="
                                        display: flex;
                                        align-items: end;
                                        gap: 1rem;
                                        font-size: 16px;
                                        color: rgba(34, 34, 34, 0.7);
                                      "
                                      class="mb-3"
                                      v-if="navItem.name != 'divider'"
                                    >
                                      <v-icon>{{ navItem.icon }}</v-icon>
                                      {{ navItem.name }}</v-list-tile-title
                                    >
                                    <v-divider v-else></v-divider>
                                  </v-list-tile>
                                </v-list>
                              </v-card-text>
                            </v-card>
                          </v-menu>
                          <v-btn
                            v-else
                            color="#0071BD"
                            variant="flat"
                            class="mx-3 text-white"
                            size="small"
                            @click="openLogin()"
                          >
                            <span class="text--red"> Sign In </span>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-container>
            </div>
            <!------------------navigation bar start------------------------------------------------>
            <v-row>
              <v-menu
                transition="scroll-y-transition"
                offset-y
                color="transparent"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="transparent"
                    variant="flat"
                    v-bind="props"
                    class="text mr-1"
                  >
                    <span class="text"> Practitioners</span
                    ><v-icon style="font-size: x-large; color: #595459">
                      mdi-menu-down</v-icon
                    >
                  </v-btn>
                </template>
                <v-list class="mt-1" color="transparent">
                  <v-list-item class="text pa-3 px-3" link
                    >Find a b c Certified Practitioner
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Find Animal Practitioners
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Find Advances Practitioners
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Find PaRama Practitioners
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Find Instructors
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Read more about....
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu
                transition="scroll-y-transition"
                offset-y
                color="transparent"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="transparent"
                    variant="flat"
                    v-bind="props"
                    class="text mr-1"
                  >
                    <span class="text">Courses</span
                    ><v-icon style="font-size: x-large; color: #595459">
                      mdi-menu-down</v-icon
                    >
                  </v-btn>
                </template>
                <v-list class="mt-1" color="transparent">
                  <v-list-item class="text pa-3 px-3" link
                    >Find a Live Course
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Find a Self-Study Course
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu
                transition="scroll-y-transition"
                offset-y
                color="transparent"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="transparent"
                    variant="flat"
                    v-bind="props"
                    class="text mr-1"
                  >
                    <span class="text"> Careers</span
                    ><v-icon style="font-size: x-large; color: #595459">
                      mdi-menu-down</v-icon
                    >
                  </v-btn>
                </template>
                <v-list class="mt-1" color="transparent">
                  <v-list-item class="text pa-3 px-3" link
                    >Become a Practitioner
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Become an Instructor Non-Profit-Work
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-menu
                transition="scroll-y-transition"
                offset-y
                color="transparent"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="transparent"
                    variant="flat"
                    v-bind="props"
                    class="text mr-1"
                  >
                    <span class="text">Learn more </span
                    ><v-icon style="font-size: x-large; color: #595459">
                      mdi-menu-down</v-icon
                    >
                  </v-btn>
                </template>
                <v-list class="mt-1" color="transparent">
                  <router-link to="/company">
                    <v-list-item class="text pa-3 px-3" link
                      >IBA
                    </v-list-item></router-link
                  >
                  <router-link to="/testimonial">
                    <v-list-item class="text pa-3 px-3" link
                      >Testimonials
                    </v-list-item></router-link
                  >
                  <v-menu transition="scale-transition" origin=" right top ">
                    <template v-slot:activator="{ props }">
                      <v-list-item class="text py-3 pl-3" link v-bind="props">
                        <div class="d-flex justify-space-between">
                          Our Modalities
                          <v-icon class="ml-14">mdi-menu-right</v-icon>
                        </div>
                      </v-list-item>
                    </template>
                    <v-list class="Our_Modalities_style">
                      <v-list-item class="px-0">
                        <v-btn height="auto" class="py-2" variant="text">
                          <div class="d-flex align-start">
                            <div><img src="img/navbar/5.png" /></div>
                            <div class="ml-5">
                              <div>
                                <span class="Our_Modalities_style_h1"
                                  >BodyTalk</span
                                >
                              </div>
                              <div class="mt-1">
                                <span class="Our_Modalities_style_span"
                                  >Lorem ipsum dolor sit amet consectetur</span
                                >
                              </div>
                              <div>
                                <span class="Our_Modalities_style_span"
                                  >adropising lorem ipsum</span
                                >
                              </div>
                            </div>
                          </div>
                        </v-btn>
                      </v-list-item>
                      <v-list-item class="px-0">
                        <v-btn height="auto" class="py-2" variant="text">
                          <div class="d-flex align-start">
                            <div><img src="img/navbar/4.png" /></div>
                            <div class="ml-5">
                              <div>
                                <span class="Our_Modalities_style_h1"
                                  >FreeFall</span
                                >
                              </div>
                              <div class="mt-1">
                                <span class="Our_Modalities_style_span"
                                  >Lorem ipsum dolor sit amet consectetur</span
                                >
                              </div>
                              <div>
                                <span class="Our_Modalities_style_span"
                                  >adropising lorem ipsum</span
                                >
                              </div>
                            </div>
                          </div>
                        </v-btn>
                      </v-list-item>
                      <v-list-item class="px-0">
                        <v-btn height="auto" class="py-2" variant="text">
                          <div class="d-flex align-start">
                            <div><img src="img/navbar/3.png" /></div>
                            <div class="ml-5">
                              <div>
                                <span class="Our_Modalities_style_h1">IBA</span>
                              </div>
                              <div class="mt-1">
                                <span class="Our_Modalities_style_span"
                                  >Lorem ipsum dolor sit amet consectetur</span
                                >
                              </div>
                              <div>
                                <span class="Our_Modalities_style_span"
                                  >adropising lorem ipsum</span
                                >
                              </div>
                            </div>
                          </div>
                        </v-btn>
                      </v-list-item>
                      <v-list-item class="px-0">
                        <v-btn height="auto" class="py-2" variant="text">
                          <div class="d-flex align-start">
                            <div>
                              <img src="img/navbar/BreakThroughLogo.png" />
                            </div>
                            <div class="ml-5">
                              <div>
                                <span class="Our_Modalities_style_h1"
                                  >BreakThrough
                                </span>
                              </div>
                              <div class="mt-1">
                                <span class="Our_Modalities_style_span"
                                  >Lorem ipsum dolor sit amet consectetur</span
                                >
                              </div>
                              <div>
                                <span class="Our_Modalities_style_span"
                                  >adropising lorem ipsum</span
                                >
                              </div>
                            </div>
                          </div>
                        </v-btn>
                      </v-list-item>
                      <v-list-item class="px-0">
                        <v-btn height="auto" class="py-2" variant="text">
                          <div class="d-flex align-start">
                            <div><img src="img/navbar/2.png" /></div>
                            <div class="ml-5">
                              <div>
                                <span class="Our_Modalities_style_h1"
                                  >BodyTalk for Animal
                                </span>
                              </div>
                              <div class="mt-1">
                                <span class="Our_Modalities_style_span"
                                  >Lorem ipsum dolor sit amet consectetur</span
                                >
                              </div>
                              <div>
                                <span class="Our_Modalities_style_span"
                                  >adropising lorem ipsum</span
                                >
                              </div>
                            </div>
                          </div>
                        </v-btn>
                      </v-list-item>
                      <v-list-item class="px-0">
                        <v-btn height="auto" class="py-2" variant="text">
                          <div class="d-flex align-start">
                            <div><img src="img/navbar/1.png" /></div>
                            <div class="ml-5">
                              <div>
                                <span class="Our_Modalities_style_h1"
                                  >MindScape
                                </span>
                              </div>
                              <div class="mt-1">
                                <span class="Our_Modalities_style_span"
                                  >Lorem ipsum dolor sit amet consectetur</span
                                >
                              </div>
                              <div>
                                <span class="Our_Modalities_style_span"
                                  >adropising lorem ipsum</span
                                >
                              </div>
                            </div>
                          </div>
                        </v-btn>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <!-- 
                <v-menu
                  transition="scroll-y-transition"
                  offset-x
                  color="transparent"
                >
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" class="text pa-3 px-3" link
                      >Our Modalities
                      <v-icon class="pl-15" style="font-size: x-large"
                        >mdi-menu-right</v-icon
                      >
                    </v-list-item>
                  </template>
                  <v-list class="mt-1" color="transparent">
                    <v-card> asdfsafsdf</v-card>
                  </v-list>
                </v-menu> -->

                  <router-link to="/membership">
                    <v-list-item class="text pa-3 px-3" link
                      >Membership
                    </v-list-item></router-link
                  >
                  <v-list-item class="text pa-3 px-3" link>Blog </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Media / Video
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Resources
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link>FAQ </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Foundation
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >Contact Us
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-menu
                transition="scroll-y-transition"
                offset-y
                color="transparent"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="transparent"
                    variant="flat"
                    v-bind="props"
                    class="mr-1"
                  >
                    <span class="text"> Store</span
                    ><v-icon style="font-size: x-large; color: #595459">
                      mdi-menu-down</v-icon
                    >
                  </v-btn>
                </template>
                <v-list class="mt-1" color="transparent">
                  <v-list-item class="text pa-3 px-3" link
                    >Self-Study Courses Books
                  </v-list-item>
                  <v-list-item class="text pa-3 px-3" link
                    >All Products
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu
                transition="scroll-y-transition"
                offset-y
                color="transparent"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="transparent"
                    variant="flat"
                    v-bind="props"
                    class="text"
                  >
                    <span class="text">Forum</span
                    ><v-icon style="font-size: x-large; color: #595459">
                      mdi-menu-down</v-icon
                    >
                  </v-btn>
                </template>
                <v-list class="mt-1" color="transparent">
                  <v-list-item class="text pa-3 px-3" link
                    >Go to Forum
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
            <!------------------navigation bar end------------------------------------------------>
          </div>
        </div>
      </nav>
      <!------------------mobile navigation bar start----------------------------------------->
      <nav
        class="toolbar toolbar-mobile"
        :class="{ 'toolbar-scrolled': scrolled }"
      >
        <button class="btn-menu" @click="isSidebarOpen = !isSidebarOpen">
          <v-icon style="color: #d18911" v-if="!isSidebarOpen">mdi-menu</v-icon>
          <v-icon style="color: #d18911" v-if="isSidebarOpen">mdi-close</v-icon>
        </button>
        <div class="logo">
          <a>
            <img src="img/logos/icon.svg" alt="BodyTalk" @click="openLogin()" />
          </a>
        </div>
        <button v-if="!isLogged" @click="openLogin()">
          <v-icon>mdi-account-circle</v-icon>
        </button>
        <v-menu v-else location="start">
          <template v-slot:activator="{ props }">
            <button v-bind="props" @click="UserMenu = true">
              <v-icon>mdi-account-circle</v-icon>
            </button>
          </template>
          <v-card>
            <v-card-text class="text-subtitle-1 my-2">
              Hi,Axel!
              <v-divider></v-divider>
              <v-list>
                <v-list-tile
                  v-for="navItem in userMenuItems"
                  :key="navItem.name"
                >
                  <v-list-tile-title
                    style="
                      display: flex;
                      align-items: end;
                      gap: 1rem;
                      font-size: 20px;
                      color: rgba(34, 34, 34, 0.7);
                    "
                    class="mb-3"
                    v-if="navItem.name != 'divider'"
                  >
                    <v-icon>{{ navItem.icon }}</v-icon>
                    {{ navItem.name }}</v-list-tile-title
                  >
                  <v-divider v-else></v-divider>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-menu>

        <div class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
          <div class="search-component" style="position: relative">
            <v-text-field
              single-line
              variant="outlined"
              prepend-inner-icon="mdi-magnify"
              label="Search"
              hide-details=""
            >
            </v-text-field>
          </div>
          <v-menu transition="scroll-y-transition" offset-y color="transparent">
            <template v-slot:activator="{ props }">
              <v-btn
                color="transparent"
                variant="flat"
                v-bind="props"
                class="text mr-1"
              >
                <span class="text"> Practitioners</span
                ><v-icon style="font-size: x-large; color: #595459">
                  mdi-menu-down</v-icon
                >
              </v-btn>
            </template>
            <v-list class="mt-1" color="transparent">
              <v-list-item class="text pa-3 px-3" link
                >Find a b c Certified Practitioner
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >Find Animal Practitioners
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >Find Advances Practitioners
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >Find PaRama Practitioners
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >Find Instructors
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >Read more about....
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu transition="scroll-y-transition" offset-y color="transparent">
            <template v-slot:activator="{ props }">
              <v-btn
                color="transparent"
                variant="flat"
                v-bind="props"
                class="text mr-1"
              >
                <span class="text">Courses</span
                ><v-icon style="font-size: x-large; color: #595459">
                  mdi-menu-down</v-icon
                >
              </v-btn>
            </template>
            <v-list class="mt-1" color="transparent">
              <v-list-item class="text pa-3 px-3" link
                >Find a Live Course
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >Find a Self-Study Course
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu transition="scroll-y-transition" offset-y color="transparent">
            <template v-slot:activator="{ props }">
              <v-btn
                color="transparent"
                variant="flat"
                v-bind="props"
                class="text mr-1"
              >
                <span class="text"> Careers</span
                ><v-icon style="font-size: x-large; color: #595459">
                  mdi-menu-down</v-icon
                >
              </v-btn>
            </template>
            <v-list class="mt-1" color="transparent">
              <v-list-item class="text pa-3 px-3" link
                >Become a Practitioner
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >Become an Instructor Non-Profit-Work
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu transition="scroll-y-transition" offset-y color="transparent">
            <template v-slot:activator="{ props }">
              <v-btn
                color="transparent"
                variant="flat"
                v-bind="props"
                class="text mr-1"
              >
                <span class="text">Learn more </span
                ><v-icon style="font-size: x-large; color: #595459">
                  mdi-menu-down</v-icon
                >
              </v-btn>
            </template>

            <v-list class="mt-1" color="transparent">
              <router-link to="/company">
                <v-list-item class="text pa-3 px-3" link
                  >IBA
                </v-list-item></router-link
              >
              <router-link to="/testimonial">
                <v-list-item class="text pa-3 px-3" link
                  >Testimonials
                </v-list-item></router-link
              >
              <v-menu transition="scale-transition" origin=" right top ">
                <template v-slot:activator="{ props }">
                  <v-list-item class="text py-3 pl-3" link v-bind="props">
                    <div class="d-flex justify-space-between">
                      Our Modalities
                      <v-icon class="ml-14">mdi-menu-right</v-icon>
                    </div>
                  </v-list-item>
                </template>
                <v-list class="Our_Modalities_style">
                  <v-list-item class="px-0">
                    <v-btn
                      height="auto"
                      class="py-2 d-flex justify-start"
                      variant="text"
                      block
                    >
                      <div class="d-flex justify-start">
                        <div class="d-flex align-center justify-space-between">
                          <div><img src="img/navbar/5.png" /></div>
                          <div class="ml-5">
                            <div>
                              <span class="Our_Modalities_style_h1"
                                >BodyTalk</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </v-btn>
                  </v-list-item>
                  <v-list-item class="px-0">
                    <v-btn
                      height="auto"
                      class="py-2 d-flex justify-start"
                      variant="text"
                      block
                    >
                      <div class="d-flex align-center">
                        <div><img src="img/navbar/4.png" /></div>
                        <div class="ml-5">
                          <div>
                            <span class="Our_Modalities_style_h1"
                              >FreeFall</span
                            >
                          </div>
                        </div>
                      </div>
                    </v-btn>
                  </v-list-item>
                  <v-list-item class="px-0">
                    <v-btn
                      height="auto"
                      class="py-2 d-flex justify-start"
                      variant="text"
                      block
                    >
                      <div class="d-flex align-center">
                        <div><img src="img/navbar/3.png" /></div>
                        <div class="ml-5">
                          <div>
                            <span class="Our_Modalities_style_h1">IBA</span>
                          </div>
                        </div>
                      </div>
                    </v-btn>
                  </v-list-item>
                  <v-list-item class="px-0">
                    <v-btn
                      height="auto"
                      class="py-2 d-flex justify-start"
                      variant="text"
                      block
                    >
                      <div class="d-flex align-center">
                        <div><img src="img/navbar/BreakThroughLogo.png" /></div>
                        <div class="ml-5">
                          <div>
                            <span class="Our_Modalities_style_h1"
                              >BreakThrough
                            </span>
                          </div>
                        </div>
                      </div>
                    </v-btn>
                  </v-list-item>
                  <v-list-item class="px-0">
                    <v-btn
                      height="auto"
                      class="py-2 d-flex justify-start"
                      variant="text"
                      block
                    >
                      <div class="d-flex align-center">
                        <div><img src="img/navbar/2.png" /></div>
                        <div class="ml-5">
                          <div>
                            <span class="Our_Modalities_style_h1"
                              >BodyTalk for Animal
                            </span>
                          </div>
                        </div>
                      </div>
                    </v-btn>
                  </v-list-item>
                  <v-list-item class="px-0">
                    <v-btn
                      height="auto"
                      class="py-2 d-flex justify-start"
                      variant="text"
                      block
                    >
                      <div class="d-flex align-center">
                        <div><img src="img/navbar/1.png" /></div>
                        <div class="ml-5">
                          <div>
                            <span class="Our_Modalities_style_h1"
                              >MindScape
                            </span>
                          </div>
                        </div>
                      </div>
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
              <router-link to="/membership">
                <v-list-item class="text pa-3 px-3" link
                  >Membership
                </v-list-item></router-link
              >
              <v-list-item class="text pa-3 px-3" link>Blog </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >Media / Video
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link>Resources </v-list-item>
              <v-list-item class="text pa-3 px-3" link>FAQ </v-list-item>
              <v-list-item class="text pa-3 px-3" link>Foundation </v-list-item>
              <v-list-item class="text pa-3 px-3" link>Contact Us </v-list-item>
            </v-list>
          </v-menu>

          <v-menu transition="scroll-y-transition" offset-y color="transparent">
            <template v-slot:activator="{ props }">
              <v-btn
                color="transparent"
                variant="flat"
                v-bind="props"
                class="mr-1"
              >
                <span class="text"> Store</span
                ><v-icon style="font-size: x-large; color: #595459">
                  mdi-menu-down</v-icon
                >
              </v-btn>
            </template>
            <v-list class="mt-1" color="transparent">
              <v-list-item class="text pa-3 px-3" link
                >Self-Study Courses Books
              </v-list-item>
              <v-list-item class="text pa-3 px-3" link
                >All Products
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu transition="scroll-y-transition" offset-y color="transparent">
            <template v-slot:activator="{ props }">
              <v-btn
                color="transparent"
                variant="flat"
                v-bind="props"
                class="text"
              >
                <span class="text">Forum</span
                ><v-icon style="font-size: x-large; color: #595459">
                  mdi-menu-down</v-icon
                >
              </v-btn>
            </template>

            <v-list class="mt-1" color="transparent">
              <v-list-item class="text pa-3 px-3" link
                >Go to Forum
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- <button class="btn">
          Practitioners <v-icon>mdi-menu-down</v-icon>
        </button>
        <button class="btn">Courses <v-icon>mdi-menu-down</v-icon></button>
        <button class="btn">Careers <v-icon>mdi-menu-down</v-icon></button>
        <button class="btn">Learn more <v-icon>mdi-menu-down</v-icon></button>
        <button class="btn">Store <v-icon>mdi-menu-down</v-icon></button> -->

          <div class="row d-flex" style="width: 99.9%; margin: auto; gap: 1rem">
            <button class="btn" style="width: initial">English</button>
            <button class="btn" style="width: initial">USD</button>
          </div>
        </div>
      </nav>
      <!------------------mobile navigation bar end----------------------------------------->
    </div>
    <LoginModel :Dialog="loginDialoag" @CloseModel="CloseModel"></LoginModel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LanguageComponent from "@/components/HomePage/Language.component.vue";
import LoginModel from "../../components/accounts/LoginModel.vue";
export default defineComponent({
  components: { LanguageComponent, LoginModel },
  name: "Header",
  data() {
    return {
      logo: require("./bodytalk-logo.svg"),
      LanguageDialog: false,
      LanguageDialog2: false,
      loginDialoag: false,
      isSidebarOpen: false,
      scrolled: false,
      isLogged: false, //if login
      UserMenu: false,
      userMenuItems: [
        {
          route: "/",
          name: "Seminar",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Coordinators",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Locations",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "My Admin",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Instructor-Only Downloads",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Downloads",
          icon: "mdi-home",
        },
        {
          name: "divider",
        },
        {
          route: "/",
          name: "Profile",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Forums",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Study Groups and Events",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Members-only videos",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Blog",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "My Certifications",
          icon: "mdi-home",
        },
        {
          route: "/",
          name: "Instructor Training Guidelines",
          icon: "mdi-home",
        },
      ],
    };
  },
  methods: {
    close() {
      this.LanguageDialog = false;
      this.LanguageDialog2 = false;
    },
    openLogin() {
      this.loginDialoag = true;
    },
    CloseModel() {
      this.loginDialoag = false;
    },
  },
});
</script>

<style scoped>
.LanguageDialog_span {
  color: rgba(34, 34, 34, 0.7);
  transition: all 0.3s ease;
  letter-spacing: -0.25px !important;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.v-input--density-default {
  --v-input-control-height: 50px;
  --v-input-padding-top: 16px;
}
.text {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0px;
  color: #595459;
}
element.style {
  max-height: 451px;
  max-width: 1559px;
  min-width: 188.875px;
  --v-overlay-anchor-origin: bottom left;
  transform-origin: left top;
  top: 140px;
  left: 880px;
}
.Our_Modalities_style {
  top: 7.2em !important ;
  right: -112%;
}
@media screen and (max-width: 959px) {
  .Our_Modalities_style {
    top: 7.2em !important ;
    right: 0%;
  }
}

.Our_Modalities_style_h1 {
  font-family: "DM Sans";
  font-size: 13px;
  display: block;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0;
}
.Our_Modalities_style_span {
  letter-spacing: 0;
  font-family: "DM Sans";
  font-size: 12px;
  font-weight: 400;
  display: block;
  text-align: left;
  color: rgba(34, 34, 34, 0.7);
}
</style>
