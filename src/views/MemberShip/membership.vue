<template>
  <div class="pricing-page intro-component-animation">
    <div class="container">
      <div class="background-color"></div>

      <div class="title-header">
        <h1>
          <b><span class="color-primary">IBA Membership</span> and Benefits</b>
        </h1>
        <p>
          The International BodyTalk Association and The BodyTalk System are
          internationally recognized, with Members, Practitioners, and
          Instructors in dozens of countries around the world. The IBA regularly
          reviews and updates Membership benefits to provide the most up-to-date
          and useful services to our Members. The main reason so many of our
          students opt for IBA Membership is for the enhanced educational
          support it provides, the distinction of being affiliated with a
          professional, centralized, international association, and the
          enjoyment of establishing connections and relationships with fellow
          Members.
        </p>
      </div>
      <div class="table-container">
        <div class="row d-flex">
          <div id="tablePricing" class="table animated pb-9">
            <div
              class="sticky-pricing-container animated d-flex"
              style="background: white; z-index: 2"
            >
              <div class="column column-first">
                <div class="slide-toggle d-flex">
                  <div class="boxes" @click="yearlyActive = false">Monthly</div>
                  <div class="boxes" @click="yearlyActive = true">Yearly</div>
                  <div
                    class="box-active animated"
                    :class="{ 'yearly-active': yearlyActive }"
                  ></div>
                  <div v-if="yearlyActive" class="chip">Save %20</div>
                </div>
              </div>

              <div class="col">
                <div class="plan-header animated">
                  <p class="title animated">Starter</p>
                  <div class="price animated">$0</div>
                  <p class="animated"><small> Per month </small></p>
                  <div class="d-flex justify-center">
                    <v-btn variant="outlined">
                      <span><a> Choose Plan </a></span>
                    </v-btn>
                  </div>
                  <!--<div class="current-plan animated">YOU HAVE <br> THIS PACKAGE</div>-->
                </div>
              </div>

              <div class="col">
                <div class="plan-header animated">
                  <p class="title animated">Access</p>
                  <div v-if="!yearlyActive" class="price animated">$40</div>
                  <div v-if="yearlyActive" class="price animated">$80</div>
                  <p class="animated"><small> Per month </small></p>
                  <div class="d-flex justify-center">
                    <v-btn variant="outlined">
                      <span><a> Choose Plan </a></span>
                    </v-btn>
                  </div>
                  <!-- <div v-if="false" class="current-plan animated">
                    {{ "pricing.you-have-this-package" }} YOU HAVE <br />
                    THIS PACKAGE
                  </div> -->
                </div>
              </div>

              <div class="col">
                <div class="plan-header animated">
                  <p class="title animated">Life Science</p>
                  <div v-if="!yearlyActive" class="price animated">$75</div>
                  <div v-if="yearlyActive" class="price animated">$150</div>
                  <p class="animated"><small> Per month </small></p>
                  <div class="d-flex justify-center">
                    <v-btn variant="outlined">
                      <span><a> Choose Plan </a></span>
                    </v-btn>
                  </div>
                  <!-- <div *ngIf="false" class="current-plan animated">
                    {{ "pricing.you-have-this-package" }}
                  </div> -->
                </div>
              </div>

              <div class="col">
                <div class="plan-header animated">
                  <p class="title animated">Standard</p>
                  <div v-if="!yearlyActive" class="price animated">$150</div>
                  <div v-if="yearlyActive" class="price animated">$300</div>
                  <p class="animated"><small> Per month </small></p>
                  <div class="d-flex justify-center">
                    <v-btn variant="outlined">
                      <span><a> Choose Plan </a></span>
                    </v-btn>
                  </div>
                  <!-- <div *ngIf="false" class="current-plan animated">
                    {{ "pricing.you-have-this-package" }}
                  </div> -->
                </div>
              </div>

              <div class="col">
                <div class="plan-header plan-header-primary animated">
                  <p class="title animated">Practiticing</p>
                  <div v-if="!yearlyActive" class="price animated">$300</div>
                  <div v-if="yearlyActive" class="price animated">$600</div>
                  <p class="animated"><small> Per month </small></p>
                  <div class="d-flex justify-center">
                    <v-btn variant="outlined">
                      <span><a> Choose Plan </a></span>
                    </v-btn>
                  </div>
                  <!-- <div *ngIf="false" class="current-plan animated">
                    {{ "pricing.you-have-this-package" }}
                  </div> -->
                </div>
              </div>

              <div class="col">
                <div class="plan-header animated">
                  <p class="title animated">Instructor</p>
                  <div class="price price-small animated">Contact Us</div>
                  <p class="animated"><small> Flexible Plan </small></p>
                  <div class="d-flex justify-center">
                    <v-btn variant="outlined">
                      <span><a> Choose Plan </a></span>
                    </v-btn>
                  </div>
                  <!-- <div *ngIf="false" class="current-plan animated">
                    {{ "pricing.you-have-this-package" }}
                  </div> -->
                </div>
              </div>
            </div>
            <div>
              <table class="table">
                <thead>
                  <tr class="">
                    <th class="text-left header-sticky">Name</th>
                    <th class="text-left">Calories</th>
                    <th class="text-left">Calories</th>
                    <th class="text-left">Calories</th>
                    <th class="text-left">Calories</th>
                    <th class="text-left">Calories</th>
                    <th class="text-left">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td class="header-sticky">{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="alert alert-warning">
        <mat-icon>info</mat-icon>
        Students and practitioners of all levels also find that by being a part
        of the organization, their own work and sessions are deeper and more
        effective. Through their monetary support of the organization that
        supports them, their refinement, clarity, and purpose as a practitioner
        and simply as a human being is strengthened.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      yearlyActive: false,
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
      ],
    };
  },
});
</script>
